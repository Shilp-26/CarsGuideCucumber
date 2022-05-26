package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.util.List;

public class CarDealersPage extends Utility {

    private static final Logger log = LogManager.getLogger(CarDealersPage.class.getName());

    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Showing 2543')]")
    WebElement dealersTxt;

    @CacheLookup
    @FindBy(xpath = "//div[@class='container dealer-result-container']//div[@class='dealerListing--name']//a")
    List<WebElement> dealers;

    public void verifyDealersTxt(String expMsg){
        String actMsg = getTextFromElement(dealersTxt);
        Assert.assertTrue(actMsg.contains(expMsg));
    }

    public void verifyDealerNames(String list) {
        for (WebElement dealersName : dealers) {
            if (list == dealersName.getText()) {
                Assert.assertTrue(true);
                break;
            } else Assert.assertFalse(false);
        }
        log.info("verifying 'Dealers Name' from the list  " + list);
    }

    public String findDealer(String dealerName) throws InterruptedException {
        String dealerNm = "";
//        Thread.sleep(2000);

        for (WebElement dealer:dealers) {
            if (dealer.getText().equals(dealerName))
            {
                dealerNm=  dealer.getText();
//                System.out.println(dealer.getText());
                break;
            }
        }
        return dealerNm;
    }
}
