import { CmsFirePage } from './app.po';

describe('cms-fire App', function() {
  let page: CmsFirePage;

  beforeEach(() => {
    page = new CmsFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
