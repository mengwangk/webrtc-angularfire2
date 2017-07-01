import { WebrtcAngularfire2Page } from './app.po';

describe('webrtc-angularfire2 App', () => {
  let page: WebrtcAngularfire2Page;

  beforeEach(() => {
    page = new WebrtcAngularfire2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
