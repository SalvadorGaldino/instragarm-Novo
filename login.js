// Manipular o formulário de login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedir o envio padrão do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de validação (sem backend)
    if (username && password) {
        // Simular login bem-sucedido
        alert("Login bem-sucedido! Redirecionando para o feed...");
        window.location.href = "index.html"; // Redireciona para o feed
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Redirecionar para a página de cadastro
document.getElementById("signup-link").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "signup.html";
});

// Redirecionar para a página de redefinição de senha
document.getElementById("forgot-password").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "reset-password.html";
});