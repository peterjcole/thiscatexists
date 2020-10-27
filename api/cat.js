const fetch = require('node-fetch')

const pexelsApiKey = process.env.PEXELS_API_KEY

module.exports = (req, res) => {
    const imageNumber = Math.floor(Math.random() * 1000) + 1

    fetch(`https://api.pexels.com/v1/search?query=cat&per_page=1&page=${imageNumber}`, {
        headers: {
            Authorization: pexelsApiKey
        }
    })
        .then(res => res.json())
        .then(json => res.json({
            ...json.photos[0],
            imageUrl: `${json.photos[0].src.original}?auto=compress&cs=tinysrgb&dpr=2&h=300`,
        }))
}
