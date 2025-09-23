import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SignInPage from '../../page_objects/SignInPage';

Given('I open the sign in page', () => {
  SignInPage.visit();
  SignInPage.acceptCookiesButton.should('be.visible').click();
});

When('I enter email {string} and password {string}', (email, password) => {
  SignInPage.enterCredentials(email, password);
});

When('I click the sign in button', () => {
  cy.intercept('GET', 'https://qa.meetmarlo.com/assets/locale/en/ecp.json').as('getECP'); // Intercept the ECP data request.
  SignInPage.signInButton.should('be.visible').click();
});

Then('I should see the dashboard page', () => {
  cy.wait('@getECP', { timeout: 10000 }); // // Wait until the ECP data is loaded.
  SignInPage.welcomeMessage.should('exist').and('contain.text', 'Welcome');
});
