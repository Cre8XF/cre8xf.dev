// fordel-omformer.js

document.getElementById("fordelForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const funksjon = document.getElementById("funksjon").value.trim();
    const resultBox = document.getElementById("fordelResult");
  
    if (!funksjon) {
      resultBox.innerHTML = "<p>Skriv inn en funksjon først.</p>";
      resultBox.style.display = "block";
      return;
    }
  
    const forslag = `Denne funksjonen betyr at kunden får ${funksjon.toLowerCase()} – noe som gjør hverdagen enklere eller sparer tid/penger.`;
    resultBox.innerHTML = `<p><strong>Fordel-fokusert versjon:</strong> ${forslag}</p>`;
    resultBox.style.display = "block";
  });
  