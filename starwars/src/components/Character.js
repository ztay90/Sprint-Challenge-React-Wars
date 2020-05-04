import React, { useState, useEffect} from "react";
import axios from "axios";
import CharacterContainer from "./CharacterContainer";

const Character = () => {

  const[data, setData] = useState([])

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then( response => {
        setData(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      {data.map(character => {
        return(
          <CharacterContainer
            name = {character.name}
            species = {character.species}
            image = {character.image}
          />
        )
        
      })}
    </div>
  )
}

export default Character