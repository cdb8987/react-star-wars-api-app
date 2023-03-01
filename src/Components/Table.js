//update characterarray with 10 characters from swapi based on initial value

import React, {useState} from "react"

let characterArray = [
    {
        name: 'TestCharacter1',
        birthDate: 'TestBirthdate',
        height: 'TestHeight', 
        mass: 'TestMass', 
        homeworld: 'TestHomeworld', 
        species: 'TestSpecies'
    }
  ]

function Table(){
    const [characterData, setCharacterData] = useState(characterArray) 
    

    const updateCharacterData = ()=>{
        characterArray[0] = {
            name: characterArray[0].name + 'stateupdated',
            birthDate: 'TestBirthdate',
            height: 'TestHeight', 
            mass: 'TestMass', 
            homeworld: 'TestHomeworld', 
            species: 'TestSpecies'
        }
        setCharacterData(characterArray)
        console.log(characterArray.length)
        console.log(characterArray[0])
    }

    const characterRows = characterData.map((character, i)=> CreateCharacterRow(character, i))
    console.log(characterRows)
    const addCharacterButton = <button onClick={updateCharacterData}>ADD CHARACTER </button>
    const table = (
        
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">NAME</th>
                    <th scope="col">BIRTHDATE</th>
                    <th scope="col">HEIGHT</th>
                    <th scope="col">MASS</th>
                    <th scope="col">HOMEWORLD</th>
                    <th scope="col">SPECIES</th>
                </tr>
            </thead>
            <tbody>
                {characterRows}
            </tbody>
        </table>

    )
    return [addCharacterButton, table]
}
export default Table

function CreateCharacterRow(character, i){
    console.log('index is: ', i)
    const row = (
        <tr key={i}>
            <th scope="row">{character.name}</th> 
            <td>{character.birthDate}</td>
            <td>{character.height}</td>
            <td>{character.mass}</td>
            <td>{character.homeworld}</td>
            <td>{character.species}</td>
        </tr>
    )
    return row
}



function getJSON(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('CUSTOM ERROR - JSON/API Request failed')
        };
        return response.json()
      })
      .then(response => {
  
        return response
      })
      .catch(error => { console.log(`ERROR! ${error}`) })
  }
  
  
function getCharacter(url) {  //outputs object that will be added to characterArray
    let characterProfile = {}
  
    getJSON(url)
      .then((profile) => {
        characterProfile = {
            name: profile.name, 
            birthDate: profile.birth_year, 
            height: profile.height, 
            mass: profile.mass
        };
  
        getJSON(profile.homeworld)
          .then((homeworld) => {
            characterProfile['homeworld'] = homeworld.name
  
            if (profile.species[0]) {
              getJSON(profile.species)
                .then((species) => {
                  if (!species) {
                    characterProfile['species'] = 'unknown'
                    return characterProfile
                  }
                  characterProfile['species'] = species.name
                //   addTableRow(characterProfile)
                characterArray.push(characterProfile)
                console.log(characterProfile)
                })
            }
            else {
              characterProfile['species'] = 'unknown'
            //   addTableRow(characterProfile)
            characterArray.push(characterProfile)
            console.log(characterProfile)
              return characterProfile
            }
          })
      })
      .catch(err => console.log(err))
  }

  

  const RequestTenCharacters = function (startingindex) {
    
    for (let i = startingindex; i < startingindex + 10; i++) {
      getCharacter(`https://swapi.dev/api/people/${i}/`)
    }
  }
  
  RequestTenCharacters(1)
  
  
  
//   const getSearchResults = function (searchstring) {
  
//     getJSON(`https://swapi.dev/api/people/?search=${searchstring}`)
//       .then(result => {
//         console.log(result.results);
//         result.results.forEach(char => getCharacter(char.url))
//       })
//   }
//