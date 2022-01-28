/// <reference types = "cypress"/>
/// <reference types="cypress-xpath" />
describe('Cypress Testing For Login-Logout', function () {
    it('Login', function () {
        cy.visit('https://testurl/')

        cy.get('#email').type('test@gmail.com')

        cy.get('#password').type('testpassword')

        cy.get('.el-button > span').click()

        cy.wait(5000)
        cy.get('button > svg').click()
    })

    it ('Checking host', function(){
        cy.get(':nth-child(2) > .el-submenu > .el-submenu__title > .el-submenu__icon-arrow').click()
    })

    it ('Checking Aggregators', function(){
        cy.get(':nth-child(2) > .el-submenu > .el-menu > :nth-child(1) > :nth-child(1) > a > .el-menu-item > .el-tooltip > .menu-text').click()
        cy.wait(5000)
    })

    it ('Checking Bonds', function(){
        cy.get('.myBtn > :nth-child(3) > :nth-child(1) > a > .el-menu-item > .el-tooltip').click()
    })

    it ('Checking Spaces', function(){
        cy.get('.myBtn > :nth-child(4) > :nth-child(1) > a > .el-menu-item > .el-tooltip').click()
    })

    it ('Checking Policies', function(){
        cy.get(':nth-child(5) > .el-submenu > .el-submenu__title > .el-submenu__icon-arrow').click()
    })

    it ('Land on Dashboard', function(){
        cy.get(':nth-child(1) > :nth-child(1) > .router-link-active > .el-menu-item > .el-tooltip').click()
    })

    it ('Signing Out', function(){
        cy.get('.avatar-wrapper').click()
        cy.xpath('/html/body/ul/li[2]').within(() => {cy.xpath('/html/body/ul/li[2]')}).click() 
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))
    })
})
