import {Selector,t} from 'testcafe'


class LoginPage {
    constructor(){
    this.forgottenPasswordLink = Selector('a')
        .withText('Forgot your password ?')
  }
  async clickOnForgottenPasswordLink(){
      return await t.click(this.forgottenPasswordLink);
  }
}

export default LoginPage