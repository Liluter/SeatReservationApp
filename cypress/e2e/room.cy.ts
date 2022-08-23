/// <reference types="Cypress" />
import * as data from './../../public/db.json'

// const takeSeats = async () => {
//   const res =  await fetch('http://localhost:5000/seats')
//   const data = await res.json()
// 	seats = data
//   return data
// }

// takeSeats()

const seats = data.seats
const twoNotAval =  [71,94,97,106]
const threeNotAval = [3,4,29,30,39,40,44,45,51,52,66,67,71,94,97,106,113,114]
const fourNotAval = [0,1,2,3,4,11,12,13,22,23,24,29,30,35,36,37,39,40,44,45,
										48,49,50,51,52,66,67,71,73,74,75,94,97,99,100,101,106,113,114]
const fiveNotAval = [0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,
										25,26,27,28,29,30,35,36,37,39,40,44,45,48,49,50,51,52,55,56,57,
										58,66,67,71,73,74,75,81,82,83,84,85,86,87,88,94,97,99,100,101,106,
										107,108,109,110,113,114]

// console.log('myjson',data)
describe('Visit our roompage',
{
    viewportHeight: 1200,
    viewportWidth: 1900,
}, () => {
  context("Go to room site with selected nr 1 of seats and check seats available", () => {
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
		it("Choose nr 1 of seats on homepage and aprove reservation", () => {
			cy.visit('http://localhost:3000')
			cy.get('.ant-input-number-input')
        .type('1{enter}')
			cy.get('.ant-btn')
        .click()
			cy.get('.Counter_SeatInfo__pn03R')
				.should('exist')
				.contains("1")
			cy.get('.Counter_room__81oXb')
				.children()
				.eq(1)
				.click()
				.should('have.attr', 'class').and('include','ownReservation')
			cy.get('.Counter_SeatInfo__pn03R')
				.should('exist')
				.contains("0")
		})
	})
	context("Go to room site with selected nr 2 of seats and check seats available", () => {
		it("Check label with number", () => {
			cy.visit('http://localhost:3000')
			cy.get('.ant-input-number-input')
				.type('2{enter}')
			cy.get('.ant-btn')
				.click()
			cy.get('.Counter_SeatInfo__pn03R')
				.should('exist')
				.contains("2")
		})
		it("Choose nr 2 of seats on homepage and check seats available", () => {
			cy.visit('http://localhost:3000')
			cy.get('.ant-input-number-input')
				.type('2{enter}')
			cy.get('.ant-btn')
				.click()
			cy.get('.Counter_room__81oXb')
				.children()
				.should( ($it)=> {
					expect($it).to.have.length(115)
				})
				.each(($se, index,$list)=> {
					if ((!seats[index].reserved )&&(!twoNotAval.includes(index))) {
						cy.wrap($se).should('have.attr', 'class').and('include','available')
					} else if (!twoNotAval.includes(index)) {
						cy.wrap($se).should('have.attr', 'class').and('include','reserved')
					} else {
						cy.wrap($se).should('have.attr', 'class').and('not.include','reserved').and('not.include','available')
					}
				})
		})
	})
	context("Go to room site with selected nr 3 of seats and check seats available", () => {
		it("Check label with number", () => {
			cy.visit('http://localhost:3000')
			cy.get('.ant-input-number-input')
				.type('3{enter}')
			cy.get('.ant-btn')
				.click()
			cy.get('.Counter_SeatInfo__pn03R')
				.should('exist')
				.contains("3")
		})
		
		it("Choose nr 3 of seats on homepage and check seats available", () => {
			cy.visit('http://localhost:3000')
			cy.get('.ant-input-number-input')
				.type('3{enter}')
			cy.get('.ant-btn')
				.click()
			cy.get('.Counter_room__81oXb')
				.children()
				.should( ($it)=> {
					expect($it).to.have.length(115)
				})
				.each(($se, index,$list)=> {
					if ((!seats[index].reserved )&&(!threeNotAval.includes(index))) {
						cy.wrap($se).should('have.attr', 'class').and('include','available')
					} else if (!threeNotAval.includes(index)) {
						cy.wrap($se).should('have.attr', 'class').and('include','reserved')
					} else {
						cy.wrap($se)
							.should('have.attr', 'class')
							.and('not.include','reserved')
							.and('not.include','available')
							.log('Not available')
					}
				})
		})
	})
	context("Go to room site with selected nr 4 of seats and check seats available", () => {
		it("Check label with number", () => {
			cy.visit('http://localhost:3000')
			cy.get('.ant-input-number-input')
				.type('4{enter}')
			cy.get('.ant-btn')
				.click()
			cy.get('.Counter_SeatInfo__pn03R')
				.should('exist')
				.contains("4")
		})
		it("Choose nr 4 of seats on homepage and check seats available", () => {
			cy.visit('http://localhost:3000')
			cy.get('.ant-input-number-input')
				.type('4{enter}')
			cy.get('.ant-btn')
				.click()
			cy.get('.Counter_room__81oXb')
				.children()
				.should( ($it)=> {
					expect($it).to.have.length(115)
				})
				.each(($se, index,$list)=> {
					if ((!seats[index].reserved )&&(!fourNotAval.includes(index))) {
						cy.wrap($se).should('have.attr', 'class').and('include','available')
					} else if (!fourNotAval.includes(index)) {
						cy.wrap($se).should('have.attr', 'class').and('include','reserved')
					} else {
						cy.wrap($se)
							.should('have.attr', 'class')
							.and('not.include','reserved')
							.and('not.include','available')
							.log('Not available')
					}
				})
		})
	})
	context("Go to room site with selected nr 5 of seats and check seats available", () => {
		it("Check label with number", () => {
			cy.visit('http://localhost:3000')
			cy.get('.ant-input-number-input')
				.type('5{enter}')
			cy.get('.ant-btn')
				.click()
			cy.get('.Counter_SeatInfo__pn03R')
				.should('exist')
				.contains("5")
		})
		it("Choose nr 5 of seats on homepage and check seats available", () => {
			cy.visit('http://localhost:3000')
			cy.get('.ant-input-number-input')
				.type('5{enter}')
			cy.get('.ant-btn')
				.click()
			cy.get('.Counter_room__81oXb')
				.children()
				.should( ($it)=> {
					expect($it).to.have.length(115)
				})
				.each(($se, index,$list)=> {
					if ((!seats[index].reserved )&&(!fiveNotAval.includes(index))) {
						cy.wrap($se).should('have.attr', 'class').and('include','available')
					} else if (!fiveNotAval.includes(index)) {
						cy.wrap($se).should('have.attr', 'class').and('include','reserved')
					} else {
						cy.wrap($se)
							.should('have.attr', 'class')
							.and('not.include','reserved')
							.and('not.include','available')
							.log('Not available')
					}
				})
		})
	})
})