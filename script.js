const linksInternos = document.querySelectorAll('.menu a[href^="#"]');

if (linksInternos.length) {
    function initNavMenu() {
        function navMenu(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);
            const sectionTop = section.offsetTop - 90;
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth',
            })
        }



        linksInternos.forEach((link) => {
            link.addEventListener('click', navMenu);
        })
    }
}

const maisInfo = document.querySelectorAll('section .mais-info');


if(maisInfo.length) {
    function mostrarMais() {
        function mostrarInfo(event) {
            const itemSelec = event.currentTarget;
            const textSelec = itemSelec.nextElementSibling;
            textSelec.classList.toggle('ativo');
            itemSelec.classList.toggle('ativo')
        }

        maisInfo.forEach((info) => {
            info.addEventListener('click', mostrarInfo);
        })
    }
}

const opGames = document.querySelectorAll('.lista-games a');
const imgGames = document.querySelectorAll('.img-games img');


if(opGames.length && imgGames.length) {
    imgGames[0].classList.add('ativo')
    function mostrarImg(index) {
        imgGames.forEach((img) => {
            img.classList.remove('ativo');
        })
        imgGames[index].classList.add('ativo');
    }


    opGames.forEach((opcao, index) => {
        opcao.addEventListener('click', () => {
            mostrarImg(index)
        })
    })
}

const sections = document.querySelectorAll('section');
const windowMetade = window.innerHeight * 0.7;

function animaScroll() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
            section.classList.add('ativo');
        } else {
            section.classList.remove('ativo');
        }
    })
}

window.addEventListener('scroll', animaScroll);


mostrarMais()
initNavMenu()
