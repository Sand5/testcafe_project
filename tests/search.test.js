import Navbar from '../page-objects/components/Navbar'
import SearchResultsPage from '../page-objects/pages/SearchResultsPage'

const navBar = new Navbar();
const searchResultsPage = new SearchResultsPage();


fixture`Search Box Test`
    .page`http://zero.webappsecurity.com/index.html`

test.skip('User can search for information using the search box', async t => {
  
    navBar.search('online bank');
    await t.expect(searchResultsPage.resultsTitle.exists).ok();
    await t.expect(navBar.searchBox.exists).ok();
    await t.expect(searchResultsPage.ExpectedMessage).contains('Zero - Free Access to Online Banking');

    
})