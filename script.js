const snapshotBtn = document.getElementById("snapshotBtn");
const snapshotBox = document.getElementById("snapshotBox");

const snapshots = [
  {
    title: "Snapshot ultime 24h",
    text: "Hai speso €84,50 nelle ultime 24 ore. La categoria più pesante è Food, con €42,00. Giornata sotto controllo, ma il food sta pesando più del solito."
  },
  {
    title: "Redeem Moment",
    text: "Oggi hai avuto 12 movimenti. Entrate: €300,00. Uscite: €84,50. Bilancio netto: +€215,50. BB$ ti suggerisce di controllare le micro-spese nei prossimi giorni."
  },
  {
    title: "Weekly Awareness",
    text: "Negli ultimi 7 giorni hai speso soprattutto in Auto, Food e Abbonamenti. La spesa ricorrente più evidente è Netflix. La prossima evoluzione sarà impostare soglie personalizzate."
  }
];

function generateSnapshot() {
  const randomIndex = Math.floor(Math.random() * snapshots.length);
  const snapshot = snapshots[randomIndex];

  snapshotBox.classList.remove("hidden");

  snapshotBox.innerHTML = `
    <strong>${snapshot.title}</strong>
    <p>${snapshot.text}</p>
  `;
}

snapshotBtn.addEventListener("click", generateSnapshot);
