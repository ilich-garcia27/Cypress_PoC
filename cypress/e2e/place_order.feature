Feature: Patient order and payment
  As an ECP
  I want to log in and create a patient order
  So that the patient order is successfully processed

  Scenario: Patient order creation with credit card
    Given I open the sign in page
    And I enter valid credentials
    And I click the sign in button
    When I click ENTER RX button in the dashboard
    And I click MANUAL ENTRY button
    And I enter patient information
    And I enter RX information
    And I process the order
    And I collect payment in office
    Then I should see a confirmation message saying "Your order has been placed!"