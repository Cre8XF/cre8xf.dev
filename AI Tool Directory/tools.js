// Eksempeldatasett hentes nå fra ekstern fil
let tools = [];

fetch("ai.json")
  .then(res => res.json())
  .then(data => {
    tools = data;
    renderTools();
  });

// DOM-elementer
const toolList = document.getElementById("toolList");
const template = document.getElementById("toolCard");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const pricingFilter = document.getElementById("pricingFilter");
const compareView = document.getElementById("compareView");
const compareSection = document.getElementById("compareSection");
const newsFeed = document.getElementById("newsFeed");

let compareSet = [];

function renderTools() {
  toolList.innerHTML = "";

  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const pricing = pricingFilter.value;

  const filtered = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(search);
    const matchesCategory = category === "" || tool.category === category;
    const matchesPricing = pricing === "" || tool.pricing === pricing;
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const uniqueCategories = [...new Set(tools.map(t => t.category))];
  categoryFilter.innerHTML = '<option value="">Alle kategorier</option>' +
    uniqueCategories.map(c => `<option value="${c}">${c}</option>`).join("");

  filtered.forEach(tool => {
    const card = template.content.cloneNode(true);
    card.querySelector("a").textContent = tool.name;
    card.querySelector("a").href = tool.url;
    card.querySelector(".description").textContent = tool.description;
    card.querySelector(".free").textContent = tool.freeFeatures.join(", ") || "-";
    card.querySelector(".paid").textContent = tool.paidFeatures.join(", ") || "-";
    const reviews = card.querySelector(".reviewList");
    tool.reviews.forEach(r => {
      const li = document.createElement("li");
      li.textContent = r;
      reviews.appendChild(li);
    });

    card.querySelector(".compareBtn").addEventListener("click", () => {
      addToCompare(tool);
    });

    toolList.appendChild(card);
  });
}

function addToCompare(tool) {
  if (compareSet.find(t => t.name === tool.name)) return;
  compareSet.push(tool);
  updateCompare();
}

function updateCompare() {
  if (compareSet.length === 0) {
    compareSection.classList.add("hidden");
    return;
  }
  compareSection.classList.remove("hidden");
  compareView.innerHTML = "";

  compareSet.forEach(tool => {
    const div = document.createElement("div");
    div.className = "compare-card";
    div.innerHTML = `
      <h3><a href="${tool.url}" target="_blank">${tool.name}</a></h3>
      <p><strong>Kategori:</strong> ${tool.category}</p>
      <p><strong>Gratis:</strong> ${tool.freeFeatures.join(", ") || "-"}</p>
      <p><strong>Betalt:</strong> ${tool.paidFeatures.join(", ") || "-"}</p>
    `;
    compareView.appendChild(div);
  });
}

searchInput.addEventListener("input", renderTools);
categoryFilter.addEventListener("change", renderTools);
pricingFilter.addEventListener("change", renderTools);

// Last inn nyheter
fetch("news.json")
  .then(res => res.json())
  .then(news => {
    newsFeed.innerHTML = "";
    news.forEach(n => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${n.url}" target="_blank">${n.title}</a> <small>(${n.source} – ${n.date})</small>`;
      newsFeed.appendChild(li);
    });
  });
