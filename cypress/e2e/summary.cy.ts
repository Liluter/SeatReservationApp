/// <reference types="Cypress" />

describe('Visit our roompage',
{
    viewportHeight: 1200,
    viewportWidth: 1900,
},() =>{
  context("Go to summary page with 1 seat selected", () => {
    it("Choose 1 seat on homepage and aprove reservation", () => {
			cy.visit('http://localhost:3000')
			cy.get('.ant-input-number-input')
        .type('1{enter}')
			cy.get('.ant-btn')
        .click()
			cy.get('.Counter_room__81oXb')
				.children()
				.eq(0)
				.click()
      cy.get('.Counter_buttonClear__Vrnqe')
        .click()
      cy.get('.ant-list-items')
        .should('exist')
        .children()
        .should( ($it)=> {
					expect($it).to.have.length(1)
				})
		})
    it("Choose 2 seats on homepage and aprove reservation", () => {
			cy.visit('http://localhost:3000')
			cy.get('.ant-input-number-input')
        .type('2{enter}')
			cy.get('.ant-btn')
        .click()
			cy.get('.Counter_room__81oXb')
				.children()
				.eq(1)
				.click()
			cy.get('.Counter_room__81oXb')
				.children()
				.eq(0)
				.click()
      cy.get('.Counter_buttonClear__Vrnqe')
        .click()
      cy.get('.ant-list-items')
        .should('exist')
        .children()
        .should( ($it)=> {
					expect($it).to.have.length(2)
				})
		})
    it("Choose 3 seats on homepage and aprove reservation", () => {
			cy.visit('http://localhost:3000')
			cy.get('.ant-input-number-input')
        .type('3{enter}')
			cy.get('.ant-btn')
        .click()
			cy.get('.Counter_room__81oXb')
				.children()
				.eq(0)
				.click()
			cy.get('.Counter_room__81oXb')
				.children()
				.eq(1)
				.click()
			cy.get('.Counter_room__81oXb')
				.children()
				.eq(2)
				.click()
      cy.get('.Counter_buttonClear__Vrnqe')
        .click()
      cy.get('.ant-list-items')
        .should('exist')
        .children()
        .should( ($it)=> {
					expect($it).to.have.length(3)
				})
		})
    it("Choose 4 seats on homepage and aprove reservation", () => {
			cy.visit('http://localhost:3000')
			cy.get('.ant-input-number-input')
        .type('4{enter}')
			cy.get('.ant-btn')
        .click()
			cy.get('.Counter_room__81oXb')
				.children()
				.eq(7)
				.click()
			cy.get('.Counter_room__81oXb')
				.children()
				.eq(8)
				.click()
			cy.get('.Counter_room__81oXb')
				.children()
				.eq(9)
				.click()
			cy.get('.Counter_room__81oXb')
				.children()
				.eq(10)
				.click()
      cy.get('.Counter_buttonClear__Vrnqe')
        .click()
      cy.get('.ant-list-items')
        .should('exist')
        .children()
        .should( ($it)=> {
					expect($it).to.have.length(4)
				})
		})
    it.only("Choose 5 seats on homepage and aprove reservation", () => {
			cy.visit('http://localhost:3000')
			cy.get('.ant-input-number-input')
        .type('5{enter}')
			cy.get('.ant-btn')
        .click()
			cy.get('.Counter_room__81oXb')
				.children()
				.eq(59)
				.click()
			cy.get('.Counter_room__81oXb')
				.children()
				.eq(60)
				.click()
			cy.get('.Counter_room__81oXb')
				.children()
				.eq(61)
				.click()
			cy.get('.Counter_room__81oXb')
				.children()
				.eq(62)
				.click()
			cy.get('.Counter_room__81oXb')
				.children()
				.eq(63)
				.click()
      cy.get('.Counter_buttonClear__Vrnqe')
        .click()
      cy.get('.ant-list-items')
        .should('exist')
        .children()
        .should( ($it)=> {
					expect($it).to.have.length(5)
          expect($it.eq(0)).to.contain('row: 5')
          expect($it.eq(0)).to.contain('seat: 0')
          expect($it.eq(0)).to.contain('s50')
          expect($it.eq(1)).to.contain('row: 5')
          expect($it.eq(1)).to.contain('seat: 1')
          expect($it.eq(1)).to.contain('s51')
          expect($it.eq(2)).to.contain('row: 5')
          expect($it.eq(2)).to.contain('seat: 2')
          expect($it.eq(2)).to.contain('s52')
          expect($it.eq(3)).to.contain('row: 5')
          expect($it.eq(3)).to.contain('seat: 3')
          expect($it.eq(3)).to.contain('s53')
          expect($it.eq(4)).to.contain('row: 5')
          expect($it.eq(4)).to.contain('seat: 4')
          expect($it.eq(4)).to.contain('s54')
				})
		})
  })

})