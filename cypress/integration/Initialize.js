/// <reference types = "cypress" />

it.only('Open SMATA', () => {  
    cy.visit('https://smata-test.netstrata.com.au/#/login', {timeout:100000})
    cy.get("img[alt='smata.png']") 
})
  