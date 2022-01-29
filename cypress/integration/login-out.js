/// <reference types = "cypress"/>
/// <reference types="cypress-xpath" />
describe('Cypress Testing For Login-Logout', function () {
    it('Login', function () {
        cy.visit('https://testurl.com/')
        cy.get('#email').type('test@gmail.com')
        cy.get('#password').type('testPassword')
        cy.get('.el-button > span').click()
    })

    it('View Mode Change', function(){
        cy.wait(3000)
        cy.get('button > svg').click()
    })

    it ('Host', function(){
        cy.get(':nth-child(2) > .el-submenu > .el-submenu__title > .el-submenu__icon-arrow').click()
    })

    it ('Aggregators', function(){
        cy.get(':nth-child(2) > .el-submenu > .el-menu > :nth-child(1) > :nth-child(1) > a > .el-menu-item > .el-tooltip > .menu-text').click()
        cy.wait(5000)
    })

    it ('Private WAN Router', function(){
        cy.get(':nth-child(2) > .el-submenu > .el-menu > :nth-child(2) > :nth-child(1) > a > .el-menu-item > .el-tooltip > .menu-text')
    })

    it ('Bonds', function(){
        cy.get('.myBtn > :nth-child(3) > :nth-child(1) > a > .el-menu-item > .el-tooltip').click()
    })

    it ('Spaces', function(){
        cy.get('.myBtn > :nth-child(4) > :nth-child(1) > a > .el-menu-item > .el-tooltip').click()
    })

    it ('Policies', function(){
        cy.get(':nth-child(5) > .el-submenu > .el-submenu__title > .el-submenu__icon-arrow').click()
    })

    it ('Land on Dashboard', function(){
        cy.get(':nth-child(1) > :nth-child(1) > .router-link-active > .el-menu-item > .el-tooltip').click()
    })

    it ('Sign Out', function(){
        cy.get('.avatar-wrapper').click()
        cy.wait(5000)
        cy.xpath('/html/body/ul/li[2]').within(() => {cy.xpath('/html/body/ul/li[2]')}).click() 
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))
       
    })
})
