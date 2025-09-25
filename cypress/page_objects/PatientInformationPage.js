class PatientInformationPage {
  get newWearerRadioButton() {
    return cy.get('.RadioButtonGroup-css__RadioButtonInputContainer-sc-8e2df138-0 > :nth-child(1) > :nth-child(2)');
  }

  get nextButtonInPatientTypeModal() {
    return cy.get('.cOpQCB');
  }

  get skipButtonInPatientTypeModal() {
    return cy.get('.ContactLensWearerTypeSelectionModal-css__ButtonContainer-sc-f7df6cf-2 > .lepbfm');
  }

  get mobileNumberInput() {
    return cy.get('[name="mobileNumber"]');
  }

  get productDropdown() {
    return cy.get('.choose-product-toggle__title');
  }

  get searchInput() {
    return cy.get('[name="search"]');
  }

  get firstProductButton() {
    return cy.get('.product-selector__list > :nth-child(1)');
  }

  get powerDropdown() {
    return cy.get(':nth-child(1) > .product-selection-card > .EyeParameterSelection-css__CardWrapper-sc-b803661f-0 > .EyeParameterSelection-css__EyeParametersContainer-sc-b803661f-1 > .Dropdown-css__DropdownContainer-sc-f8ae5553-0 > [data-testid="dropdown-selector"] > .dropdown__display-text');
  }

  get powerOption() {
    return cy.get('.dropdown__options-wrapper > :nth-child(29)');
  }

  get ouRxToggle() {
    return cy.get('[name="ou-rx-toggle-0"]');
  }

  get startOrderButton() {
    return cy.get('.jITa-dw');
  }

  enterPatientRXInfo() {
    this.newWearerRadioButton.should('exist').click();
    this.nextButtonInPatientTypeModal.should('exist').click();
    this.mobileNumberInput.should('be.visible').clear().type('4305582933');
    this.productDropdown.should('exist').click();
    this.searchInput.should('be.visible').clear().type('Plus Hydraglyde');
    this.firstProductButton.should('exist').click();
    this.powerDropdown.should('exist').click();
    this.powerOption.should('exist').click();
    this.ouRxToggle.should('exist').click();
    this.startOrderButton.should('exist').click();
  }
}

export default new PatientInformationPage();