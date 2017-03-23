$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "This feature deals with the login functionality of the application",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3274854214,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the users email address as Email:admin",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I verify the count of my salary digits for pts 1000",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the following details for Login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "admin",
        "adminpassword"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 1102864497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 41
    }
  ],
  "location": "LoginStep.iEnterTheUsersEmailAddressAsEmailAdmin(String)"
});
formatter.result({
  "duration": 1881124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 47
    }
  ],
  "location": "LoginStep.iVerifyTheCountOfMySalaryDigitsForPts(int)"
});
formatter.result({
  "duration": 641345,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iEnterTheFollowingDetailsForLogin(DataTable)"
});
formatter.result({
  "duration": 253909311,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 307516639,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserformPage()"
});
formatter.result({
  "duration": 30689971,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"InitialWrong\"}\nCommand duration or timeout: 14 milliseconds\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat Steps.LoginStep.iShouldSeeTheUserformPage(LoginStep.java:54)\n\tat ✽.Then I should see the userform page(login.feature:12)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"InitialWrong\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027ESMADLBI0095\u0027, ip: \u0027fe80:0:0:0:a65e:60ff:fec4:233f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.5\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous3874256420003078125webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:11220)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous3874256420003078125webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:11229)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/k(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous3874256420003078125webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12706)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous3874256420003078125webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12711)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous3874256420003078125webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12653)\n",
  "status": "failed"
});
formatter.after({
  "duration": 72188932,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Login with correct username and password using Scenario outline",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;1"
    },
    {
      "cells": [
        "execute",
        "automation"
      ],
      "line": 22,
      "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;2"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 23,
      "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;3"
    },
    {
      "cells": [
        "testing",
        "qa"
      ],
      "line": 24,
      "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2328569875,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login with correct username and password using Scenario outline",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter execute and automation",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 815947219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "execute",
      "offset": 8
    },
    {
      "val": "automation",
      "offset": 20
    }
  ],
  "location": "LoginStep.iEnterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 161777,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 366897396,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserformPage()"
});
formatter.result({
  "duration": 12576899,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"InitialWrong\"}\nCommand duration or timeout: 12 milliseconds\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat Steps.LoginStep.iShouldSeeTheUserformPage(LoginStep.java:54)\n\tat ✽.Then I should see the userform page(login.feature:18)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"InitialWrong\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027ESMADLBI0095\u0027, ip: \u0027fe80:0:0:0:a65e:60ff:fec4:233f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.5\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous5680020358602280184webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:11220)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous5680020358602280184webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:11229)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/k(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous5680020358602280184webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12706)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous5680020358602280184webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12711)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous5680020358602280184webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12653)\n",
  "status": "failed"
});
formatter.after({
  "duration": 78373134,
  "status": "passed"
});
formatter.before({
  "duration": 2285236552,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login with correct username and password using Scenario outline",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter admin and admin",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 801813121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 8
    },
    {
      "val": "admin",
      "offset": 18
    }
  ],
  "location": "LoginStep.iEnterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 180732,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 327765482,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserformPage()"
});
formatter.result({
  "duration": 38535104,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"InitialWrong\"}\nCommand duration or timeout: 38 milliseconds\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat Steps.LoginStep.iShouldSeeTheUserformPage(LoginStep.java:54)\n\tat ✽.Then I should see the userform page(login.feature:18)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"InitialWrong\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027ESMADLBI0095\u0027, ip: \u0027fe80:0:0:0:a65e:60ff:fec4:233f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.5\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous1870842635600229186webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:11220)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous1870842635600229186webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:11229)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/k(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous1870842635600229186webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12706)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous1870842635600229186webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12711)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous1870842635600229186webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12653)\n",
  "status": "failed"
});
formatter.after({
  "duration": 72058006,
  "status": "passed"
});
formatter.before({
  "duration": 2399278995,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login with correct username and password using Scenario outline",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter testing and qa",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 819077044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing",
      "offset": 8
    },
    {
      "val": "qa",
      "offset": 20
    }
  ],
  "location": "LoginStep.iEnterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 131804,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 320814493,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserformPage()"
});
formatter.result({
  "duration": 12746681,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"InitialWrong\"}\nCommand duration or timeout: 12 milliseconds\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat Steps.LoginStep.iShouldSeeTheUserformPage(LoginStep.java:54)\n\tat ✽.Then I should see the userform page(login.feature:18)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"InitialWrong\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027ESMADLBI0095\u0027, ip: \u0027fe80:0:0:0:a65e:60ff:fec4:233f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.5\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous5555935076773138809webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:11220)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous5555935076773138809webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:11229)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/k(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous5555935076773138809webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12706)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous5555935076773138809webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12711)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/yl/khdnqpxx7290tl1vv57yscbxtf_1pp/T/anonymous5555935076773138809webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12653)\n",
  "status": "failed"
});
formatter.after({
  "duration": 70647230,
  "status": "passed"
});
});