Feature('Main Page');

Scenario('Check elements at main page', (I, mainPage) => {
    I.amOnPage('https://www.mamba.ru/ru');
    mainPage.checkHeaderElements();
    mainPage.checkMainContentElements();
    mainPage.checkSocialNetworksElements()
    mainPage.checkAppLinksElements();
    mainPage.checkFooterLinks();

});
