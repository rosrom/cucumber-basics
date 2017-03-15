package Steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.Scenario;




/**
 * Created by rosroman on 13/03/17.
 */
public class Hook {

    @Before
    public void InitializeTest()
    {
        System.out.println("Opening the browser . MOCK");
    }

    @After
    public void TearDownTest(Scenario scenario)
    {
        if(scenario.isFailed()) {
            //Take screenshot
            System.out.println(scenario.getName);
        }
        System.out.println("Closing the browser . MOCK");
    }
}
