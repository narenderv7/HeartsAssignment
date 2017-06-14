import { HearstAssignmentPage } from './app.po';

describe('hearst-assignment App', () => {
  let page: HearstAssignmentPage;

  beforeEach(() => {
    page = new HearstAssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
