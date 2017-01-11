import { MusicExplorerPage } from './app.po';

describe('music-explorer App', function() {
  let page: MusicExplorerPage;

  beforeEach(() => {
    page = new MusicExplorerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
