document.getElementById("tekstForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const input = document.getElementById("originalTekst").value.trim();
    const resultat = document.getElementById("tekstResultat");
  
    if (!input) {
      alert("Skriv inn en tekst først.");
      return;
    }
  
    // Enkel tekstforbedring – erstatt med smartere logikk hvis ønskelig
    const forbedret = input
      .replace(/\ber\b/g, "er virkelig")
      .replace(/\bgod\b/g, "utmerket")
      .replace(/\bdårlig\b/g, "mindre heldig")
      .replace(/\bok\b/g, "helt grei")
      .replace(/\bveldig\b/g, "svært");
  
    resultat.style.display = "block";
    resultat.textContent = forbedret;
  });
  