# trabalho-
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="barreto.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Botão Animado</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <button class="botao">Clique Aqui</button>

</body>
</html>

body {
    margin: 50px;
}

.botao {
    position: relative;
    padding: 15px 30px;
    font-size: 18px;
    color: white;
    background-color: blue;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    /* Aplicando a animação */
    animation: moverBotao 3s infinite;
}

/* Criando a animação */
@keyframes moverBotao {
    0% {
        left: 0;
        background-color: blue;
    }

    50% {
        left: 200px;
        background-color: orange;
    }

    100% {
        left: 0;
        background-color: green;
    }
}
