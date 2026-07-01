
import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(['dragon ball z'])
  const handleTermCliked = (term: string) => {
    console.log({ term })
  }
  return (
    <>
      {/* header */}
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

      {/* buscador */}
      <SearchBar placeholder="Busca lo que quieras" />

      {/* búsquedas previas */}
      <PreviousSearches searches={previousTerms} onLabelClicked={handleTermCliked} />

      {/* gifs */}
      <GifList gifs={mockGifs} />
    </>
  )
}
