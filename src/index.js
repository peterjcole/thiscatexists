require('normalize.css/normalize.css')
require('./styles/index.scss')

document.addEventListener("DOMContentLoaded", () => {
    fetch('/api/cat').then(res => res.json()).then(json => {
        const catPic = document.getElementById('cat-pic')
        catPic.src = json.imageUrl
        catPic.style.visibility = 'visible'

        const [photoLink, authorLink] = document.querySelectorAll('#cat-tion a')
        photoLink.setAttribute('href', json.pexelsUrl)
        authorLink.setAttribute('href', json.photographerUrl)
        authorLink.innerText = json.photographer
        document.getElementById('cat-tion').classList.remove('hidden')
    })
});
