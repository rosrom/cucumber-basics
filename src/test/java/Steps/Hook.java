package Steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;



/**
 * Created by rosroman on 13/03/17.
 */
public class Hook extends Base.BaseUtil{

    private Base.BaseUtil base;

    public Hook(Base.BaseUtil base) {
        this.base = base;
    }

    @Before
    public void InitializeTest()
    {
        System.out.println("Opening the browser : Firefox");

        System.setProperty("webdriver.firefox.marionette", "/Users/rosroman/geckodriver.exe");
        base.Driver = new FirefoxDriver();

            //esto se hace en el paso
        //base.Driver.navigate().to("http://executeautomation.com/demosite/Login.html");
        //Driver.navigate().to("http://executeautomation.com/demosite/Login.html");

    }

    @After
    public void TearDownTest(Scenario scenario)
    {
        if(scenario.isFailed()) {
            //Take screenshot
            System.out.println(scenario.getName());
        }
        System.out.println("Closing the browser");
        base.Driver.quit();
    }
}
