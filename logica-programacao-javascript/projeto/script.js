function criptografar() {
    let text = document.getElementById("inputText").value;

    if (text && validarTexto(text)) {
        let encryptedText = text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        
        adicionarRegistro("Criptografado", encryptedText);
        document.getElementById("inputText").value = encryptedText; // Atualiza o campo com o texto criptografado
    } else {
        alert("Por favor, insira apenas letras minúsculas, sem acentos ou caracteres especiais.");
    }
}

function descriptografar() {
    let text = document.getElementById("inputText").value;

    if (text && validarTexto(text)) {
        let decryptedText = text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        
        adicionarRegistro("Descriptografado", decryptedText);
        document.getElementById("inputText").value = decryptedText; // Atualiza o campo com o texto descriptografado
    } else {
        alert("Por favor, insira apenas letras minúsculas, sem acentos ou caracteres especiais.");
    }
}

function adicionarRegistro(acao, texto) {
    let logList = document.getElementById("logList");
    let newItem = document.createElement("li");
    newItem.textContent = acao + ": " + texto;
    logList.appendChild(newItem);
}

function limparRegistro() {
    let logList = document.getElementById("logList");
    logList.innerHTML = ""; // Limpa o conteúdo da lista de registro
}

function validarTexto(texto) {
    // Verifica se o texto contém apenas letras minúsculas e sem acentos/caracteres especiais
    return /^[a-z\s]+$/.test(texto);
}

function copiarParaClipboard() {
    let text = document.getElementById("inputText").value;
    if (text) {
        navigator.clipboard.writeText(text).then(() => {
            alert("Texto copiado para a área de transferência!");
        }, () => {
            alert("Falha ao copiar o texto.");
        });
    } else {
        alert("Não há texto para copiar.");
    }
}
