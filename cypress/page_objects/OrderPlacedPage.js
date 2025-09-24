class OrderPlacedPage {
  get gotItButton() {
    return cy.get('.InOfficeConfirmationRemindersModal-css__Wrapper-sc-47b23186-0 > .Button-css__ButtonV2-sc-2061d39f-0');
  }

  get orderConfirmationText() {
    return cy.get('.header__instructions');
  }

  get orderConfirmationEmail() {
    return cy.get('.shipment-summary__shipping-email');
  }

  closeItemsToCollectModal() {
    this.gotItButton.should('be.visible').and('not.be.disabled').click();
  }

  verifyOrderPlaced(confirmationMessage) {
    cy.url().should('include', '/office-checkout/confirmation');
    this.orderConfirmationText.should('be.visible').and('contain.text', confirmationMessage);

    cy.get('@patient').its('email').then((email) => {
      this.orderConfirmationEmail.should('contain.text', email);
    });
  }
}

export default new OrderPlacedPage();