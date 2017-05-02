import { TaginpuHerokuPage } from './app.po';

describe('taginpu-heroku App', () => {
  let page: TaginpuHerokuPage;

  beforeEach(() => {
    page = new TaginpuHerokuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
