package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='buy + sell']")
    WebElement buySellTab;

    @CacheLookup
    @FindBy(xpath = " //a[normalize-space()='Search Cars']")
    WebElement searchCarsLink;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Used']")
    WebElement usedCarsLink;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Find a Dealer']")
    WebElement findDealersLink;

    public void clickOnFindDealersLink(){
        clickOnElement(findDealersLink);
    }

    public void clickOnUsedCars(){
        clickOnElement(usedCarsLink);
    }


    public void mouseHoverBuySellTab(){
        mouseHoverToElement(buySellTab);
    }
    public void clickOnSearchCarsLink(){
        clickOnElement(searchCarsLink);
    }
}
