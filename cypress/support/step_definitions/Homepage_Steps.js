/// <reference types="cypress-xpath" />
/// <reference types="cypress" />
import { Given, When }  from "@badeball/cypress-cucumber-preprocessor";

const url = "https://cms.demo.katalon.com/"
Given('I add four random items to my cart', () =>{
    cy.visit(url)
    cy.get('.ellie-thumb-wrapper').as('productThumbnail')
    cy.get('@productThumbnail').should('have.length', 12).its('length')
    .then((n)=> Cypress._.random(0,n-8))
    .then((k)=>{
        cy.log('picked random item ${k}')
        cy.get('@productThumbnail').eq(k).click()
    })

})

When('I view my cart', () =>{
cy.xpath("//a[@title='View cart']").click()
})

