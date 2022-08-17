/// <reference types="Cypress" />

describe('Visit our homepage',
{
  viewportHeight: 1200,
  viewportWidth: 1900,
}, () => {
  context("Starting point", ()=> {
    it('have features', () => {
      cy.visit('http://localhost:3000')
      cy.get('.ant-layout-header > .ant-row > .ant-col')
        .contains("😃 Welcome to our seat reservation application 😃")
      cy.get('.ant-col-14 > label')
        .should('have.attr', 'title')
        .and('include', 'Number of seats:')
      cy.get('.ant-input-number-input')
        .should('exist')
        .and('have.value', '0')
      cy.get('.ant-checkbox-wrapper > :nth-child(2)')
        .should('exist')
        .contains('Should the seats be next to each other?')
      cy.get('.ant-checkbox')
        .should('exist')
        .should('have.class', 'ant-checkbox-checked')
      cy.get('.ant-btn')
        .should('exist')
        .contains('Pick a seat')
    })
  })
  context("Add inputs 1..5", () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    it('Can input number 1', ()=> {
      cy.get('.ant-input-number-input')
        .type('1{enter}')
        .should('have.value', '1')
    })
    it('Can input number 2', ()=> {
      cy.get('.ant-input-number-input')
        .type('2{enter}')
        .should('have.value', '2')
    })
    it('Can input number 3', ()=> {
      cy.get('.ant-input-number-input')
        .type('3{enter}')
        .should('have.value', '3')
    })
    it('Can input number 4', ()=> {
      cy.get('.ant-input-number-input')
        .type('4{enter}')
        .should('have.value', '4')
    })
    it('Can input number 5', ()=> {
      cy.get('.ant-input-number-input')
        .type('5{enter}')
        .should('have.value', '5')
    })
  })
  context("Add inputs 6..", () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    it('Try input number 6 with checked adjacent seats', ()=> {
      cy.get('.ant-checkbox')
        .should('have.class', 'ant-checkbox-checked')
      cy.get('.ant-input-number-input')
        .type('6{enter}')
        .should('have.value', '5')
    })
    it('Try input number 6 with unchecked adjacent seats', ()=> {
      cy.get('.ant-checkbox')
        .click()
        .should('have.class', 'ant-checkbox')
      cy.get('.ant-input-number-input')
        .type('6{enter}')
        .should('have.value', '6')
      cy.get('.ant-checkbox')
        .click()
      cy.get('.ant-input-number')
        .should('have.class', 'ant-input-number-status-warning')
    })
  })

  context("Go to room site", () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    it("Room: with 0 seat selected", () => {
      cy.get('.ant-btn')
        .click()
      cy.location("pathname").should("eq", "/room")
    })

  })

})