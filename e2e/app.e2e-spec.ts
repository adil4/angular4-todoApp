import { FirstTodoPage } from './app.po';

describe('first-todo App', () => {
  let page: FirstTodoPage;

  beforeEach(() => {
    page = new FirstTodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
