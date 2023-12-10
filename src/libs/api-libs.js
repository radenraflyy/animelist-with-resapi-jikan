import axios from "axios"
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export const getAnimeResponses = async (resource, query) => {
  const response = await axios({
    method: "get",
    url: `${apiUrl}/${resource}`,
    params: query,
    responseType: "json",
  })
  const anime = response.data
  return anime
}

export const getNestedAnimeResponses = async (resource, objectProperty) => {
  const response = await getAnimeResponses(resource)
  return response.data.flatMap(item => item[objectProperty])
}

export const randomData = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1)
  const last = first + gap

  const response = {
    data: data.slice(first, last)
  }
  return response
}