# Comandos NPM
`npm` vem com o node.
* `npm i <pacote>` ou `npm install <pacote>` -> instala o módulo/pacote/dependência _localmente_
* `npm i -g <pacote>` -> instala _globalmente_

* `npm i <pacote> -D` ou `npm i <pacote> --savedev` -> instala localmente e no package.json, vai definir o pacote como sendo uma dependência dev (`"devDependencies: {}"`) 

* `npm uninstall <pacote>` -> desinstala o pacote

---

# package.json
`package.json` -> contém todas as informações sobre o projeto, incluindo as `"dependencies:" {}`
* dá para criar manualmente, respeitando a sintaxe; 
* ou usar o script `npm init`.
  * para cada etapa, pode-se digitar o que quiser ou usar a sugestão padronizada (que aparece em parênteses)
  * `npm init -y` gera o `package.json` usando essas sugestões

ele é importante na hora de compartilhar o código. as bibliotecas importadas podem ser muito pesadas, e pode dificultar o uso do repositório. alternativamente, ao invés de compartilhar os módulos, compartilha-se seus nomes através do package.json para que os clientes instalem as bibliotecas!

## Propriedades
* `"devDependencies"` -> remete às dependências que não serão usadas para a produção ou consumo da aplicação, e sim o que será usado para desenvolvê-la; é útil para separar as coisas

* `"scripts":` -> comandos personalizados.
  * para rodar os scripts usa-se `npm run` + nome do script. para alguns script há um atalho (ex: `npm run start` = `npm start`) 