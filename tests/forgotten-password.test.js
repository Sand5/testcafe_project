import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'
import ForgottenPasswordPage from '../page-objects/pages/ForgottenPasswordPage'

const navBar = new Navbar();
const loginPage = new LoginPage();
const forgottenPasswordPage = new ForgottenPasswordPage();

//prettier-ignore
fixture`Send forgotten password test`
  .page`http://zero.webappsecurity.com/index.html`


test.skip("User can request new password to be sent to their email", async t => {
  //Actions
  await navBar.clickOnSignButton();
  await loginPage.clickOnForgottenPasswordLink();
  await forgottenPasswordPage.sendEmail('email@random.com');



  //Assertions
  await t
    .expect(forgottenPasswordPage.PageMessage)
    .contains('email@random.com');
  await t.expect(forgottenPasswordPage.emailInput.exists).notOk();

});