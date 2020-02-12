const { I } = inject();

module.exports = {

  //Header
  header: '//*[@id="app-wrapper"]//header',
  mainLogo: '//*[@id="mamba_true"]',
  loginButton: '[data-name="login-action"]',
  registerButton: '[data-name="register-action"]',

  //MainContent
  mainContent: '//*[@id="app-wrapper"]//main',
  agreementLink: '//a[@data-name="agreement"]',

  //RegistrationLinks

  vkLink: '[data-name="vkontakte"]',
  googleLink: '[data-name="google"]',
  facebookLink: '[data-name="facebook"]',
  mailRuLink: '[data-name="mailru_oauth2"]',
  okRuLink: '[data-name="odnoklassniki"]',
  yandexLink: '[data-name="yandex"]',

  //AppLinks

  playMarketLink: '//img[@alt="Google Play"]',
  appStoreLink: '//img[@alt="App Store"]',

  //Footer Links
  aboutCompanyLink: '//a[@data-name="corp-site-action"]',
  shortCutsLink: '//a[@data-name="footer-shortcuts-action"]',
  announcesLink: '//a[@data-name="footer-announce-action"]',
  citiesLink: '//a[@data-name="footer-cities-action"]',
  confidencialLink: '//a[@data-name="footer-confidentiality-action"]',
  supportLink: '//a[@data-name="footer-support-form-action"]',
  languageSelect: '[data-name="lang-select"]',

  // insert your locators and methods here

  checkHeaderElements() {
    I.waitForVisible(this.header);
    I.seeElement(this.mainLogo);
    I.seeElement(this.loginButton);

  },

  checkMainContentElements() {
    I.waitForVisible(this.mainContent);
    I.seeElement(this.agreementLink);
    I.seeElement(this.registerButton);
  
  },

  checkSocialNetworksElements() {
    I.seeElement(this.vkLink);
    I.seeElement(this.googleLink);
    I.seeElement(this.facebookLink);
    I.seeElement(this.mailRuLink);
    I.seeElement(this.okRuLink);
    I.seeElement(this.yandexLink);

  },

  checkAppLinksElements() {
    I.seeElement(this.playMarketLink);
    I.seeElement(this.appStoreLink);

  },

  checkFooterLinks() {
    I.seeElement(this.aboutCompanyLink);
    I.seeElement(this.shortCutsLink);
    I.seeElement(this.announcesLink);
    I.seeElement(this.citiesLink);
    I.seeElement(this.confidencialLink);
    I.seeElement(this.supportLink);
    I.seeElement(this.languageSelect);

  }
}
