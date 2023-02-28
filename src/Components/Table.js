

function Table(props){
    
    let characterRows = props.characterArray.map((character)=> CreateCharacterRow(character))
    console.log(characterRows)
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
    return table
}
export default Table

function CreateCharacterRow(character){
    const row = (
        <tr>
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