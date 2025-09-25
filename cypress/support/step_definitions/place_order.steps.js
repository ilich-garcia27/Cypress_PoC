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

When('I enter patient details', () => {
  DashboardPage.openPatientModal();
  DashboardPage.enterPatientDetails();
});

When('I enter patient RX information', () => {
  PatientInformationPage.enterPatientRXInfo();
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