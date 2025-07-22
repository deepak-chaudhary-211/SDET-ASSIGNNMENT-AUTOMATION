
import LoginPage from '../pages/loginPage';
import AutomationPage from '../pages/automationPage';

Cypress.Commands.add('login', () => {
    const loginPage = new LoginPage();
    const { username, password } = Cypress.env();

    
  loginPage.login(username, password); 
    
  
});

Cypress.Commands.add('logout', () => {
  cy.url().then((url) => {
    if (url.includes('/login')) {
      cy.log('Already logged out.');
    } else if (url === 'about:blank') {
      cy.log('Cypress is on blank page. Skipping logout.');
    } else {
      const loginPage = new LoginPage();
      loginPage.logout();
    }
  });
});

Cypress.Commands.add('openAutomationBotPage', (botName) => {
    
    const automationPage = new AutomationPage();
    automationPage
    .openAutomationBotPage(botName);
    
  });

