import fetch from 'node-fetch'

const pexelsApiKey = process.env.PEXELS_API_KEY

export default async function handler(request, response) {
	const imageNumber = Math.floor(Math.random() * 1000) + 1

	const res = await fetch(`https://api.pexels.com/v1/search?query=cat&per_page=1&page=${imageNumber}`, {
		headers: {
			Authorization: pexelsApiKey
		}
	})
	const data = await res.json()

	return response.status(200).json({
		imageUrl: `${data.photos[0].src.original}?auto=compress&cs=tinysrgb&dpr=2&h=300`,
		pexelsUrl: data.photos[0].url,
		photographer: data.photos[0].photographer,
		photographerUrl: data.photos[0].photographer_url,
	})
}
