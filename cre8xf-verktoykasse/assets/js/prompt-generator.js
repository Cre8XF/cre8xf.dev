function generatePrompt() {
    const type = document.getElementById("type").value;
    const tema = document.getElementById("tema").value.trim();
    const tone = document.getElementById("tone").value.trim();
    const malgruppe = document.getElementById("malgruppe").value.trim();

    if (!tema || !tone || !malgruppe) {
        alert("Vennligst fyll ut alle felt.");
        return;
    }

    let prompt = "";

    switch (type) {
        case "blogginnlegg":
            prompt = `Skriv et ${tone} blogginnlegg om "${tema}" rettet mot ${malgruppe}. Inkluder en innledning, hovedpunkter og avslutning.`;
            break;
        case "bildegenerering":
            prompt = `Lag en AI-bildeprompt basert på "${tema}" i en ${tone} stil. Beskriv detaljer og stemning, rettet mot ${malgruppe}.`;
            break;
        case "annonser":
            prompt = `Lag en ${tone} annonsetekst for "${tema}" rettet mot ${malgruppe}. Fokuser på fordeler og call-to-action.`;
            break;
        case "produktbeskrivelse":
            prompt = `Skriv en ${tone} produktbeskrivelse for "${tema}" rettet mot ${malgruppe}. Fremhev nytte, funksjoner og praktisk bruk.`;
            break;
    }

    const resultBox = document.getElementById("promptResult");
    resultBox.innerHTML = `${prompt}<br><br>`;
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.textContent = "📋 Kopier prompt";
    btn.onclick = () => {
        navigator.clipboard.writeText(prompt);
        btn.textContent = "✅ Kopiert!";
        setTimeout(() => { btn.textContent = "📋 Kopier prompt"; }, 1500);
    };
    resultBox.appendChild(btn);
    resultBox.style.display = "block";
}