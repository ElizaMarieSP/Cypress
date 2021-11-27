/// <reference types = "cypress" />
const email = 'smata-alerts@netstrata.com.au';
const invalidPass = 'Auto123';

it.only('SMATA-Login', () => {  
    cy.visit('https://smata-test.netstrata.com.au/#/login', {timeout:100000})
    cy.login(email, invalidPass)
    cy.get('.k-notification-content', {timeout:100000}).should('contain', " The User Name / Password Combination doesn't exist ")
})
  