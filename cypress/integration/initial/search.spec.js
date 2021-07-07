context('Working with searching', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
      });
    
    it('test input', () => {
        cy.get('input').type('post one').should('have.value','post one')
    })

    it('test with response of input searching', () => {
        cy.get('input').type('fugiat veniam minus')
        cy.get('.title').first().then((item)=> {
            expect(item).to.contain('fugiat veniam minus')
        })
    })

    it('check with empty', () => {
        cy.get('input').type('empty of all')
        cy.get('div').eq(2).then((item)=> {
            expect(item.html()).equal('')
        })
    })
})