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

  enterPatientInfo() {
    const patient = this.generateRandomUser();

    this.emailInput.should('be.visible').clear().type(patient.email);
    this.firstNameInput.should('be.visible').clear().type(patient.firstName);
    this.lastNameInput.should('be.visible').clear().type(patient.lastName);
    this.scheduledExamDateInput.should('be.visible').clear().type(patient.scheduledExamDate);

    return patient;
  }

  generateRandomUser() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@mailinator.com";
    const scheduledExamDate = getCurrentDateMMDDYYYY();

    return { firstName, lastName, email, scheduledExamDate };
  }
}

export default new DashboardPage();