package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class NewAndUsedCarSearchPage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @CacheLookup
    @FindBy(id = "makes")
    WebElement makeDropDown;

    @CacheLookup
    @FindBy(id = "models")
    WebElement modelDropDown;

    @CacheLookup
    @FindBy(id = "locations")
    WebElement locationDropDown;

    @CacheLookup
    @FindBy(id = "priceTo")
    WebElement priceDropDown;

    @CacheLookup
    @FindBy(id = "search-submit")
    WebElement findMyNextCarTab;

    @FindBy(xpath = "//h1[normalize-space()='New & Used Car Search - carsguide']")
    WebElement newAndUsedCarSearchTxt;

    public void verifyNewAndUsedCarSearchTxt(){
        verifyThatTextIsDisplayed(newAndUsedCarSearchTxt,"New & Used Car Search - carsguide");
    }

    public void selectMake(String make){
        selectByVisibleTextFromDropDown(makeDropDown,make);
        log.info("Selecting make  " + makeDropDown.toString());
    }

    public void selectModel(String model){
        selectByVisibleTextFromDropDown(modelDropDown,model);
        log.info("Selecting model  " + modelDropDown.toString());
    }

    public void selectLocation(String location){
        selectByVisibleTextFromDropDown(locationDropDown,location);
        log.info("Selecting location  " + locationDropDown.toString());
    }
    public void selectMaxPrice(String maxPrice){
        selectByVisibleTextFromDropDown(priceDropDown,maxPrice);
        log.info("Selecting max price  " + priceDropDown.toString());
    }
    public void clickOnFindMyNextCarTab(){
       clickOnElement(findMyNextCarTab);
        log.info("Clicking on find my next car  " + findMyNextCarTab.toString());

    }
}
