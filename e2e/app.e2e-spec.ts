import { MyRatpPage } from './app.po';

describe('my-ratp App', () => {
  let page: MyRatpPage;

  beforeEach(() => {
    page = new MyRatpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
