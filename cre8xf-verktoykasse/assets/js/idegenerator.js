document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("ideaForm");
    const behovInput = document.getElementById("behov");
    const resultBox = document.getElementById("ideaResult");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const behov = behovInput.value.trim();
  
      if (behov === "") {
        resultBox.textContent = "Skriv inn hva du trenger en idé til.";
        resultBox.style.display = "block";
        return;
      }
  
      const forslag = genererIde(behov);
      resultBox.textContent = forslag;
      resultBox.style.display = "block";
    });
  
    function genererIde(behov) {
      const ideer = [
        `Lag en konkurranse på sosiale medier relatert til "${behov}".`,
        `Skriv en bloggpost om de vanligste feilene folk gjør innen "${behov}".`,
        `Lag en videoserie med tips knyttet til "${behov}".`,
        `Bruk storytelling for å vise hvordan "${behov}" kan gjøre hverdagen enklere.`,
        `Lag en visuell guide som forklarer "${behov}" på en enkel måte.`,
      ];
  
      const tilfeldig = Math.floor(Math.random() * ideer.length);
      return ideer[tilfeldig];
    }
  });
  