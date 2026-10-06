// ==========================================
// 1. TEMPLATES DAS VISTAS (COMPONENTES VISUAIS)
// ==========================================

function viewHome() {
    return `
        <section id="sobre">
            <h2>Sobre a Nossa Instituição</h2>
            <p>
                O <strong>Instituto Esperança Viva</strong> é uma organização sem fins lucrativos dedicada a promover oportunidades educacionais, assistência comunitária e desenvolvimento social para famílias em situação de vulnerabilidade.
            </p>
            <figure>
                <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80" alt="Voluntários reunidos com crianças durante uma oficina educativa comunitária">
                <figcaption>Ações comunitárias integrando voluntários e famílias atendidas.</figcaption>
            </figure>
            <h3>Nossa Missão, Visão e Valores</h3>
            <ul>
                <li><strong>Missão:</strong> Promover a dignidade e a cidadania através de ações educativas continuadas.</li>
                <li><strong>Visão:</strong> Ser referência local na capacitação comunitária e transformação social.</li>
                <li><strong>Valores:</strong> Empatia, transparência, respeito, cooperação e responsabilidade social.</li>
            </ul>
        </section>
        <section id="contato">
            <h2>Canais de Atendimento e Contato</h2>
            <p>Quer saber mais sobre as nossas iniciativas ou fazer-nos uma visita? Entre em contacto connosco:</p>
            <address>
                <p><strong>Endereço:</strong> Rua das Flores, nº 123 - Centro, CEP: 37470-000</p>
                <p><strong>Telefone/WhatsApp:</strong> <a href="tel:+5535999998888">(35) 99999-8888</a></p>
                <p><strong>E-mail:</strong> <a href="mailto:contato@esperancaviva.org">contato@esperancaviva.org</a></p>
                <p><strong>Horário de Funcionamento:</strong> Segunda a Sexta, das 08h às 17h</p>
            </address>
        </section>
    `;
}

// ------------------------------------------
// DADOS E COMPONENTES DINÂMICOS DE PROJETOS
// ------------------------------------------
const listaProjetos = [
    {
        id: "projeto-alfabetizacao",
        categoria: "Educação",
        classeBadge: "badge-educacao",
        titulo: "1. Projeto Futuro Brilhante: Reforço Escolar e Leitura",
        imagem: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80",
        alt: "Instrutora voluntária auxiliando estudantes em uma roda de leitura",
        legenda: "Oficinas semanais de leitura e acompanhamento pedagógico.",
        descricao: "Oferece suporte escolar, incentivo à leitura e introdução à informática para mais de 120 crianças no contraturno das aulas regulares.",
        apoio: "Doação de livros infantojuvenis ou atuação como monitor voluntário."
    },
    {
        id: "projeto-capacitacao",
        categoria: "Capacitação",
        classeBadge: "badge-renda",
        titulo: "2. Projeto Oficinas de Renda: Capacitação Profissional",
        imagem: "https://images.unsplash.com/photo-1528747045269-390fe33c19f2?auto=format&fit=crop&w=700&q=80",
        alt: "Alunas aprendendo técnicas de costura artesanal",
        legenda: "Capacitação prática para geração de renda familiar.",
        descricao: "Cursos rápidos de artesanato, panificação e corte e costura voltados a jovens e mães chefes de família que buscam autonomia financeira.",
        apoio: "Doação de insumos para aulas práticas e instrutores voluntários nas áreas técnicas."
    },
    {
        id: "projeto-alimentacao",
        categoria: "Segurança Alimentar",
        classeBadge: "badge-alimentacao",
        titulo: "3. Mesa Comunitária: Segurança Alimentar",
        imagem: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=700&q=80",
        alt: "Distribuição de cestas de alimentos e legumes",
        legenda: "Distribuição mensal de cestas verdes de produtores rurais locais.",
        descricao: "Campanha permanente de combate à fome que distribui refeições nutritivas e cestas de alimentos para famílias em extrema vulnerabilidade.",
        apoio: "Arrecadação de alimentos não perecíveis e doações financeiras para compras a granel."
    }
];

function criarCardProjeto(projeto) {
    return `
        <article id="${projeto.id}">
            <span class="badge ${projeto.classeBadge}">${projeto.categoria}</span>
            <h3>${projeto.titulo}</h3>
            <figure>
                <img src="${projeto.imagem}" alt="${projeto.alt}">
                <figcaption>${projeto.legenda}</figcaption>
            </figure>
            <p>${projeto.descricao}</p>
            <p><strong>Como apoiar:</strong> ${projeto.apoio}</p>
        </article>
    `;
}

function viewProjetos() {
    return `
        <section id="nossos-projetos">
            <h2>Nossas Iniciativas Solidárias</h2>
            <p>Através da união de forças comunitárias e voluntariado ativo, mantemos programas focados no desenvolvimento integral de crianças, jovens e famílias.</p>
            ${listaProjetos.map(criarCardProjeto).join('')}
        </section>
    `;
}

function viewCadastro() {
    return `
        <section id="area-cadastro">
            <h2>Formulário de Cadastro de Voluntários e Parceiros</h2>
            <p>Preencha os campos abaixo para que a nossa equipa entre em contacto consigo.</p>

            <form action="#" method="POST" id="form-cadastro">
                <fieldset>
                    <legend>Dados Pessoais</legend>
                    <p class="campo-largo">
                        <label for="nome">Nome Completo:*</label>
                        <input type="text" id="nome" name="nome" required minlength="3" placeholder="Ex: Maria da Silva">
                    </p>
                    <p class="campo-largo">
                        <label for="email">E-mail para Contacto:*</label>
                        <input type="email" id="email" name="email" required placeholder="seuemail@exemplo.com">
                    </p>
                    <p>
                        <label for="cpf">CPF:*</label>
                        <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00" maxlength="14">
                    </p>
                    <p>
                        <label for="telefone">Telefone / WhatsApp:*</label>
                        <input type="tel" id="telefone" name="telefone" required placeholder="(00) 00000-0000" maxlength="15">
                    </p>
                </fieldset>

                <fieldset>
                    <legend>Endereço e Localização</legend>
                    <p>
                        <label for="cep">CEP:*</label>
                        <input type="text" id="cep" name="cep" required placeholder="00000-000" maxlength="9">
                    </p>
                    <p>
                        <label for="cidade">Cidade:*</label>
                        <input type="text" id="cidade" name="cidade" required placeholder="Sua cidade">
                    </p>
                    <p class="campo-largo">
                        <label for="estado">Estado:*</label>
                        <select id="estado" name="estado" required>
                            <option value="">Selecione...</option>
                            <option value="MG">Minas Gerais (MG)</option>
                            <option value="SP">São Paulo (SP)</option>
                            <option value="RJ">Rio de Janeiro (RJ)</option>
                            <option value="ES">Espírito Santo (ES)</option>
                            <option value="OUTRO">Outro Estado</option>
                        </select>
                    </p>
                </fieldset>

                <fieldset>
                    <legend>Área de Atuação e Interesses</legend>
                    <p class="campo-largo">
                        <label for="projeto-interesse">Em qual projeto gostaria de atuar?*</label>
                        <select id="projeto-interesse" name="projeto" required>
                            <option value="">Selecione um projeto...</option>
                            <option value="reforco-escolar">Futuro Brilhante (Apoio Escolar e Leitura)</option>
                            <option value="capacitacao">Oficinas de Renda (Capacitação Profissional)</option>
                            <option value="alimentacao">Mesa Comunitária (Segurança Alimentar)</option>
                            <option value="apoio-geral">Apoio Administrativo / Logístico</option>
                        </select>
                    </p>
                    <p class="campo-largo">
                        <label for="mensagem">Conte-nos um pouco sobre a sua motivação:</label>
                        <textarea id="mensagem" name="mensagem" rows="4" placeholder="Ex: Disponibilidade aos sábados..."></textarea>
                    </p>
                </fieldset>

                <p class="acoes-formulario">
                    <button type="submit">Enviar Cadastro</button>
                    <button type="reset">Limpar Dados</button>
                </p>
            </form>

            <section id="historico-cadastros" style="margin-top: 2rem; border-top: 2px dashed var(--borda-suave); padding-top: 1.5rem;">
                <h3>Voluntários Inscritos Recentemente</h3>
                <div id="lista-voluntarios-salvos"></div>
            </section>
        </section>

        <dialog id="modal-sucesso">
            <div class="conteudo-modal-alerta">
                <div class="icone-alerta-wrapper">
                    <span class="icone-check">✓</span>
                    <span class="icone-sino">🔔</span>
                </div>
                <h3>Cadastro Confirmado!</h3>
                <p>A nossa equipa entrará em contacto brevemente.</p>
                <button type="button" id="btn-fechar-modal">Entendido</button>
                <div class="barra-progresso-container">
                    <div class="barra-progresso-ativa"></div>
                </div>
            </div>
        </dialog>
    `;
}

// ==========================================
// 2. SISTEMA DE ROTAS E RENDERIZAÇÃO
// ==========================================

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

    // 1. Renderiza a vista no contêiner principal
    appContainer.innerHTML = renderizador();

    // 2. Atualiza a classe ativa na barra de navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === rotaBase || (rotaBase === '#/' && linkHref === '#/inicio')) {
            link.classList.add('ativo');
        } else {
            link.classList.remove('ativo');
        }
    });

    // 3. Inicializa os eventos caso estejamos na tela de cadastro
    if (rotaBase === '#/cadastro') {
        configurarFormulario();
    }

    // 4. Se houver âncora de projeto, faz scroll suave até ele
    if (params && params.startsWith('id=')) {
        const elementoId = params.replace('id=', '');
        setTimeout(() => {
            const alvo = document.getElementById(elementoId);
            if (alvo) {
                alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 50);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ==========================================
// 3. EVENTOS DINÂMICOS, VALIDAÇÃO E STORAGE
// ==========================================

function configurarFormulario() {
    const formCadastro = document.getElementById('form-cadastro');
    const modalSucesso = document.getElementById('modal-sucesso');
    const btnFecharModal = document.getElementById('btn-fechar-modal');

    if (formCadastro) {
        formCadastro.setAttribute('novalidate', '');
    }

    // Restauração da lista a partir do localStorage
    function restaurarHistoricoInterface() {
        const containerLista = document.getElementById('lista-voluntarios-salvos');
        if (!containerLista) return;

        const registos = JSON.parse(localStorage.getItem('voluntarios') || '[]');

        if (registos.length === 0) {
            containerLista.innerHTML = '<p style="color: var(--texto-mutado); font-style: italic;">Nenhum voluntário registado localmente até ao momento.</p>';
            return;
        }

        containerLista.innerHTML = registos.map((voluntario) => `
            <div style="background: #f8f9fa; border-left: 4px solid var(--laranja-acao); padding: 0.8rem 1rem; border-radius: 4px; margin-bottom: 0.75rem;">
                <strong>${voluntario.nome}</strong> (${voluntario.cidade}/${voluntario.estado})<br>
                <small style="color: var(--texto-mutado);">Projeto: ${voluntario.projeto} | Contacto: ${voluntario.email}</small>
            </div>
        `).join('');
    }

    // Inicializa a lista existente
    restaurarHistoricoInterface();

    function exibirErro(input, mensagem) {
        removerErro(input);
        input.classList.add('campo-invalido');
        input.classList.remove('campo-valido');

        const spanErro = document.createElement('span');
        spanErro.className = 'mensagem-erro';
        spanErro.textContent = mensagem;
        input.parentNode.appendChild(spanErro);
    }

    function removerErro(input) {
        input.classList.remove('campo-invalido');
        input.classList.add('campo-valido');
        const spanExistente = input.parentNode.querySelector('.mensagem-erro');
        if (spanExistente) {
            spanExistente.remove();
        }
    }

    function validarCampo(input) {
        const valor = input.value.trim();

        if (input.id === 'nome') {
            if (valor.length < 3) {
                exibirErro(input, 'Por favor, informe seu nome completo (mínimo de 3 caracteres).');
                return false;
            }
        }

        if (input.id === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(valor)) {
                exibirErro(input, 'Insira um endereço de e-mail válido (ex: nome@dominio.com).');
                return false;
            }
        }

        if (input.id === 'cpf') {
            const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
            if (!cpfRegex.test(valor)) {
                exibirErro(input, 'CPF incompleto. Formato esperado: 000.000.000-00.');
                return false;
            }
        }

        if (input.id === 'telefone') {
            const telRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
            if (!telRegex.test(valor)) {
                exibirErro(input, 'Telefone incompleto. Formato esperado: (XX) XXXXX-XXXX.');
                return false;
            }
        }

        if (input.id === 'cep') {
            const cepRegex = /^\d{5}-\d{3}$/;
            if (!cepRegex.test(valor)) {
                exibirErro(input, 'CEP incompleto. Formato esperado: 00000-000.');
                return false;
            }
        }

        if (input.id === 'cidade') {
            if (valor.length < 2) {
                exibirErro(input, 'Informe a sua cidade.');
                return false;
            }
        }

        if (input.id === 'estado' || input.id === 'projeto-interesse') {
            if (!valor) {
                exibirErro(input, 'Selecione uma das opções disponíveis.');
                return false;
            }
        }

        removerErro(input);
        return true;
    }

    // Máscaras de entrada em tempo real
    const campoCpf = document.getElementById('cpf');
    if (campoCpf) {
        campoCpf.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '').slice(0, 11);
            v = v.replace(/(\d{3})(\d)/, '$1.$2');
            v = v.replace(/(\d{3})(\d)/, '$1.$2');
            v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = v;
            if (v.length === 14) removerErro(campoCpf);
        });
    }

    const campoTel = document.getElementById('telefone');
    if (campoTel) {
        campoTel.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '').slice(0, 11);
            v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
            v = v.replace(/(\d{5})(\d)/, '$1-$2');
            e.target.value = v;
            if (v.length >= 14) removerErro(campoTel);
        });
    }

    const campoCep = document.getElementById('cep');
    if (campoCep) {
        campoCep.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '').slice(0, 8);
            v = v.replace(/^(\d{5})(\d)/, '$1-$2');
            e.target.value = v;
            if (v.length === 9) removerErro(campoCep);
        });
    }

    const camposObrigatorios = formCadastro ? formCadastro.querySelectorAll('input[required], select[required]') : [];
    camposObrigatorios.forEach(campo => {
        campo.addEventListener('blur', () => validarCampo(campo));
        campo.addEventListener('input', () => {
            if (campo.classList.contains('campo-invalido')) {
                validarCampo(campo);
            }
        });
    });

    function fecharModalERedirecionar() {
        if (modalSucesso) {
            if (typeof modalSucesso.close === 'function') {
                modalSucesso.close();
            } else {
                modalSucesso.removeAttribute('open');
            }
        }
        window.location.hash = '#/inicio';
    }

    if (btnFecharModal) {
        btnFecharModal.addEventListener('click', fecharModalERedirecionar);
    }

    if (formCadastro) {
        formCadastro.addEventListener('submit', (e) => {
            e.preventDefault();

            let formularioValido = true;
            camposObrigatorios.forEach(campo => {
                const valido = validarCampo(campo);
                if (!valido) formularioValido = false;
            });

            if (!formularioValido) {
                const primeiroInvalido = formCadastro.querySelector('.campo-invalido');
                if (primeiroInvalido) primeiroInvalido.focus();
                return;
            }

            const novoVoluntario = {
                nome: formCadastro.nome.value.trim(),
                email: formCadastro.email.value.trim(),
                cpf: formCadastro.cpf.value.trim(),
                telefone: formCadastro.telefone.value.trim(),
                cep: formCadastro.cep.value.trim(),
                cidade: formCadastro.cidade.value.trim(),
                estado: formCadastro.estado.value,
                projeto: formCadastro['projeto-interesse'].value,
                mensagem: formCadastro.mensagem.value.trim(),
                dataCadastro: new Date().toISOString()
            };

            const cadastrosExistentes = JSON.parse(localStorage.getItem('voluntarios') || '[]');
            cadastrosExistentes.push(novoVoluntario);
            localStorage.setItem('voluntarios', JSON.stringify(cadastrosExistentes));

            // Atualiza de imediato a lista no ecrã
            restaurarHistoricoInterface();

            // Feedback com Biblioteca Externa (SweetAlert2) ou Fallback para o Modal Nativo
            if (typeof Swal !== 'undefined') {
                Swal.fire({
                    title: 'Cadastro Confirmado!',
                    text: 'Obrigado por se voluntariar no Instituto Esperança Viva.',
                    icon: 'success',
                    confirmButtonColor: '#f26419',
                    confirmButtonText: 'Concluir'
                }).then(() => {
                    fecharModalERedirecionar();
                });
            } else if (modalSucesso) {
                if (typeof modalSucesso.showModal === 'function') {
                    modalSucesso.showModal();
                } else {
                    modalSucesso.setAttribute('open', '');
                }
                setTimeout(fecharModalERedirecionar, 5000);
            }

            formCadastro.reset();
            camposObrigatorios.forEach(campo => campo.classList.remove('campo-valido', 'campo-invalido'));
        });
    }
}

// ==========================================
// 4. COMPONENTES GLOBAIS (MENU MOBILE & SUBMENU)
// ==========================================

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
        const linkDropdown = itemDropdown.querySelector('.link-dropdown');
        if (linkDropdown) {
            linkDropdown.addEventListener('click', (e) => {
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

// ==========================================
// 5. INICIALIZAÇÃO DA APLICAÇÃO
// ==========================================

window.addEventListener('hashchange', navegarParaRota);

window.addEventListener('DOMContentLoaded', () => {
    inicializarMenuGlobal();
    navegarParaRota();
});