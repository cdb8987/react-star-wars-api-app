

function Table(props){
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
                <InsertTableRows characters = {props.characterArray}/>
            </tbody>
        </table>
    )
    return table
}
export default Table


function InsertTableRows(props){
    
    const characters = props.characters

    let tableRows = []
    for(let i =0; i < characters.length; i++){
        const row = (
            <tr>
                <th scope="row">{characters[i].name}</th> 
                <td>{characters[i].birthDate}</td>
                <td>{characters[i].height}</td>
                <td>{characters[i].mass}</td>
                <td>{characters[i].homeworld}</td>
                <td>{characters[i].species}</td>
            </tr>
        )
        tableRows.push(row)
    }
    return tableRows
}