//DOM = Document Object Model = Modelo/Modelagem do documento html em objetos JS
//querySelector é uma funcionalidade do dom. Todo documento seguido de um par de parentesis é uma funcionalidade e uma funcion... pode receber arguments. Nesse caso aqui, é esperada uma string que tenha semelhança com os seletores css (Ex: #header, nav).  Aqui fazemos o obejct procurar (query) pelo seletor "#header nav" e assim que encontrá-lo colocá-lo na const nav.
//Os códigos abaixo são para a brir e fechar o menu quando clicar no hamburguer e x
const nav = document.querySelector('#header nav')
    //O seletor css desejado aqui abaixo é o nav e dentro do nav tudo o que tiver toggle
const toggle = document.querySelectorAll('nav .toggle')
    //Para cada elemento de toggle(aqueles nas divs com as classes toggle) faça a seguinte sequênciade passos. O mapeamento da dom é transformar tudo que é html em obejto, então element também é um obj que tem funcionalidades
for (const element of toggle) {
    //Primeiro elemento a ser passado aqui é o click e o segundo é uma função anônima.
    //A linha abaixo diz "Cliquei. Estou ouvindo o evento. O que faço agora?" -"Executa a função seguinte"
    element.addEventListener('click', function() {
        //Nav e classList já existem no mapea do doc da dom. Ele está pegando o nav e na lista de classes dele se tiver o show, tira, se não tiver, coloca.
        nav.classList.toggle('show')
    })
}

/* Quando clicar em um item do menu, esconder o menu */
/*"Receber todos os meus links. Em todo o doc pesquisa por todos os seletores que estejam no nav ul li a, quando achá-los atribua-os a consy links" */
const links = document.querySelectorAll('nav ul li a')
    /*"Para cada link dentro da const links add um evento de click que roda uma função para remover a classe show". Isso vai rodar 5x. */
for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}