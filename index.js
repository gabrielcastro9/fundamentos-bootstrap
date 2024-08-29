$(document).ready(function() {
    // Máscara para o campo de telefone
    $('#tel').mask('(00) 00000-0000');
    
    // Evento de envio do formulário
    $('.contactForm').on('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Exibe uma mensagem de confirmação
        alert('Formulário enviado com sucesso!');
        
        // Aqui você pode adicionar lógica para enviar os dados do formulário
        // Exemplo: $.post('/api/contato', $(this).serialize());
    });
});
