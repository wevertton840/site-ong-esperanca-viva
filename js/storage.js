const CHAVE_STORAGE = 'voluntarios';

export function obterVoluntarios() {
    return JSON.parse(localStorage.getItem(CHAVE_STORAGE) || '[]');
}

export function salvarVoluntario(voluntario) {
    const lista = obterVoluntarios();
    lista.push(voluntario);
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));
}