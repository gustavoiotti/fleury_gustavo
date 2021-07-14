# Testes Cypress
1. Faça o download do projeto
2. Abra a pasta no VS Code e no terminal, execute o comando ```npm intall```
3. Execute o comando ```npm install cypress --save-dev```
4. Execute o comando ```./node_modules/.bin/cypress open```

# Organização
**Integration**

  Unidades.feature: Arquivo com os cenários descritos em Gherkin.
  
  Pasta Unidades: Pasta para agrupar as definições de steps, onde o cypress interpreta as instruções descritas na feature.
  ```
  steps.js 
  ```
    
  Pasta Pages: Pasta para agrupar as classes page, onde estão os métodos com os casos de teste.
  ```
  stepsPage.js
  ```
    
