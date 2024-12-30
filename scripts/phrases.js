const phrases = [
    "Na Marmade, somos apaixonados pelo mar e pela praia.",
    "Queremos trazer um pedacinho do mar para o seu dia a dia.",
    "Nossas cangas são feitas para que você possa se sentir mais perto da natureza.",
    "Descubra a beleza e a qualidade das nossas cangas, feitas com amor e inspiração no oceano.",
    "Cada canga da Marmade é uma obra de arte, criada para trazer conforto e estilo para você.",
    "Sinta a brisa do mar com nossas cangas exclusivas, perfeitas para qualquer ocasião."
];
let currentPhraseIndex = 0;
const aboutTextElement = document.getElementById('aboutText');
const aboutContainer = document.getElementById('aboutContainer');

setInterval(() => {
    aboutContainer.classList.add('animate__fadeOutLeft');
    setTimeout(() => {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        aboutTextElement.innerHTML = phrases[currentPhraseIndex].replace(/\n/g, '<br>');
        aboutContainer.classList.remove('animate__fadeOutLeft');
        aboutContainer.classList.add('animate__fadeInRight');
    }, 1000);
}, 5000);