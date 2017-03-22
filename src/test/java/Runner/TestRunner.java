package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * Created by rosroman on 22/03/17.
 */

@RunWith(Cucumber.class)
@CucumberOptions(features = ("src/test/java/Features"), glue = "Steps")
public class TestRunner {
}
