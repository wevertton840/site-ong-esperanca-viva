export const listaProjetos = [
    {
        id: "projeto-alfabetizacao",
        categoria: "Educação",
        classeBadge: "badge-educacao",
        titulo: "1. Projeto Futuro Brilhante: Reforço Escolar e Leitura",
        imagem: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80",
        alt: "Instrutora voluntária auxiliando estudantes em uma roda de leitura",
        legenda: "Oficinas semanais de leitura e acompanhamento pedagógico.",
        descricao: "Oferece suporte escolar, incentivo à leitura e introdução à informática para mais de 120 crianças.",
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
        descricao: "Cursos rápidos de artesanato, panificação e corte e costura voltados a jovens e mães chefes de família.",
        apoio: "Doação de insumos para aulas práticas e instrutores voluntários."
    },
    {
        id: "projeto-alimentacao",
        categoria: "Segurança Alimentar",
        classeBadge: "badge-alimentacao",
        titulo: "3. Mesa Comunitária: Segurança Alimentar",
        imagem: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=700&q=80",
        alt: "Distribuição de cestas de alimentos e legumes",
        legenda: "Distribuição mensal de cestas verdes de produtores rurais locais.",
        descricao: "Campanha permanente de combate à fome que distribui refeições nutritivas e cestas de alimentos.",
        apoio: "Arrecadação de alimentos não perecíveis e doações financeiras."
    }
];

export function viewHome() {
    return `
        <section id="sobre">
            <h2>Sobre a Nossa Instituição</h2>
            <p>O <strong>Instituto Esperança Viva</strong> é uma organização sem fins lucrativos dedicada a promover oportunidades educacionais, assistência comunitária e desenvolvimento social.</p>
            <figure>
                <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80" alt="Voluntários reunidos com crianças">
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
            <address>
                <p><strong>Endereço:</strong> Rua das Flores, nº 123 - Centro, CEP: 37470-000</p>
                <p><strong>Telefone/WhatsApp:</strong> <a href="tel:+5535999998888">(35) 99999-8888</a></p>
                <p><strong>E-mail:</strong> <a href="mailto:contato@esperancaviva.org">contato@esperancaviva.org</a></p>
                <p><strong>Horário de Funcionamento:</strong> Segunda a Sexta, das 08h às 17h</p>
            </address>
        </section>
    `;
}

export function viewProjetos() {
    return `
        <section id="nossos-projetos">
            <h2>Nossas Iniciativas Solidárias</h2>
            <p>Através da união de forças comunitárias e voluntariado ativo, mantemos programas focados no desenvolvimento integral de crianças, jovens e famílias.</p>
            ${listaProjetos.map(p => `
                <article id="${p.id}">
                    <span class="badge ${p.classeBadge}">${p.categoria}</span>
                    <h3>${p.titulo}</h3>
                    <figure>
                        <img src="${p.imagem}" alt="${p.alt}">
                        <figcaption>${p.legenda}</figcaption>
                    </figure>
                    <p>${p.descricao}</p>
                    <p><strong>Como apoiar:</strong> ${p.apoio}</p>
                </article>
            `).join('')}
        </section>
    `;
}

export function viewCadastro() {
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
            </div>
        </dialog>
    `;
}