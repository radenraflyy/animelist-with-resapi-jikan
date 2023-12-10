import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponses, getNestedAnimeResponses, randomData } from "../libs/api-libs"

export default async function Home() {
  const animeTop = await getAnimeResponses("top/anime", { limit: 8 })
  let recomendAnime = await getNestedAnimeResponses(
    "recommendations/anime",
    "entry"
  )
  recomendAnime = randomData(recomendAnime, 4)

  return (
    <>
      <section>
        <Header
          title={"Paling Populer"}
          linkTitle={"Lihat Semua"}
          linkHref={"/populer"}
        />
        <AnimeList api={animeTop} />
      </section>

      <section>
        <Header title={"Rekomendasi"} linkTitle={""} linkHref={"/populer"} />
        <AnimeList api={recomendAnime} />
      </section>
    </>
  )
}
