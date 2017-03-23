package Runner;

import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * Created by rosroman on 22/03/17.
 */


//@RunWith(Cucumber.class)//Line to run with Junit Maven
@CucumberOptions(features = ("src/test/java/Features"), format = {"json:target/cucumber.json","html:target/site/cucumber-pretty"}, glue = "Steps")

//In order to run it with TestNG, extend class TestRunner
public class TestRunner extends AbstractTestNGCucumberTests{
}
