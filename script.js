document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("countdown");
    const envelope = document.querySelector(".envelope");
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const buttonContainer = document.getElementById("buttons-container");
    let isLetterUnlocked = false;

    // Contador hasta la fecha objetivo
    function updateCountdown() {
        const targetDate = new Date("2025-02-07T00:00:00").getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            countdownElement.innerHTML = "¡La carta ha llegado!";
            buttonContainer.style.display = "block";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `Nueva carta en: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateCountdown, 1000);

    // Desbloquear la carta al presionar "Sí"
    yesButton.addEventListener("click", () => {
        isLetterUnlocked = true;
        countdownElement.innerText = "¡Ya puedes abrir tu carta!";
        buttonContainer.style.display = "none";
    });

    // Mostrar mensaje de rechazo al presionar "No"
    noButton.addEventListener("click", () => {
        countdownElement.innerText = "La carta permanecerá cerrada.";
    });

    // Permitir apertura de la carta solo si está desbloqueada
    envelope.addEventListener("click", () => {
        if (!isLetterUnlocked) {
            alert("Debes desbloquear la carta primero.");
            return;
        }
        envelope.classList.add("open"); // Animación de apertura
        countdownElement.innerText = "¡Disfruta de tu carta!";
    });
    
});
