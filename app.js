// Enregistrement service worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
        .then(() => console.log("SW OK"));
}

// logique app
function runApp() {
    document.getElementById("status").innerText = "Application lancée ✅";

    // Exemple appel API
    fetch("https://api.publicapis.org/entries")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(() => {
            document.getElementById("status").innerText = "Mode offline ⚠️";
        });
}