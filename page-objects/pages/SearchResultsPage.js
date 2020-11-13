import {Selector,t} from 'testcafe'

class SearchResultsPage{
 
    constructor() {
    this.resultsTitle = Selector('h2');
    this.linkText = Selector('div');
 }

 get ExpectedMessage() {
     return this.linkText.innerText;
 }

}

export default SearchResultsPage