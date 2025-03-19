// Manipular o formulário de redefinição de senha
document.getElementById("reset-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedir o envio padrão do formulário

    const emailOrUsername = document.getElementById("email-or-username").value;

    // Simulação de validação (sem backend)
    if (emailOrUsername) {
        // Simular envio de link
        alert("Link de redefinição enviado! Verifique seu email.");
        window.location.href = "login.html"; // Redireciona para o login
    } else {
        alert("Por favor, preencha o campo.");
    }
});

// Redirecionar para a página de cadastro ao clicar em "Criar nova conta"
document.getElementById("create-account").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Botão 'Criar nova conta' clicado. Redirecionando para signup.html...");
    window.location.href = "signup.html";
});

// Redirecionar para a página de login ao clicar em "Voltar ao login"
document.getElementById("login-link").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Botão 'Voltar ao login' clicado. Redirecionando para login.html...");
    window.location.href = "login.html";
});