package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by rosroman on 22/03/17.
 */
public class LoginPage {

    //Generate a constructor, user PageFactory although bad code practice
    public LoginPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    //Findby name because he is using that identifier in the steps
    @FindBy(how = How.NAME, using = "UserName")
    public WebElement txtUserName;

    @FindBy(how = How.NAME, using = "Password")
    public WebElement txtPassword;

    @FindBy(how = How.NAME, using = "Login")
    public WebElement btnLogin;

    public void Login(String userName, String password) {

        txtUserName.sendKeys(userName);
        txtPassword.sendKeys(password);

    }

    public void ClickLogin()
    {
        btnLogin.submit();
    }
}
