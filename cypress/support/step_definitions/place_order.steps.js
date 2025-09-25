import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SignInPage from '../../page_objects/SignInPage';
import DashboardPage from '../../page_objects/DashboardPage';
import PatientInformationPage from '../../page_objects/PatientInformationPage';
import OrderPreviewPage from '../../page_objects/OrderPreviewPage';
import PatientOrderPage from '../../page_objects/PatientOrderPage';
import ReviewAndPayPage from '../../page_objects/ReviewAndPayPage';
import OrderPlacedPage from '../../page_objects/OrderPlacedPage';

Given('I open the sign in page', () => {
  SignInPage.visit();
  SignInPage.acceptCookiesButton.should('be.visible').click();
});

When('I enter valid credentials', () => {
  SignInPage.enterValidCredentials();
});

When('I click ENTER RX button in the dashboard', () => {
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
});

When('I process the order', () => {
  OrderPreviewPage.createOrderInOffice();
  PatientOrderPage.fillInSupplySelection();
});

When('I collect payment in office', () => {
  ReviewAndPayPage.payDirectlyToOffice();
});

Then('I should see a confirmation message saying {string}', (confirmationMessage) => {
  OrderPlacedPage.closeItemsToCollectModal();
  OrderPlacedPage.verifyOrderPlaced(confirmationMessage);
});