import logo from './logo.svg';
import './App.css';
import Table from './Components/Table';
import CharacterSearch from './Components/CharacterSearch'
import MyHeader from './Components/MyHeader'
import {useState} from 'react';

function App() {
  
  let characterArray = [
    {name: 'test',
    birthDate: 'test',
    height: 'test',
    mass: 'test',
    homeworld: 'test', 
    species: 'test'  
  },
    {name: 'test',
    birthDate: 'test',
    height: 'test',
    mass: 'test',
    homeworld: 'test', 
    species: 'test'  
  },
    {name: 'test',
    birthDate: 'test',
    height: 'test',
    mass: 'test',
    homeworld: 'test', 
    species: 'test'  
    }]
    
  const [propsArray, setPropsArray] = useState(characterArray)

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
  
  
function getCharacter(url, i, limit) {  //1. gets character from api 2. pushes to characterArray at index i 3. triggers setPropsArray when limit reached.
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
                    characterArray.push(characterProfile)
                    
                    if(characterArray.length === limit){setPropsArray(characterArray)}
                    
                  }
                  characterProfile['species'] = species.name
                  characterArray.push(characterProfile)
              
                  if(characterArray.length === limit){setPropsArray(characterArray)}
                })
            }
            else {
              characterProfile['species'] = 'unknown'
              characterArray.push(characterProfile)
            
              if(characterArray.length === limit){setPropsArray(characterArray)}
            }
          })
      })
      .catch((err) => {console.log(err); characterArray.push({name: '', birthDate: '', height: '', mass: '', species: '', homeworld: ''});if(characterArray.length === 10){setPropsArray(characterArray)} 
        })
  }

  const RequestTenCharacters = function (startingindex=0) {
    characterArray = []
    for (let i = startingindex; i < startingindex + 10; i++) {
      getCharacter(`https://swapi.dev/api/people/${i+1}/`, i, 10)
    }
    return ''
  }
    
  const getSearchResults = function (searchstring) {
    characterArray = []
    getJSON(`https://swapi.dev/api/people/?search=${searchstring}`)
      .then(result => {
        result.results.forEach((char) => {getCharacter(char.url, 0, result.results.length)})
      })
  }
  
  const pageChangeButtons = (
        
      <div id='SearchResultsPageNavBar' style={{backgroundColor: 'lightgray' }}>
          <button onClick={()=>RequestTenCharacters()}className="btn btn-primary">1</button><button onClick={()=>RequestTenCharacters(10)}className="btn btn-primary">2</button><button onClick={()=>RequestTenCharacters(20)}className="btn btn-primary">3</button><button onClick={()=>RequestTenCharacters(30)}className="btn btn-primary">4</button><button onClick={()=>RequestTenCharacters(40)}className="btn btn-primary">5</button><button onClick={()=>RequestTenCharacters(50)}className="btn btn-primary">6</button><button onClick={()=>RequestTenCharacters(60)}className="btn btn-primary">7</button><button onClick={()=>RequestTenCharacters(70)}className="btn btn-primary">8</button><button onClick={()=>RequestTenCharacters(80)}className="btn btn-primary">9</button>
      </div>
  )

  return (
    <>
    <MyHeader />
    <CharacterSearch getSearchResults={getSearchResults}/>
    <Table characterArray={propsArray}/>
    <div>{pageChangeButtons}</div>
    </>
  );
}
export default App;






  
  

 