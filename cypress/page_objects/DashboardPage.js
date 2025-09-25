import { faker } from '@faker-js/faker';
import { getCurrentDateMMDDYYYY } from '../support/helpers/dateHelper';

class DashboardPage {
  visit() {
    cy.visit('/dashboard');
  }

  get enterRXButton() {
    return cy.get('.PatientInfoEntryButtonAndModal-css__ButtonContainer-sc-f425eafa-4 > .Button-css__ButtonV2-sc-2061d39f-0');
  }

  get manualEntryButton() {
    return cy.get('.PatientInfoEntryButtonAndModal-css__ButtonDropdown-sc-f425eafa-2 > :nth-child(2)');
  }

  get emailInput() {
    return cy.get('#email');
  }

  get firstNameInput() {
    return cy.get('#firstName');
  }

  get lastNameInput() {
    return cy.get('#lastName');
  }

  get scheduledExamDateInput() {
    return cy.get('#scheduledExamDate');
  }

  get enterRXButtonInModal() {
    return cy.get(':nth-child(6) > .Popover-css__Trigger-sc-32d8e327-1 > .Button-css__ButtonV2-sc-2061d39f-0');
  }

  get patientConsentButton() {
    return cy.get('#consent-wrapper > .Checkbox-css__CheckboxLabel-sc-fe1d40e3-0');
  }

  get nextButtonInPatientConsent() {
    return cy.get('.PatientVerbalConsentModal-css__ButtonContainer-sc-348a6570-8 > .Button-css__ButtonV2-sc-2061d39f-0');
  }

  openPatientModal() {
    this.enterRXButton.should('exist').and('contain.text', 'Enter Rx').click();
    this.manualEntryButton.should('exist').and('contain.text', 'Manual Entry').click();
  }

  enterPatientDetails() {
    const patient = this.generateRandomUser();

    this.emailInput.should('be.visible').clear().type(patient.email);
    this.firstNameInput.should('be.visible').clear().type(patient.firstName);
    this.lastNameInput.should('be.visible').clear().type(patient.lastName);
    this.scheduledExamDateInput.should('be.visible').clear().type(patient.scheduledExamDate);
    this.enterRXButtonInModal.should('be.visible').click();
    this.patientConsentButton.should('be.visible').click();
    this.nextButtonInPatientConsent.should('be.visible').click();

    cy.wrap(patient).as('patient'); // Store patient data for later use.
  }

  generateRandomUser() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = "cypress." + firstName.toLowerCase() + "." + lastName.toLowerCase() + "@mailinator.com";
    const scheduledExamDate = getCurrentDateMMDDYYYY();

    return { firstName, lastName, email, scheduledExamDate };
  }
}

export default new DashboardPage();