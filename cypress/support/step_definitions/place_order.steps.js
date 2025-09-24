import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SignInPage from '../../page_objects/SignInPage';
import DashboardPage from '../../page_objects/DashboardPage';
import PatientInformationPage from '../../page_objects/PatientInformationPage';
import OrderPreviewPage from '../../page_objects/OrderPreviewPage';

Given('I open the sign in page', () => {
  SignInPage.visit();
  SignInPage.acceptCookiesButton.should('be.visible').click();
});

When('I enter valid credentials', () => {
  SignInPage.enterValidCredentials();
});

When('I click the sign in button', () => {
  cy.intercept('GET', 'https://qa.meetmarlo.com/assets/locale/en/ecp.json').as('getECP'); // Intercept the ECP data request.
  SignInPage.signInButton.should('be.visible').click();
});

When('I click ENTER RX button in the dashboard', () => {
  cy.wait('@getECP', { timeout: 10000 }); // // Wait until the ECP data is loaded.
  DashboardPage.enterRXButton.should('exist').and('contain.text', 'Enter Rx').click();
});

When('I click MANUAL ENTRY button', () => {
  DashboardPage.manualEntryButton.should('exist').and('contain.text', 'Manual Entry').click();
});

When('I enter patient information', () => {
  const patient = DashboardPage.enterPatientInfo();
  cy.wrap(patient).as('patient'); // Store patient data for later use
});

When('I enter RX information', () => {
  PatientInformationPage.enterPatientInfo();
  OrderPreviewPage.createOrderInOffice();
});
