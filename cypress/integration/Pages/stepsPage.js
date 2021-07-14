class StepsPage{

    static carregaSite(){
        cy.visit('/');
    }

    static selecionaUnidade(){
        cy.get(':nth-child(16) > #button-title-desktop-header > .buttoncomponentstyle__ButtonContentStyled-sc-11us3l0-3').click()
    }

    static confereUrl(){
        cy.url().should('include', '/unidades')
    }

    static selecionaFiltro(String){
        cy.contains(String).click()
    }

    static selecinaOpc(){

        let plv1; //captura nome da unidade
        cy.get('#anchor-unit-cell-alphaville > div:nth-child(1) > div').should(($div) => {
        plv1 = $div.text();
        });

        //encontra primeira unidade e clica em Ver Detalhes
        cy.get('#gatsby-focus-wrapper > div.backgroundstyled__NeutralBackground-sc-1b1f5j3-3.dHyzS > div.sc-bdVaJa.gridcomponent__GridStyled-sc-8zg10d-0.fHFDYJ > div:nth-child(2) > div:nth-child(1)').contains("Ver detalhes").click()

        //captura o nome da unidade selecionada e compara com o nome pego na página anterior
        cy.xpath('//*[@id="gatsby-focus-wrapper"]/div[8]/div[2]/div').should(($div) => {
            const plv2 = $div.text();
            expect(plv1).to.deep.equal(plv2);
        });

    }
    // static checkNome(){ //Confere se o componente tem o nome esperado
    //     //expect(cy.get('.typographycomponentstyle__H1-sc-1oox73n-1').contains('Paraíso')).to.exist
        
    // }
}

export default StepsPage;