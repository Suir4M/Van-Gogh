/* =========================================================
   Choix de la langue (FR / EN)
   Utilisé par la page d'accueil et par les pages d'œuvres.
   Les textes viennent de translations.js.
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "vangogh-language";
  const DEFAULT_LANGUAGE = "fr";
  const languages = Object.keys(TRANSLATIONS);

  function readStoredLanguage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return languages.includes(stored) ? stored : null;
    } catch {
      return null; /* stockage bloqué (navigation privée, etc.) */
    }
  }

  function storeLanguage(language) {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* la langue ne sera simplement pas mémorisée */
    }
  }

  function translate(key, language) {
    return TRANSLATIONS[language][key] ?? TRANSLATIONS[DEFAULT_LANGUAGE][key] ?? key;
  }

  /* data-i18n="clé" remplace le texte ;
     data-i18n-attr="aria-label:clé; alt:clé" remplace des attributs. */
  function applyLanguage(language) {
    const t = (key) => translate(key, language);

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      element.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attribute, key] = pair.split(":").map((part) => part.trim());
        element.setAttribute(attribute, t(key));
      });
    });

    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === language));
    });

    updateDocumentHead(language, t);
  }

  /* Page d'accueil : titre et description du site.
     Page d'œuvre (body[data-artwork]) : titre de l'œuvre suivi du nom du site. */
  function updateDocumentHead(language, t) {
    const artwork = document.body.dataset.artwork;

    document.title = artwork
      ? `${t(`stars.${artwork}`)} · ${t("brandName")}`
      : t("meta.title");

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", t("meta.description"));
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      storeLanguage(button.dataset.lang);
      applyLanguage(button.dataset.lang);
    });
  });

  applyLanguage(readStoredLanguage() ?? DEFAULT_LANGUAGE);
})();
