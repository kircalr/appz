"use strict";

document.addEventListener("DOMContentLoaded", async () => {
  const activeElements = document.querySelectorAll(".active");

  // Copy link to clipboard
  const copyLink = async () => {
    await navigator.clipboard.writeText(window.config.links.copyLink);
  };

  // Click handler on all active elements
  activeElements.forEach((elem) => {
    elem.addEventListener("click", async () => {
      await copyLink();
      window.location.replace(window.config.links.redirectLink);
    });
  });

  // Localization
  let langDocument = {};

  const processLangDocument = () => {
    var tags = document.querySelectorAll(
      "div,span,strong,img,a,label,li,option,h1,h2,h3,h4,h5,h6,button,p"
    );
    Array.from(tags).forEach(function (value) {
      var key = value.dataset.langkey;
      if (langDocument[key]) value.innerHTML = langDocument[key];
    });
  };

  const getLocales = async () => {
    const language = window.navigator.language.split("-")[0];
    const response = await fetch(`${window.config.localization.localesPath}${language}.json`);
    const responseText = await response.json();
    langDocument = responseText;
    processLangDocument();
  };

  getLocales();
});
