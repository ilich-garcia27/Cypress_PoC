class SigninPage {
  visit() {
    cy.visit('/signin');
  }

  get acceptCookiesButton() {
    return cy.get('#onetrust-accept-btn-handler');
  }

  get emailInput() {
    return cy.get(':nth-child(2) > .Input-css__InputStyled-sc-22fe6e36-0');
  }

  get passwordInput() {
    return cy.get('.SignIn-css__PasswordContainer-sc-5bd9e022-4 > .sign-in__input-group > .Input-css__InputStyled-sc-22fe6e36-0');
  }

  get signInButton() {
    return cy.get('.Button-css__ButtonV2-sc-2061d39f-0');
  }

  get welcomeMessage() {
    return cy.get('.CTADashboardPage-css__WelcomeText-sc-8f13290b-10');
  }

  enterCredentials(email, password) {
    if (email != "") {
      this.emailInput.should('be.visible').clear().type(email);
    }

    if (password != "") {
      this.passwordInput.should('be.visible').clear().type(password);
    }
  }
}

export default new SigninPage();