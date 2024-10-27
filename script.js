function displayNotification() {
    const mood = document.getElementById("moodSelect").value;
    const notification = document.getElementById("notification");

    let message;
    let moodClass;

    switch (mood) {
        case "happy":
            message = "Oh no, you're happy? That's terrible! Here's a tissue 🤧";
            moodClass = "happy";
            break;
        case "sad":
            message = "You're sad? PARTY TIME! Let's dance! 💃🕺✨";
            moodClass = "sad";
            break;
        case "stressed":
            message = "Stressed? Perfect weather for a picnic! 🧺🌞";
            moodClass = "stressed";
            break;
        case "relaxed":
            message = "Relaxed?! QUICK, PANIC ABOUT EVERYTHING! 😱";
            moodClass = "relaxed";
            break;
        default:
            message = "";
            moodClass = "";
    }

    notification.textContent = message;
    notification.className = notification ;{moodClass};
    notification.classList.remove("hidden");
}

function resetNotification() {
    const notification = document.getElementById("notification");
    document.getElementById("moodSelect").value = "";
    notification.classList.add("hidden");
    notification.textContent = "";
}