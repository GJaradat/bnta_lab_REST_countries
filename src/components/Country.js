const Country = (props) => {

    return (
        <>
            <li>{props.country.name.common}
                <button onClick = {ToggleEvent}>Remove</button>
            </li>
        </>
    )
}


export default Country;