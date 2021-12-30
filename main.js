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
/*"Receber todos os meus links. Em todo o doc pesquisa por todos os seletores que estejam no nav ul li a, quando achá-los atribua-os a const links" */
const links = document.querySelectorAll('nav ul li a')
    /*"Para cada link dentro da const links add um evento de click que roda uma função para remover a classe show". Isso vai rodar 5x. */
for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/*Mudar o header da page quando der scrol. Add sombra */
/*Primeiro precisamos verificar se a altura do header passou do scroll */

function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        /*se for menor */
        header.classList.remove('scroll')
    } /*Se o scroll no eixo y, o eixo vertical, for mair ou igual a altura do header então pega a lista de classe do header e add a classe scroll*/
}

/*Testimonials carousel slider swiper */
/*Aqui precisamos usar um container como primeiro argumento e como segundo um objeto */
const swiper = new Swiper('.swiper-container', {
    /*Quantos slides verpor passada*/
    slidesPerView: 1,
    /*'.swiper-pagination é um nome que pode ser mudado*/
    pagination: {
        el: '.swiper-pagination'
    },
    /*Pode passar com a rodinha do mouse */
    mousewheel: true,
    /*Pode passar com as setinhas do teclado */
    keyboard: true,
    /*Esse breakpoint entrou depois de ter colocado o @media no css */
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

/*SCROLLREVEAL: mostra elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 700,
        reset: true
            /*Vai vir do topo com uma distância de 30px (é como uma caixa que desce) na velocidade de 700ms. O reset significa que é para sempre fazer isso ao chegar no final da page */
    })
    /**As crases como aspas permitem organizar melhor */
    /**Esse interval é quanto tempo vai levar para cada um ser revelado na tela */
scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    
    `, { interval: 100 }
)

/*Botão voltar para o topo*/
/**Precisamos pegar da tela o elemento botão para que eu possa aplicar uma classe nele depois que tiver uma rolagem da tela pós um determinado número*/
function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}
/*Algumas mudanças para melhor organização do js */
/*Esse evento de sombra após o scroll acontece na page inteira, então usamos o window*/
/*Abaixo está a lógica de quando houver rolagem na página */
window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
})