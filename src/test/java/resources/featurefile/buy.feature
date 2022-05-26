Feature: Search functionality

  Scenario Outline: Search the buy car with model
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click ‘Search Cars’ link
    Then I navigate to ‘new and used car search’ page
    And I select make "<MAKE>"
    And I select model "<MODEL>"
    And I select location "<LOCATION>"
    And I select price "<PRICE>"
    And I click on Find My Next Car tab
    Then I should see the make "<MAKE>" in results

    Examples:
      | MAKE          | MODEL    | LOCATION           | PRICE    |
      | Audi          | A1       | NSW - Newcastle    | $50,000  |
#      | Ford          | Fiesta   | ACT - All          | $80,000  |
#      | BMW           | 1 Series | NSW - All          | $60,000  |
#      | Honda         | CR-V     | NT - South         | $70,000  |
#      | Hyundai       | Accent   | NSW - Central West | $40,000  |
#      | Mercedes-Benz | A-Class  | NSW - New England  | $100,000 |


  Scenario Outline: Search the used car with model
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click ‘Used’ link
    Then I navigate to ‘Used Cars For Sale’ page
    And I select make "<MAKE>"
    And I select model "<MODEL>"
    And I select location "<LOCATION>"
    And I select price "<PRICE>"
    And I click on Find My Next Car tab
    Then I should see the make "<MAKE>" in results

    Examples:
      | MAKE          | MODEL    | LOCATION           | PRICE    |
      | Audi          | A1       | NSW - Newcastle    | $50,000  |
#      | Ford          | Fiesta   | ACT - All          | $80,000  |
#      | BMW           | 1 Series | NSW - All          | $60,000  |
#      | Honda         | CR-V     | NT - South         | $70,000  |
#      | Hyundai       | Accent   | NSW - Central West | $40,000  |
#      | Mercedes-Benz | A-Class  | NSW - New England  | $100,000 |