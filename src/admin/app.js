import logo from './extensions/sanaat-logo.png';

const config = {
  // locales: [
  //   // 'tr',
  //   // 'en',
  // ],
  auth: {
    logo,
  },
  head:{
    favicon: logo,
  },
  menu: {
    logo,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Sanaat Admin",

      "app.components.LeftMenu.navbrand.workplace": "Dashboard",

      "Auth.form.welcome.title": "Welcome to Sanaat Admin",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
  tutorials: false,
  notifications: { releases: false },
};

const bootstrap = app => {
  // console.log(app);
};

export default {
  config,
  bootstrap,
};
