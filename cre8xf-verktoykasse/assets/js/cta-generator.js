function generateCTA() {
    const mål = document.getElementById("mål").value;
    const tone = document.getElementById("tone").value;

    let cta = "";

    if (mål === "kjøpe et produkt") {
        if (tone === "inspirerende") cta = "Gjør drømmen din virkelig – kjøp nå!";
        else if (tone === "direkte") cta = "Bestill i dag og få produktet levert raskt.";
        else if (tone === "vennlig") cta = "Vi tror du vil like dette – sjekk det ut!";
        else if (tone === "presserende") cta = "Begrenset tilbud – kjøp før det er for sent!";
    } else if (mål === "melde seg på nyhetsbrev") {
        if (tone === "inspirerende") cta = "Hold deg oppdatert med det nyeste – meld deg på!";
        else if (tone === "direkte") cta = "Meld deg på nyhetsbrevet vårt nå.";
        else if (tone === "vennlig") cta = "Vil du høre fra oss? Abonner på nyhetsbrevet!";
        else if (tone === "presserende") cta = "Ikke gå glipp av neste nyhet – meld deg på i dag!";
    } else if (mål === "kontakte oss") {
        if (tone === "inspirerende") cta = "La oss hjelpe deg å ta neste steg – kontakt oss!";
        else if (tone === "direkte") cta = "Ta kontakt med oss nå.";
        else if (tone === "vennlig") cta = "Vi gleder oss til å høre fra deg!";
        else if (tone === "presserende") cta = "Spør oss før tilbudet forsvinner!";
    } else if (mål === "prøve gratisversjon") {
        if (tone === "inspirerende") cta = "Oppdag mulighetene – prøv gratis i dag!";
        else if (tone === "direkte") cta = "Start din gratis prøveperiode nå.";
        else if (tone === "vennlig") cta = "Test uten risiko – prøv gratisversjonen vår.";
        else if (tone === "presserende") cta = "Begrenset tid: Få gratis tilgang nå!";
    }

    document.getElementById("ctaResult").textContent = cta;
}

function copyCTA() {
    const text = document.getElementById("ctaResult").textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("CTA kopiert til utklippstavlen!");
    });
}