Feature: Unidades
    Como usuário, gostaria de poder consultar as unidades disponíveis de acordo com
    os filtros selecionados, e ver as informações sobre a unidade selecionada.

Scenario: Acessar unidades
Given que acesse o site da Fleury
And clique na opção unidades no menu superior
Then devo ser direcionado para a página de unidades

Scenario: Selecionar filtros
Given que eu selecione o filtro próximo ao metrô
And o filtro vacinação
Then o filtro atendimento noturno

Scenario: Ver detalhes
Given ao clicar em Ver Detalhes
Then devo ser direcionado para a página com as informações da unidade selecionada
