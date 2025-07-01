// overskrift-generator.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("title-form");
    const result = document.getElementById("result");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const topic = document.getElementById("title-topic").value.trim();
      const style = document.getElementById("title-style").value.trim();
  
      if (!topic || !style) {
        result.textContent = "Fyll inn både emne og stil.";
        return;
      }
  
      // Eksempel på generert overskrift
      const titles = [
        `🎯 ${style} tittel: Hvordan ${topic} kan forvandle hverdagen din`,
        `🔥 5 måter ${topic} gir deg ${style} resultater`,
        `💡 Den ultimate guiden til ${topic} – ${style} og effektivt`,
        `📢 ${style} overskrift: Oppdag kraften i ${topic} i dag`,
        `✅ Hvorfor ${topic} er nøkkelen til ${style} suksess`,
        `✨ ${style}-vinkling: ${topic} gjort enkelt`,
        `🚀 Slik lykkes du med ${topic} på en ${style} måte`,
      ];
  
      const randomIndex = Math.floor(Math.random() * titles.length);
      result.textContent = titles[randomIndex];
    });
  });
  