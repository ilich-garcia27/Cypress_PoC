Feature: Sign In
  As a registered user
  I want to be able to sign in
  In order to access the MARLÖ dashboard

  Scenario Outline: Successful login with valid credentials
    Given I open the sign in page
    When I enter email "<email>" and password "<password>"
    And I click the sign in button
    Then I should see the dashboard page

    Examples:
      | email                                   | password  |
      | ap-ecp071723-wva@mailinator.com         | Welcome1! |
      