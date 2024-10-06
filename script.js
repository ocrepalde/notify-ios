function enviarNotificacao() {
    const titulo = document.getElementById('titulo').value;
    const texto = document.getElementById('texto').value;
    const imagem = document.getElementById('imagem').value;

    if (Notification.permission === "granted") {
        new Notification(titulo, {
            body: texto,
            icon: imagem
        });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(titulo, {
                    body: texto,
                    icon: imagem
                });
            }
        });
    }
}

function enviarNotificacoesPeriodicas() {
    const intervalo = parseInt(document.getElementById('intervalo').value) * 1000; // Convertendo para milissegundos

    if (isNaN(intervalo) || intervalo <= 0) {
        alert("Por favor, insira um intervalo válido em segundos.");
        return;
    }

    setInterval(() => {
        enviarNotificacao();
    }, intervalo);
}
