 function calcularPontuacao() {
        let pontos = 0;

        const q1 = document.querySelector('input[name="q1"]:checked');
        if (q1 && q1.value === "Saturno") pontos++;

        const q2 = document.querySelectorAll('input[name="q2"]:checked');
        let respostasQ2 = Array.from(q2).map(item => item.value);

        if (respostasQ2.includes("Urano")) pontos += 0.5;
        if (respostasQ2.includes("Saturno")) pontos += 0.5;

        const q3 = document.querySelector('select[name="q3"]').value;
        if (q3 === "Terra") pontos++;

        const q4 = document.querySelector('input[name="q4"]:checked');
        if (q4 && q4.value === "Saturno") pontos++;

        const q5 = document.querySelector('input[name="q5"]:checked');
        if (q5 && q5.value === "Saturno") pontos++;

        const q6 = document.querySelector('select[name="q6"]').value;
        if (q6 === "Terra") pontos++;

        let msg = "";

        if (pontos === 6) {
            msg = "Parabéns! Você acertou tudo! Pontuação: " + pontos;
        } else if (pontos >= 3) {
            msg = "Bom trabalho! Pontuação: " + pontos;
        } else {
            msg = "Continue praticando! Pontuação: " + pontos;
        }

        document.getElementById("resultado").innerText = msg;
    }