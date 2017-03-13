package Steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

/**
 * Created by rosroman on 09/03/17.
 */
public class LoginStep {
    @And("^I click login button$")
    public void iClickLoginButton() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
      // throw new PendingException();
        System.out.println("I click login button");
    }

    @Given("^I navigate to the login page$")
    public void iNavigateToTheLoginPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("I navigate to the login page\n");
    }


    @Then("^I should see the userform page$")
    public void iShouldSeeTheUserformPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("I should see userform page");
    }


    @And("^I enter the username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void iEnterTheUsernameAsAndPasswordAs(String username, String password) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("Username is " + username + " and password is " + password);
    }
}
