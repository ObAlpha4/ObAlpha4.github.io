function showImage() {
    const imageContainer = document.getElementById("imageContainer");
    const countdownElement = document.getElementById("countdown");
    let countdown = 721; // 0d000721

    imageContainer.style.display = "block";

    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = `图片将在 ${countdown} 秒后消失`;

        if (countdown <= 0) {
            clearInterval(interval);
            imageContainer.style.display = "none";
        }
    }, 1000);
}

function closeImage() {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.style.display = "none";
}
