
require('normalize.css/normalize.css');
require('./styles/index.scss');

document.addEventListener("DOMContentLoaded", () => {
    fetch('/api/cat').then(res => res.json()).then(json => handleCat(json))
});

function handleCat(json) {
    Window.cat = json
    const catPic = document.getElementById('cat-pic')
    catPic.src = json.imageUrl
    catPic.style.visibility = 'visible'
    document.getElementById('cat-caption').innerHTML = buildCaption(json)
}

function buildCaption(json) {
    return `<a href="${json.pexelsUrl}">Photo</a> by <a href="${json.photographerUrl}">${json.photographer}</a> on Pexels`
}
