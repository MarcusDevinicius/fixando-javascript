const maisInfo = document.querySelectorAll('.mais-info');

function initMostrarMais() {
    if(maisInfo.length) {
        function verMais(event) {
            const itemSelec = event.currentTarget;
            const textSelec = itemSelec.nextElementSibling;
            textSelec.classList.toggle('ativo');
            itemSelec.classList.toggle('ativo');
        }


        maisInfo.forEach((info) => {
            info.addEventListener('click', verMais);
        })
    }
}

const sections = document.querySelectorAll('section');
const windowMetade = window.innerHeight * 0.7;

function initAnimaScroll() {
    if (sections.length) {
        function animaScroll() {
            sections.forEach((section) => {
                const topSec = section.getBoundingClientRect().top - windowMetade;
                if (topSec < 0) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            })
        }

        window.addEventListener('scroll', animaScroll);
    }
}


const itemMenu = document.querySelectorAll('.menu a[href^="#"]');

function initLinksInternos() {
    if(itemMenu.length) {
        function btnToSection(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);
            const sectionTop = section.offsetTop - 90;
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth',
            })
        }

        itemMenu.forEach((item) => {
            item.addEventListener('click', btnToSection)
        })
    }
}

const opGames = document.querySelectorAll('.lista-games a');
const imgGames = document.querySelectorAll('.img-games img');

function initNavTabs() {
    if (opGames.length && imgGames.length) {
        imgGames[0].classList.add('ativo');
        function navTabs(index) {
            imgGames.forEach((img) => {
                img.classList.remove('ativo');
            })
            imgGames[index].classList.add('ativo');
        }

        opGames.forEach((game, index) => {
            game.addEventListener('click', () => {
                navTabs(index);
            });

        })
    }
}

initMostrarMais()
initAnimaScroll()
initLinksInternos()
initNavTabs()