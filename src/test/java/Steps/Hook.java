package Steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;






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
        System.out.println("Opening the browser . MOCK");

        //Passing a dummy Webdriver instance
        base.StepInfo= "FirefoxDriver";
    }

    @After
    public void TearDownTest(Scenario scenario)
    {
        if(scenario.isFailed()) {
            //Take screenshot
            System.out.println(scenario.getName());
        }
        System.out.println("Closing the browser . MOCK");
    }
}
