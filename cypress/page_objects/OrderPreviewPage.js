class OrderPreviewPage {
  get dispenseFromInventoryLabel() {
    return cy.contains(/Dispense Product From Inventory/i);
  }

  get createOrderInOfficeButton() {
    return cy.get('.Button-css__ButtonV2-sc-2061d39f-0');
  }

  createOrderInOffice() {
    this.dispenseFromInventoryLabel.should('exist').click();
    this.createOrderInOfficeButton.should('exist').click();
  }
}

export default new OrderPreviewPage();