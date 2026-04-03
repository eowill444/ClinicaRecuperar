function enviarWhatsApp() {
    // 1. Captura os valores dos campos
    var nome = document.getElementById('nome').value;
    var msg = document.getElementById('mensagem').value;
    
    // 2. Validação simples (evita enviar se estiver vazio)
    if (nome === "" || msg === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    // 3. Configurações do WhatsApp
    var telefoneClinica = "5548998402171";
    
    // 4. Monta o texto (usando "+" para evitar erros de sintaxe)
    var texto = "Olá! Meu nome é " + nome + ", \n\n"
                 + msg;
    
    // 5. Codifica para o formato de URL
    var textoCodificado = encodeURIComponent(texto);
    
    // 6. Monta o link final e abre em nova aba
    var url = "https://wa.me/" + telefoneClinica + "?text=" + textoCodificado;
    
    window.open(url, '_blank');
}