const ptag = document.getElementById('text');

// console.log(ptag);

// document.addEventListener('DOMContentLoaded', () => ptag.textContent = 'JavaScript is so cool. It lets me add text to my page programmatically.')

const beLoaded = e => {
    ptag.innerHTML = 'This is really cool'
}

document.addEventListener('DOMContentLoaded', beLoaded)