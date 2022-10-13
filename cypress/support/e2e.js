import './commands'
import addContext from 'mochawesome/addContext';
import 'cypress-mochawesome-reporter/register';

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    addContext({ test }, `../report/screenshots/examples/${location.pathname.replace(/(.*)\//, '')}/${runnable.parent.title} -- ${test.title} (failed).png`);
  }
});
