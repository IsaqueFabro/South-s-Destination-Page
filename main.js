let currentCard;
let currentImages = [];
let currentIndex = 0;

function expandCard(card) {
    // Pegar informações do card clicado
    currentCard = card;
    let title = card.querySelector("h2").innerText;
    let description = card.querySelector("p").innerText;
    let price = card.querySelector(".price").innerText;

    // Definir imagens do slider (você pode adicionar mais imagens)
    if (title.includes("Maldivas")) {
        currentImages = ["imgs/maldivas1.jpg", "imgs/maldivas2.jpg", "imgs/maldivas3.jpg"];
    } else if (title.includes("Paris")) {
        currentImages = ["imgs/paris1.jpg", "imgs/paris2.jpg", "imgs/paris3.jpg"];
    } else if (title.includes("Nova York")) {
        currentImages = ["imgs/ny1.jpg", "imgs/ny2.jpg", "imgs/ny3.jpg"];
    }

    currentIndex = 0;

    // Atualizar o card expandido
    document.getElementById("expanded-img").src = currentImages[currentIndex];
    document.getElementById("expanded-title").innerText = title;
    document.getElementById("expanded-description").innerText = description;
    document.getElementById("expanded-price").innerText = price;

    // Mostrar card expandido e overlay
    document.getElementById("expanded-card").style.transform = "translate(-50%, -50%) scale(1)";
    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("overlay").style.opacity = "1";
}

function closeCard() {
    document.getElementById("expanded-card").style.transform = "translate(-50%, -50%) scale(0)";
    document.getElementById("overlay").style.visibility = "hidden";
    document.getElementById("overlay").style.opacity = "0";
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        document.getElementById("expanded-img").src = currentImages[currentIndex];
    }
}

function nextImage() {
    if (currentIndex < currentImages.length - 1) {
        currentIndex++;
        document.getElementById("expanded-img").src = currentImages[currentIndex];
    }
}