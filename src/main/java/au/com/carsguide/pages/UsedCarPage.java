package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;


public class UsedCarPage extends Utility {

    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='Used Cars For Sale']")
    WebElement usedCarTxt;

    public void verifyUsedCarTxt(String expMsg){
        String actMsg = getTextFromElement(usedCarTxt);
        Assert.assertTrue(actMsg.contains(expMsg));
    }
}
