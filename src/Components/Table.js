//takes an array of 10 character objects passed in as a prop.  Returns jsx table element

function Table(props){
  const rows = []
  for(let i=0; i<props.characterArray.length; i++){
    // console.log('at index', i, ' characterarray is', JSON.stringify(props.characterArray))
    // console.log('props.characterArray[i].name =:', props.characterArray[i].name)
    
    const row = <tr key={i}>
      <th scope="row">{props.characterArray[i].name}</th> 
      <td>{props.characterArray[i].birthDate}</td>
      <td>{props.characterArray[i].height}</td>
      <td>{props.characterArray[i].mass}</td>
      <td>{props.characterArray[i].homeworld}</td>
      <td>{props.characterArray[i].species}</td>
    </tr>
    rows.push(row)
  }
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
                {rows}
            </tbody>
        </table>
    )
    return table
}

export default Table






  //

  
  
  
  


























//    
  
//   function getJSON(url) {
//     return fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('CUSTOM ERROR - JSON/API Request failed')
//         };
//         return response.json()
//       })
//       .then(response => {
  
//         return response
//       })
//       .catch(error => { console.log(`ERROR! ${error}`) })
//   }
  
  
// function getCharacter(url, i) {  //modifies a given character and updates its state 
//   let characterProfile = {}
    
//     getJSON(url)
//       .then((profile) => {
//         characterProfile = {
//             name: profile.name, 
//             birthDate: profile.birth_year, 
//             height: profile.height, 
//             mass: profile.mass
//         };
  
//         getJSON(profile.homeworld)
//           .then((homeworld) => {
//             characterProfile['homeworld'] = homeworld.name
  
//             if (profile.species[0]) {
//               getJSON(profile.species)
//                 .then((species) => {
//                   if (!species) {
//                     characterProfile['species'] = 'unknown'
//                     // console.log('Line55 returned: ', characterProfile )
//                     // return characterProfile
//                   }
//                   characterProfile['species'] = species.name
//                   // setCharacterData(characterProfile)
//                   // console.log('Line60 returned: ', characterProfile )
                  
//                     // return characterProfile
                
                
//                 })
//             }
//             else {
//               characterProfile['species'] = 'unknown'

//               // return characterProfile
//             }
//           })
//       })
//       .catch(err => console.log(err))
//   }

//   const RequestTenCharacters = function (startingindex=0) {

//     for (let i = startingindex; i < startingindex + 10; i++) {
//       getCharacter(`https://swapi.dev/api/people/${i+1}/`, i)

//     }
//   }
  

  
  

//   function CreateCharacterRow(character, i){
//     const row = (
//         <tr key={i}>
//             <th scope="row">{character.name}</th> 
//             <td>{character.birthDate}</td>
//             <td>{character.height}</td>
//             <td>{character.mass}</td>
//             <td>{character.homeworld}</td>
//             <td>{character.species}</td>
//         </tr>
//     )
//     return row
// }
// let characterRows = characterData.map(i => CreateCharacterRow(i)) 
// for(let i=0; i< 10; i++){
// CreateCharacterRow(characterData)
// }