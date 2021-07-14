import Unidades from '../Pages/stepsPage'

Given(/^que acesse o site da Fleury$/, () => {
	Unidades.carregaSite()
});

When(/^clique na opção unidades no menu superior$/, () => {
	Unidades.selecionaUnidade()
});


Then(/^devo ser direcionado para a página de unidades$/, () => {
	Unidades.confereUrl('include', '/unidades')
});



Given(/^que eu selecione o filtro próximo ao metrô$/, () => {
	Unidades.selecionaFiltro('Selecione')
	Unidades.selecionaFiltro('Próximo ao metrô')
});

When(/^o filtro vacinação$/, () => {
	Unidades.selecionaFiltro('Vacinação')
});

Then(/^o filtro atendimento noturno$/, () => {
	Unidades.selecionaFiltro('Atendimento noturno')
});



Given(/^ao clicar em Ver Detalhes$/, () => {
	Unidades.selecinaOpc()
});

Then(/^devo ser direcionado para a página com as informações da unidade selecionada$/, () => {
	Unidades.confereUrl('include', '/unidades/paraiso')
});

// Then(/^conferir nome$/, () => {
// 	Unidades.checkNome()
// });
