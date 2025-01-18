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

window.addEventListener('scroll', animaScroll)

initMostrarMais()
