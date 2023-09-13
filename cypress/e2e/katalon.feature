Feature: Katalon Shop Page

Scenario: Add items to cart

Given I add four random items to my cart
 When I view my cart
 Then I find total four items listed in my cart
 When I search for lowest price item
 And I am able to remove the lowest price items from my cart
 Then I am able to verify three items in my cart

   