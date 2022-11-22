/// <reference types="cypress" />

describe('subsciption form validation', () => {
    beforeEach(() => {
      
      cy.visit('https://blink22.com/blog')
    })
  
    it('extracting and printing subscription placeholders fields ', () => {

        cy.get('#firstname').invoke('attr', 'placeholder').then( placeHolderValue => cy.log(placeHolderValue))
        //extract and print first name placeholder
        cy.get('#lastname').invoke('attr', 'placeholder').then( placeHolderValue1 => cy.log(placeHolderValue1))
        //extract and print the last name placeholder
        cy.get('#email').invoke('attr', 'placeholder').then( placeHolderValue2 => cy.log(placeHolderValue2))
        //extract and print the email placeholder
    })
    
    it('Validating that submission cannot be done if email required field is msissing', () => {

        cy.get('#lastname').type('lastName')
        cy.get('#firstname').type('firstName')
        cy.get('#_form_5_submit').click()

        cy.get('._error-inner').should('contain.text','This field is required.')
  

    })
    
    it('Validating that submission cannot be done if first name required field is msissing', () => {

        cy.get('#lastname').type('lastName')
        cy.get('#email').type('s@s.com')
        cy.get('#_form_5_submit').click()

        cy.get('._error-inner').should('contain.text','This field is required.')
  

    })

    it('Validating that submission cannot be done if last name required field is msissing', () => {

        cy.get('#firstname').type('firstName')
        cy.get('#email').type('s@s.com')
        cy.get('#_form_5_submit').click()

        cy.get('._error-inner').should('contain.text','This field is required.')
  

    })
    it('Validating that submission cannot be done if all required fields are msissing', () => {

        
        cy.get('#_form_5_submit').click()

        cy.get('._x25732555 ._error-inner').should('contain.text','This field is required.')
        cy.get('._x31954131 ._error-inner').should('contain.text','This field is required.')
        cy.get('._x24624264  ._error-inner').should('contain.text','This field is required.')


  

    })
    
    it('Validating that submission cannot be done if email format is incorrect', () => {

        cy.get('#lastname').type('lastName')
        cy.get('#firstname').type('firstName')
        cy.get('#email').type('Blink22')
        cy.get('#_form_5_submit').click()

        cy.get('._error-inner').should('contain.text','Enter a valid email address.')
        

  

    })

    it('Validating and extracting Thanks message after submission with valid data', () => {

        cy.get('#lastname').type('lastName')
        cy.get('#firstname').type('firstName')
        cy.get('#email').type('example123@s.com')
        cy.get('#_form_5_submit').click()
        
        
        cy.get('._form-thank-you').should('contain.text','Thanks for signing up! Check your inbox for your Welcome package!')
        

  

    })

})