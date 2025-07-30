async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        document.getElementById('quote').textContent = `"${data.content}"`;
        document.getElementById('author').textContent = `– ${data.author}`;
    } catch (error) {
        document.getElementById('quote').textContent = 'Could not fetch quote.';
        console.error("Error fetching quote:", error);
    }
}

fetchQuote();

const images = [
    '/Final/imgs/image1.png',
    '/Final/imgs/image2.png',
    '/Final/imgs/image3.png'
];

let index = 0;

function showNextImage() {
    index = (index + 1) % images.length;
    document.getElementById('slideshow-image').src = images[index];
}

setInterval(showNextImage, 3000);
