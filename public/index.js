document.addEventListener("DOMContentLoaded", () => {
	fetch('/api/cat').then(res => res.json()).then(json => {
		const image = new Image()
		image.id = 'cat-pic'
		image.className = 'cat-pic'
		image.alt = 'an adorable cat'
		image.onload = () => {
			const [photoLink, authorLink] = document.querySelectorAll('#cat-tion a')
			photoLink.setAttribute('href', json.pexelsUrl)
			authorLink.setAttribute('href', json.photographerUrl)
			authorLink.innerText = json.photographer

			document.querySelector('.cat').classList.remove('hidden')
			document.querySelector('.loading').classList.add('hidden')
		}
		image.src = json.imageUrl

		document.querySelector('figure').prepend(image)
	})
});
