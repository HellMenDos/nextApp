context('Working with api', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('test contains', () => {
    cy.get('.title').eq(0).then((item)=> {
      expect(item).to.contain('delectus aut autem')
    })
  });

  it('test delete', () => {
    cy.get('.delete').eq(0).click()
    cy.get('.title').eq(0).then((item)=> {
      expect(item).to.contain('quis ut nam facilis et officia qui')
    })
  });
  
  it('test link', () => {
    cy.get('.title').eq(0).then((title)=> {
      cy.get('h1').eq(0).then((item)=> {
        cy.visit(`http://localhost:3000/post/${item.text()}`).then(()=>{
          cy.get('h1').first().then((postTitle)=> {
            expect(postTitle).to.contain(title.text())
          })
        })
      })   
    }) 
  });
});