Feature: Patient RX
  As an ECP
  I want to log in and create a patient order
  So that the patient order is successfully processed

  Scenario: Patient order creation with In-Office payment
    Given I open the sign in page
    And I enter valid credentials
    When I enter patient details
    And I enter patient RX information
    And I process the order
    And I collect payment in office
    Then I should see a confirmation message saying "Your order has been placed!"