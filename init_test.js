
Feature('Init test.js');

Scenario('test something', (I) => {
  I.amOnPage('https://hafilog.com/');
  I.see('HAFILOG');
});
