package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

public class ResultsPage extends Utility {

    private static final Logger log = LogManager.getLogger(ResultsPage.class.getName());

    @CacheLookup
    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement resultsText;



    public void verifyMakeInResults(String expMake){
        String actMsg = getTextFromElement(resultsText);
        Assert.assertTrue(actMsg.contains(expMake));
    }
}
