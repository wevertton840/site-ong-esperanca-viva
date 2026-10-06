import { viewHome, viewProjetos, viewCadastro } from './views.js';
import { inicializarFormulario } from './validation.js';

const rotas = {
    '#/': viewHome,
    '#/inicio': viewHome,
    '#/projetos': viewProjetos,
    '#/cadastro': viewCadastro
};

function navegarParaRota() {
    const hashCompleta = window.location.hash || '#/inicio';
    const [rotaBase, params] = hashCompleta.split('?');
    const renderizador = rotas[rotaBase] || viewHome;
    const appContainer = document.getElementById('app');

    if (!appContainer) return;
    appContainer.innerHTML = renderizador();

    document.querySelectorAll('.nav-link').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === rotaBase || (rotaBase === '#/' && linkHref === '#/inicio')) {
            link.classList.add('ativo');
        } else {
            link.classList.remove('ativo');
        }
    });

    if (rotaBase === '#/cadastro') {
        inicializarFormulario();
    }

    if (params && params.startsWith('id=')) {
        const alvo = document.getElementById(params.replace('id=', ''));
        if (alvo) setTimeout(() => alvo.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function inicializarMenuGlobal() {
    const btnMenuMobile = document.getElementById('btn-menu-mobile');
    const listaMenu = document.getElementById('lista-menu');
    const itemDropdown = document.querySelector('.item-dropdown');

    if (btnMenuMobile && listaMenu) {
        btnMenuMobile.addEventListener('click', (e) => {
            e.stopPropagation();
            const aberto = listaMenu.classList.toggle('aberto');
            btnMenuMobile.classList.toggle('ativo');
            btnMenuMobile.setAttribute('aria-expanded', aberto);
        });

        document.addEventListener('click', (e) => {
            if (!btnMenuMobile.contains(e.target) && !listaMenu.contains(e.target)) {
                listaMenu.classList.remove('aberto');
                btnMenuMobile.classList.remove('ativo');
                btnMenuMobile.setAttribute('aria-expanded', 'false');
            }
        });
    }

    if (itemDropdown) {
        const link = itemDropdown.querySelector('.link-dropdown');
        if (link) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 650) {
                    e.preventDefault();
                    e.stopPropagation();
                    itemDropdown.classList.toggle('aberto');
                }
            });
        }
    }

    if (listaMenu) {
        listaMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && !e.target.classList.contains('link-dropdown')) {
                listaMenu.classList.remove('aberto');
                if (btnMenuMobile) {
                    btnMenuMobile.classList.remove('ativo');
                    btnMenuMobile.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }
}

window.addEventListener('hashchange', navegarParaRota);
window.addEventListener('DOMContentLoaded', () => {
    inicializarMenuGlobal();
    navegarParaRota();
});