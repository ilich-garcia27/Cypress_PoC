class OrderPlacedPage {
  get gotItButton() {
    return cy.get('.InOfficeConfirmationRemindersModal-css__Wrapper-sc-47b23186-0 > .Button-css__ButtonV2-sc-2061d39f-0');
  }

  get orderConfirmationText() {
    return cy.get('.header__instructions');
  }

  verifyOrderPlaced(confirmationMessage) {
    cy.url().should('include', '/office-checkout/confirmation');
    this.gotItButton.should('be.visible').and('not.be.disabled').click();
    this.orderConfirmationText.should('be.visible').and('contain.text', confirmationMessage);
  }
}

export default new OrderPlacedPage();