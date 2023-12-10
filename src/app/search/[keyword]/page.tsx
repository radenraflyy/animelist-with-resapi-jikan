import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponses } from "../../../libs/api-libs"

export default async function Page({ params }) {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponses("anime", {q: decodedKeyword})
  
  return (
    <div>
      <Header
        title={`Pencarian Untuk ${decodedKeyword}...`}
        linkTitle={"Lihat Semua"}
        linkHref={"/populer"}
      />
      <AnimeList api={searchAnime} />
    </div>
  )
}
