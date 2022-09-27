const apiKey = 'MJGhxF32v23Mjkf5mpTmBV87VJLV6FBa&q'

export default async function getGifs({keyword = 'pandas'} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=10&offset=0&rating=g&lang=en`

  const res = await fetch(apiURL)
  const response = await res.json()
  const { data } = response
  const gifs = data.map(image => image.images.downsized_medium.url)
  return gifs
  }
