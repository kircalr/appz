const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

window.config = {
  links: {
    redirectLink: "https://trck.hapecg.com/click",
    copyLink: `https://trck.hapecg.com/click`,
    analyticsLink: `https://trck.hapecg.com/click`,
  },
  localization: {
    localesPath: "./locales/",
  },
};







