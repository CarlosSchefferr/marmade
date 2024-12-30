const products = [
    {
        img: '/public/img//canga1.png',
        title: 'Canga Summer Breeze',
        description: 'Estampa floral vibrante e cobertura ideal para praia.',
        price: 'R$ 129,90',
        size: 'M',
        characteristics: 'Secagem rápida, tecido leve e resistente.',
        colors: ['#FF5733', '#FFC300', '#DAF7A6']
    },
    {
        img: '/public/img//canga1.png',
        title: 'Canga Blue Waves',
        description: 'Inspirada nas ondas do mar com cores frescas.',
        price: 'R$ 139,90',
        size: 'G',
        characteristics: 'Fácil de dobrar, não desbota com o sol.',
        colors: ['#5DADE2', '#2874A6', '#1B4F72']
    },
    {
        img: '/public/img//canga1.png',
        title: 'Canga Sunset Glow',
        description: 'Visual pôr do sol, perfeita para relaxar na beira da praia.',
        price: 'R$ 149,90',
        size: 'GG',
        characteristics: 'Tecido macio, acabamento reforçado e estampas duráveis.',
        colors: ['#FF5733', '#FFC300', '#DAF7A6']
    },
    {
        img: '/public/img/canga1.png',
        title: 'Canga Tropical Vibes',
        description: 'Folhagens tropicais e cores vivas para um look alegre.',
        price: 'R$ 110,90',
        size: 'M',
        characteristics: 'Leve, confortável e com alta absorção.',
        colors: ['#52BE80', '#2ECC71', '#239B56']
    },
    {
        img: '/public/img/canga1.png',
        title: 'Canga Coral Sands',
        description: 'Tons de coral e estilo minimalista para destacar o visual.',
        price: 'R$ 155,90',
        size: 'P',
        characteristics: 'Secagem rápida, fácil de transportar e não amassa.',
        colors: ['#FF5733', '#FFC300', '#DAF7A6']
    },
    {
        img: '/public/img/canga1.png',
        title: 'Canga Ocean Mist',
        description: 'Textura suave e estampa inspirada nas brisas do mar.',
        price: 'R$ 130,90',
        size: 'GG',
        characteristics: 'Tecido premium, cores duradouras e reforço nas bordas.',
        colors: ['#5DADE2', '#2874A6', '#1B4F72']
    },
    {
        img: '/public/img/canga1.png',
        title: 'Canga Floral Dream',
        description: 'Flores delicadas para um estilo romântico na praia.',
        price: 'R$ 119,90',
        size: 'P',
        characteristics: 'Antialérgico, leve de transportar, secagem ultra-rápida.',
        colors: ['#FF5733', '#FFC300', '#DAF7A6']
    },
    {
        img: '/public/img/canga1.png',
        title: 'Canga Sunny Beach',
        description: 'Tons claros e energizantes para dias de sol intenso.',
        price: 'R$ 139,90',
        size: 'M',
        characteristics: 'Toque macio, fácil de lavar e resistente à água salgada.',
        colors: ['#FF5733', '#FFC300', '#DAF7A6']
    },
    {
        img: '/public/img/canga1.png',
        title: 'Canga Palm Leaves',
        description: 'Estampa de palmeiras para um ar tropical descontraído.',
        price: 'R$ 145,90',
        size: 'G',
        characteristics: 'Tecido antideslizante, boa cobertura e bordas reforçadas.',
        colors: ['#52BE80', '#2ECC71', '#239B56']
    },
    {
        img: '/public/img/canga1.png',
        title: 'Canga Sea Shells',
        description: 'Conchas delicadas e fundo pastel para um visual suave.',
        price: 'R$ 159,90',
        size: 'GG',
        characteristics: 'Secagem rápida, resistente a rasgos e fácil de dobrar.',
        colors: ['#5DADE2', '#2874A6', '#1B4F72']
    },
    {
        img: '/public/img/canga1.png',
        title: 'Canga Tropical Sunset',
        description: 'Combina cores do pôr do sol com estampas de folhas.',
        price: 'R$ 149,90',
        size: 'G',
        characteristics: 'Tecido respirável, não retém areia e boas dimensões.',
        colors: ['#FF5733', '#FFC300', '#DAF7A6']
    },
    {
        img: '/public/img/canga1.png',
        title: 'Canga Beachy Stripes',
        description: 'Listras em cores quentes para um look descontraído.',
        price: 'R$ 120,90',
        size: 'P',
        characteristics: 'Toque macio, leve e estampas de longa duração.',
        colors: ['#FF5733', '#FFC300', '#DAF7A6']
    }
];

const productsPerPage = 6;
let currentPage = 1;

function renderProducts() {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const currentProducts = products.slice(start, end);

    currentProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card bg-white shadow-lg rounded-lg overflow-hidden animate__animated animate__fadeInRight';
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.title}" class="w-full h-56 object-cover">
            <div class="p-4">
                <h5 class="text-xl font-semibold text-blue-700">${product.title}</h5>
                <p class="text-gray-600">${product.description}</p>
                <p class="text-lg font-bold text-orange-500">${product.price}</p>
                <button class="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition" data-bs-toggle="modal" data-bs-target="#productModal${index}">Visualizar</button>
                <a href="https://wa.me/5551997540940" class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Comprar</a>
            </div>
        `;
        productContainer.appendChild(productCard);

        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.id = `productModal${index}`;
        modal.tabIndex = -1;
        modal.setAttribute('aria-labelledby', `productModalLabel${index}`);
        modal.setAttribute('aria-hidden', 'true');
        modal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content beach-theme shadow-lg rounded">
                <div class="modal-header beach-header">
                    <h5 class="modal-title text-white" id="productModalLabel${index}">
                        ${product.title}
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body beach-body">
                    <div id="carouselModal${index}" class="carousel slide mb-4" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/public/img/canga1.png" class="d-block mx-auto img-fluid rounded shadow" alt="${product.title}" style="max-height: 350px;">
                            </div>
                            <div class="carousel-item">
                                <img src="/public/img/canga1carrosel.png" class="d-block mx-auto img-fluid rounded shadow" alt="Canga Estampa 2" style="max-height: 290px;">
                            </div>
                            <div class="carousel-item">
                                <img src="/public/img/canga1carrosel2.png" class="d-block mx-auto img-fluid rounded shadow" alt="Canga Estampa 3" style="max-height: 290px;">
                            </div>
                        </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselModal${index}" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true" style="filter: invert(1);"></span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselModal${index}" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true" style="filter: invert(1);"></span>
                            </button>
                    </div>
                    <div class="text-center beach-description">
                        <p><strong>Descrição:</strong> ${product.description}</p>
                        <p><strong>Preço:</strong> <span class="text-primary fw-bold">${product.price}</span></p>
                        <p><strong>Tamanho:</strong> ${product.size}</p>
                        <p><strong>Características:</strong> ${product.characteristics}</p>
                    </div>
                    <div class="text-center mt-3">
                        <strong>Cores:</strong>
                        <div class="d-flex justify-content-center mt-2">
                            ${product.colors.map(color => `
                                <span class="color-circle" style="background-color: ${color};"></span>
                            `).join('')}
                        </div>
                    </div>
                </div>
                <div class="modal-footer justify-content-center beach-footer">
                    <button type="button" class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Fechar</button>
                    <a href="https://wa.me/5599999999999" class="btn btn-primary rounded-pill beach-buy-button">
                        Comprar Agora
                    </a>
                </div>
            </div>
        </div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .color-circle {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin: 0 5px;
            border: 1px solid #ccc;
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    });

    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = end >= products.length;
    document.getElementById('pageNumber').innerText = `Página ${currentPage}`;
}

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderProducts();
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    if ((currentPage * productsPerPage) < products.length) {
        currentPage++;
        renderProducts();
    }
});

renderProducts();
