class PatientOrderPage {
  get nextButton() {
    return cy.get('.Button-css__ButtonV2-sc-2061d39f-0');
  }

  selectSupply({ eye, type, months }) {
    // Looking for the container according to the eye
    cy.get('.supply-selector__eye-selector').contains(`${eye} Eye`).parent().then(($eyeContainer) => {
      // Within the eye container, I look for the dropdown depending on the label
      cy.wrap($eyeContainer)
        .find('.dropdown__label')
        .contains(type)
        .parent() // The dropdown container
        .find('.dropdown__dropdown-wrapper')
        .click(); // Open the dropdown

      // Select the desired option
      cy.wrap($eyeContainer)
        .find('.dropdown__options-wrapper')
        .contains(`${months} months`)
        .click();
    });
  }

  fillInSupplySelection() {
    cy.wait('@checkProductAvailability').its('response.statusCode').should('eq', 200);
    // Shipped Supply - 0 months for both eyes
    this.selectSupply({ eye: 'Right', type: 'Shipped Supply', months: 0 });
    this.selectSupply({ eye: 'Left', type: 'Shipped Supply', months: 0 });
    // In-Office Supply - 12 months for both eyes
    this.selectSupply({ eye: 'Right', type: 'In Office Supply', months: 12 });
    this.selectSupply({ eye: 'Left', type: 'In Office Supply', months: 12 });

    cy.intercept('POST', /\/shopping\/.*\/shipping-options/).as('shippingOptions');
    this.nextButton.should('be.visible').and('not.be.disabled').click();
  }
}

export default new PatientOrderPage();