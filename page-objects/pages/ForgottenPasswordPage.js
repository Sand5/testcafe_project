import { Selector, t } from 'testcafe';

class ForgottenPasswordPage {
    constructor() {
        this.emailInput = Selector('#user_email');
        this.message = Selector('div');
    }

    get PageMessage() {
        return this.message.innerText;
    }

    async sendEmail(email) {
        return await t
            .typeText(this.emailInput, email, { paste: true, replace: true })
            .pressKey('enter');
    }
}

export default ForgottenPasswordPage;
