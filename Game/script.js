document.addEventListener("DOMContentLoaded", () => {

    const botaoSalvar = document.querySelector(".btn-info");

    botaoSalvar.addEventListener("click", () => {

        let respostas = {};

        // Captura das respostas
        respostas.q1 = document.querySelector("input[name='opcao1']:checked")?.nextElementSibling.innerText || null;
        respostas.q2 = document.querySelector("input[name='opcao2']:checked")?.nextElementSibling.innerText || null;
        const select = document.querySelector("select");
        respostas.q3 = select.value !== "" ? select.options[select.selectedIndex].text : null;
        respostas.q4 = document.querySelector("input[name='opcao3']:checked")?.nextElementSibling.innerText || null;
        respostas.q5 = document.querySelector("input[name='opcao4']:checked")?.nextElementSibling.innerText || null;

        // Verificar se falta responder
        if (!respostas.q1 || !respostas.q2 || !respostas.q3 || !respostas.q4 || !respostas.q5) {
            alert("⚠️ Responda todas as perguntas antes de salvar!");
            return;
        }

        // ---------------------------
        // 📌 GABARITO DO QUIZ
        // ---------------------------
        const gabarito = {
            q1: "Via Láctea",
            q2: "Aglomerado de estrelas, poeira e gás",
            q3: "Espiral",
            q4: "Buraco Negro",
            q5: "Andrômeda"
        };

        // ---------------------------
        // 📌 Comparação + Pontuação
        // ---------------------------
        let pontos = 0;
        let detalhes = "";

        for (let q in gabarito) {
            if (respostas[q] === gabarito[q]) {
                pontos++;
                detalhes += `✔ ${q.toUpperCase()}: Acertou! (${respostas[q]})\n`;
            } else {
                detalhes += `✖ ${q.toUpperCase()}: Errou! (${respostas[q]}) — certo: ${gabarito[q]}\n`;
            }
        }

        // ---------------------------
        // 📌 Mensagem final por nota
        // ---------------------------
        let mensagemFinal = "";

        switch (pontos) {
            case 5:
                mensagemFinal = "🌟 Incrível! Você acertou tudo!";
                break;
            case 4:
                mensagemFinal = "👏 Mandou muito bem!";
                break;
            case 3:
                mensagemFinal = "😊 Bom resultado!";
                break;
            case 2:
                mensagemFinal = "🙂 Tá no caminho, continue estudando!";
                break;
            case 1:
                mensagemFinal = "😬 Só 1... tente novamente!";
                break;
            default:
                mensagemFinal = "😢 Zero... bora tentar de novo?";
        }

        // ---------------------------
        // 📢 Mostrar resultado final
        // ---------------------------
        alert(
            `Resultado do Quiz\n\n` +
            `Pontuação: ${pontos}/5\n` +
            `${mensagemFinal}\n\n` +
            `\nDetalhes:\n${detalhes}`
        );
    });

});
