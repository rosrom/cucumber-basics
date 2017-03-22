package Steps;

import Base.BaseUtil;
import cucumber.api.DataTable;



import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.Transform;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.WebDriver;
import java.util.ArrayList;
import java.util.List;



/**
 * Created by rosroman on 09/03/17.
 */
public class LoginStep extends Base.BaseUtil {

    private Base.BaseUtil base;

    public LoginStep(BaseUtil base) {
        this.base = base;
    }

    @And("^I click login button$")
    public void iClickLoginButton() {

        base.Driver.findElement(By.name("Login")).submit();

    }

    @Given("^I navigate to the login page$")
    public void iNavigateToTheLoginPage() throws Throwable {

        System.out.println("I navigate to the login page\n");
        base.Driver.navigate().to("http://executeautomation.com/demosite/Login.html");
    }


    @Then("^I should see the userform page$")
    public void iShouldSeeTheUserformPage() throws Throwable {

        System.out.println("I should see userform page");
    }


    @And("^I enter the following details for Login$")
    public void iEnterTheFollowingDetailsForLogin(DataTable table) throws Throwable {

        //Create an ArrayList
        List<User> users = new ArrayList<User>();

        //Store all the users
        users = table.asList(User.class);

        for (User user : users) {

            base.Driver.findElement(By.name("UserName")).sendKeys(user.username);
            base.Driver.findElement(By.name("Password")).sendKeys(user.password);


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

    @And("^I verify the count of my salary digits for pts (\\d+)$")
    public void iVerifyTheCountOfMySalaryDigitsForPts(@Transform(Transformation.SalaryCountTransformer.class) int salary) throws Throwable {

        System.out.println("My salary digits count is :" + salary + "\n");
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