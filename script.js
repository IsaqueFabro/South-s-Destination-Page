// Função para expandir o card
function expandCard(card) {
    // Obter as informações do card
    const destination = card.querySelector('h2').textContent.trim();
    const description = card.querySelector('p').textContent.trim();
    const price = card.querySelector('.price').textContent.trim();
    const imgSrc = card.querySelector('img').src;

    // Obter a descrição personalizada do card
    const additionalInfo = card.dataset.description;

    // Atualizar o conteúdo no modal
    const modalInfo = document.getElementById('modal-info');
    modalInfo.innerHTML = `
        <img src="${imgSrc}" alt="${destination}">
        <h2>${destination}</h2>
        <p>${description}</p>
        <span class="price">${price}</span>
        <p><strong>Mais informações:</strong><br> ${additionalInfo}</p>
    `;

    // Exibir o modal
    document.getElementById('modal').style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fechar o modal ao clicar no "X"
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('close').addEventListener('click', closeModal);

    // Fechar o modal ao clicar fora do conteúdo (dentro do modal)
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('modal')) {
            closeModal();
        }
    });
});
