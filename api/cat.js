const fetch = require('node-fetch')

const pexelsApiKey = process.env.PEXELS_API_KEY

module.exports = (req, res) => {
    res.json({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
    })
}
