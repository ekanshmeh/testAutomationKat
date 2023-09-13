/// <reference types="cypress-xpath" />
/// <reference types="cypress" />

import { When, Then, And }  from "@badeball/cypress-cucumber-preprocessor";

Then('I find total four items listed in my cart',()=>{
    cy.get('.ellie-thumb-wrapper').as('productThumbnail')
    cy.get('@productThumbnail').its('length').should('have.length', 4)
})

When('I search for lowest price item',()=>{
    cy.get('.site-description').as('katalonProduct')
    cy.get('@katalonProduct').find('.woocommerce-Price-amount amount').invoke('text').as('itemPrice')
    cy.get('@katalonProduct').find('.Price-amount').invoke('text').as('saleItemPrice')
    
    
    var itemsTotal = 0;
    cy.get('@itemPrice').then($linkText => {
        var itemsPriceTotal = 0;
        var itemPrice = $linkText.split('$');
        var i;
        for(i = 0; i < itemPrice.length; i++) {
            cy.log(itemPrice[i])
            itemsPriceTotal += Number(itemPrice[i])
        }
        itemsTotal += itemsPriceTotal;
        cy.log("Non sale price items total: " + itemsPriceTotal)
    })
})

And('I am able to remove the lowest price items from my cart',()=>{
    cy.get('@saleItemPrice').then($linkText => {
        var saleItemPriceTotal = 0
        var saleItemPrice = $linkText.split('$')
        var i
        for(i=0;i<saleItemPrice.length;i++){
            cy.log(saleItemPrice[i])
            saleItemPriceTotal += Number(saleItemPrice[i])
          
        }
       // saleItemPrice += saleItemPriceTotal
       itemsTotal += saleItemPriceTotal
        cy.log('sale total price = ' + saleItemPriceTotal)

    })
        .then(()=>{
            cy.log('total of price of all products : ' + itemsTotal)
            expect(itemsTotal).lessThan(itemPrice)
        })
    
})

Then('I am able to verify three items in my cart',()=>{
    cy.get('#quantity_65011e378ef89').should('have.length',3)
})
