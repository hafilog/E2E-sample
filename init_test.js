Feature('Init test.js');

Scenario('サイトへアクセス', (I) => {
  I.amOnPage('https://hafilog.com/');
  I.see('HAFILOG');
});

Scenario('GitHubにログイン', (I) => {
  const username = process.env.E2E_USERNAME;
  const password = process.env.E2E_PASSWORD;
  if (!username || !password) throw new Error('環境変数にE2E_USERNAMEかE2E_PASSWORD、または両方が設定されていません')

  I.amOnPage('https://github.com/login');
  I.see('Sign in to GitHub', 'h1');
  I.fillField('Username or email address', username);
  I.fillField('Password', password);
  I.click('Sign in');
  I.dontSee('Incorrect username or password.', '.flash-error');
  // I.waitUrlEquals('https://github.com/');
});
