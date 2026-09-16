import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors({ origin: process.env.CLIENT_URL }))
app.use(express.json())

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'Leela Sewing Academy API is running.' })
})

app.post('/api/stream-token', (req, res) => {
  const { videoId, userEmail } = req.body
  if (!videoId || !userEmail) {
    return res.status(400).json({ error: 'Missing videoId or userEmail' })
  }

  const expires = Math.floor(Date.now() / 1000) + 3600
  const signature = Buffer.from(`${process.env.BUNNY_LIBRARY_ID}${process.env.BUNNY_STREAM_API_KEY}${expires}${videoId}`).toString('hex')

  res.json({
    url: `https://${process.env.BUNNY_CDN_HOST}/${videoId}/play.html?token=${signature}&expires=${expires}&user=${Buffer.from(userEmail).toString('base64')}`,
  })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
