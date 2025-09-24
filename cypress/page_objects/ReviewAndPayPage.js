class PatientOrderPage {
  get payDirectlyToOfficeButton() {
    return cy.get(':nth-child(3) > .RadioButtonInput-css__InputWrapper-sc-c6099cae-0 > :nth-child(2)');
  }
  
  get readyToPayButton() {
    return cy.get('.Button-css__ButtonV2-sc-2061d39f-0');
  }
  
  get paymentCollectedButton() {
    return cy.get('.confirm-direct-payment-modal__button-container > .Button-css__ButtonV2-sc-2061d39f-0');
  }

  payDirectlyToOffice() {
    cy.wait('@shippingOptions').its('response.statusCode').should('eq', 200);
    this.payDirectlyToOfficeButton.should('be.visible').and('not.be.disabled').click();
    this.readyToPayButton.should('be.visible').and('not.be.disabled').click();
    this.paymentCollectedButton.should('be.visible').and('not.be.disabled').click();
  }
}

export default new PatientOrderPage();