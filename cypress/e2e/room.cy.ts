/// <reference types="Cypress" />
export const takeSeats = async () => {
  const res =  await fetch('http://localhost:5000/seats')
  const data = await res.json()
	seats = data
  return data
}
let seats 
takeSeats()

describe('Visit our homepage',
{
    viewportHeight: 1200,
    viewportWidth: 1900,
}, () => {
    context("Go to room site with selected nr 1 of seats", () => {
		it("Choose nr 1 of seats on homepage", () => {
			cy.visit('http://localhost:3000')
			cy.get('.ant-input-number-input')
        .type('1{enter}')
			cy.get('.ant-btn')
        .click()
			cy.get('.Counter_room__81oXb')
				.children()
				.should( ($it)=> {
					expect($it).to.have.length(115)
				})
				.each(($se, index,$list)=> {
					if (!seats[index].reserved ) {
						cy.wrap($se).should('have.attr', 'class').and('include','available')
					} else {
						cy.wrap($se).should('have.attr', 'class').and('include','reserved')
					}
				})
		})
		it.only("Choose nr 1 of seats on homepage", () => {
			cy.visit('http://localhost:3000')
			cy.get('.ant-input-number-input')
        .type('1{enter}')
			cy.get('.ant-btn')
        .click()
			cy.get('.Counter_room__81oXb')
				.children()
				.eq(1)
				.click()
				.should('have.attr', 'class').and('include','ownReservation')
		})
  
  })

})