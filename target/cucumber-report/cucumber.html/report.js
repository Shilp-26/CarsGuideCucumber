$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify",
  "description": "",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \"\u003cdealersName\u003e\" are display on page",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;",
  "rows": [
    {
      "cells": [
        "dealersName"
      ],
      "line": 11,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;1"
    },
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 12,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;2"
    },
    {
      "cells": [
        "4WD Specialist Group"
      ],
      "line": 13,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;3"
    },
    {
      "cells": [
        "5 Star Auto"
      ],
      "line": 14,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;4"
    },
    {
      "cells": [
        "A \u0026 M Car Sales Pty Ltd"
      ],
      "line": 15,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;5"
    },
    {
      "cells": [
        "A1 MOTORS COMPANY"
      ],
      "line": 16,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;6"
    },
    {
      "cells": [
        "ANDREA MOTOR SERVICE"
      ],
      "line": 17,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14172677800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \"3 Point Motors Epping\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 404025200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 335486400,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 1704607100,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 543598700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 Point Motors Epping",
      "offset": 31
    }
  ],
  "location": "FindDealersSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 177122100,
  "status": "passed"
});
formatter.after({
  "duration": 978111800,
  "status": "passed"
});
formatter.before({
  "duration": 7090396000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \"4WD Specialist Group\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 61500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 519899500,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 1858886700,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 508768100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4WD Specialist Group",
      "offset": 31
    }
  ],
  "location": "FindDealersSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 184855900,
  "status": "passed"
});
formatter.after({
  "duration": 939471300,
  "status": "passed"
});
formatter.before({
  "duration": 7091390800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \"5 Star Auto\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 79000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 546015500,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 2032655100,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 350066900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 Star Auto",
      "offset": 31
    }
  ],
  "location": "FindDealersSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 159123200,
  "status": "passed"
});
formatter.after({
  "duration": 945775900,
  "status": "passed"
});
formatter.before({
  "duration": 7525816800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \"A \u0026 M Car Sales Pty Ltd\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 42200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 402620200,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 700526700,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 731044300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A \u0026 M Car Sales Pty Ltd",
      "offset": 31
    }
  ],
  "location": "FindDealersSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 1496227800,
  "status": "passed"
});
formatter.after({
  "duration": 873075700,
  "status": "passed"
});
formatter.before({
  "duration": 6906373900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \"A1 MOTORS COMPANY\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 36800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 633390800,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 2079723000,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 355348100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A1 MOTORS COMPANY",
      "offset": 31
    }
  ],
  "location": "FindDealersSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 170617300,
  "status": "passed"
});
formatter.after({
  "duration": 1167029300,
  "status": "passed"
});
formatter.before({
  "duration": 7426640500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \"ANDREA MOTOR SERVICE\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 487137100,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 2126310000,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 425995600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ANDREA MOTOR SERVICE",
      "offset": 31
    }
  ],
  "location": "FindDealersSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 194543700,
  "status": "passed"
});
formatter.after({
  "duration": 1003717800,
  "status": "passed"
});
});