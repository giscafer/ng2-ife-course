import { Ng2IfeCoursePage } from './app.po';

describe('ng2-ife-course App', () => {
  let page: Ng2IfeCoursePage;

  beforeEach(() => {
    page = new Ng2IfeCoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
