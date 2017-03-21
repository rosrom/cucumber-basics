package Steps;

import Base.BaseUtil;
import cucumber.api.DataTable;

import java.util.*;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.Transform;

/**
 * Created by rosroman on 09/03/17.
 */
public class LoginStep extends Base.BaseUtil {

    private Base.BaseUtil base;

    public LoginStep(BaseUtil base) {
        this.base = base;
    }

    @And("^I click login button$")
    public void iClickLoginButton() throws Throwable {

        System.out.println("I click login button");
    }

    @Given("^I navigate to the login page$")
    public void iNavigateToTheLoginPage() throws Throwable {

        System.out.println("I navigate to the login page\n");
    }


    @Then("^I should see the userform page$")
    public void iShouldSeeTheUserformPage() throws Throwable {

        System.out.println("The driver is: " + base.StepInfo);

        System.out.println("I should see userform page");
    }


    @And("^I enter the following details for Login$")
    public void iEnterTheFollowingDetailsForLogin(DataTable table) throws Throwable {

      /*   List<List<String>> data = table.raw();

       System.out.println("The Value is : " + data.get(0).get(0).toString());
        System.out.println("The Value is : " + data.get(0).get(1).toString()); */

        //Create an ArrayList
        List<User> users = new ArrayList<User>();

        //Store all the users
        users = table.asList(User.class);

        for (User user : users) {
            System.out.println("The UserName is " + user.username);
            System.out.println("The Password is " + user.password);
        }

    }

    @And("^I enter ([^\"]*) and ([^\"]*)$")
    public void iEnterUsernameAndPassword(String userName, String password) throws Throwable {

        System.out.println("The UserName is " + userName);
        System.out.println("The Password is " + password);

    }

    @And("^I enter the users email address as Email:([^\"]*)$")
    public void iEnterTheUsersEmailAddressAsEmailAdmin(@Transform(Transformation.EmailTransform.class) String email) throws Throwable {

        System.out.println("The Email Address is " + email);

    }

    public class User {

        public String username;
        public String password;

        public User(String userName, String passWord) {
            username = userName;
            password = passWord;
        }
    }
}