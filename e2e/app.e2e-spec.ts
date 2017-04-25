import { ChalchitraPage } from './app.po';

describe('chalchitra App', function() {
  let page: ChalchitraPage;

  beforeEach(() => {
    page = new ChalchitraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
