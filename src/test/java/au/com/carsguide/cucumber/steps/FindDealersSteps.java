package au.com.carsguide.cucumber.steps;

import au.com.carsguide.pages.CarDealersPage;
import au.com.carsguide.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class FindDealersSteps {
    @And("^I click ‘Find a Dealer’$")
    public void iClickFindADealer() {
        new HomePage().clickOnFindDealersLink();
    }

    @Then("^I navigate to ‘car-dealers’ page$")
    public void iNavigateToCarDealersPage() {
        new CarDealersPage().verifyDealersTxt("Dealers");
    }

    @And("^I should see the dealer names \"([^\"]*)\" are display on page$")
    public void iShouldSeeTheDealerNamesAreDisplayOnPage(String expNames) throws InterruptedException {
        new CarDealersPage().findDealer(expNames);
    }
}
