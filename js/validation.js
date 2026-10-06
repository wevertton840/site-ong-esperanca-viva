import { salvarVoluntario, obterVoluntarios } from './storage.js';

export function inicializarFormulario() {
    const formCadastro = document.getElementById('form-cadastro');
    const modalSucesso = document.getElementById('modal-sucesso');
    const btnFecharModal = document.getElementById('btn-fechar-modal');

    if (!formCadastro) return;
    formCadastro.setAttribute('novalidate', '');

    function restaurarHistorico() {
        const container = document.getElementById('lista-voluntarios-salvos');
        if (!container) return;
        const registos = obterVoluntarios();
        if (registos.length === 0) {
            container.innerHTML = '<p style="color: var(--texto-mutado); font-style: italic;">Nenhum voluntário registado localmente até ao momento.</p>';
            return;
        }
        container.innerHTML = registos.map(v => `
            <div style="background: #f8f9fa; border-left: 4px solid var(--laranja-acao); padding: 0.8rem 1rem; border-radius: 4px; margin-bottom: 0.75rem;">
                <strong>${v.nome}</strong> (${v.cidade}/${v.estado})<br>
                <small style="color: var(--texto-mutado);">Projeto: ${v.projeto} | Contacto: ${v.email}</small>
            </div>
        `).join('');
    }

    restaurarHistorico();

    function exibirErro(input, msg) {
        removerErro(input);
        input.classList.add('campo-invalido');
        const span = document.createElement('span');
        span.className = 'mensagem-erro';
        span.textContent = msg;
        input.parentNode.appendChild(span);
    }

    function removerErro(input) {
        input.classList.remove('campo-invalido');
        input.classList.add('campo-valido');
        const span = input.parentNode.querySelector('.mensagem-erro');
        if (span) span.remove();
    }

    function validarCampo(input) {
        const valor = input.value.trim();
        if (input.id === 'nome' && valor.length < 3) {
            exibirErro(input, 'Informe seu nome completo (mínimo de 3 caracteres).');
            return false;
        }
        if (input.id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
            exibirErro(input, 'Insira um e-mail válido.');
            return false;
        }
        if (input.id === 'cpf' && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(valor)) {
            exibirErro(input, 'CPF incompleto.');
            return false;
        }
        if (input.id === 'telefone' && !/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(valor)) {
            exibirErro(input, 'Telefone incompleto.');
            return false;
        }
        if (input.id === 'cep' && !/^\d{5}-\d{3}$/.test(valor)) {
            exibirErro(input, 'CEP incompleto.');
            return false;
        }
        if (input.id === 'cidade' && valor.length < 2) {
            exibirErro(input, 'Informe a sua cidade.');
            return false;
        }
        if ((input.id === 'estado' || input.id === 'projeto-interesse') && !valor) {
            exibirErro(input, 'Selecione uma opção.');
            return false;
        }
        removerErro(input);
        return true;
    }

    // Configuração de máscaras
    const campoCpf = document.getElementById('cpf');
    if (campoCpf) {
        campoCpf.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '').slice(0, 11);
            v = v.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = v;
            if (v.length === 14) removerErro(campoCpf);
        });
    }

    const campoTel = document.getElementById('telefone');
    if (campoTel) {
        campoTel.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '').slice(0, 11);
            v = v.replace(/^(\d{2})(\d)/g, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
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

    const campos = formCadastro.querySelectorAll('input[required], select[required]');
    campos.forEach(c => {
        c.addEventListener('blur', () => validarCampo(c));
        c.addEventListener('input', () => { if (c.classList.contains('campo-invalido')) validarCampo(c); });
    });

    const redirecionar = () => {
        if (modalSucesso && typeof modalSucesso.close === 'function') modalSucesso.close();
        window.location.hash = '#/inicio';
    };

    if (btnFecharModal) btnFecharModal.addEventListener('click', redirecionar);

    formCadastro.addEventListener('submit', (e) => {
        e.preventDefault();
        let valido = true;
        campos.forEach(c => { if (!validarCampo(c)) valido = false; });
        if (!valido) {
            const primeiro = formCadastro.querySelector('.campo-invalido');
            if (primeiro) primeiro.focus();
            return;
        }

        salvarVoluntario({
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
        });

        restaurarHistorico();

        if (typeof Swal !== 'undefined') {
            Swal.fire({
                title: 'Cadastro Confirmado!',
                text: 'Obrigado por se voluntariar no Instituto Esperança Viva.',
                icon: 'success',
                confirmButtonColor: '#f26419',
                confirmButtonText: 'Concluir'
            }).then(redirecionar);
        } else if (modalSucesso) {
            modalSucesso.showModal ? modalSucesso.showModal() : modalSucesso.setAttribute('open', '');
            setTimeout(redirecionar, 5000);
        }

        formCadastro.reset();
        campos.forEach(c => c.classList.remove('campo-valido', 'campo-invalido'));
    });
}