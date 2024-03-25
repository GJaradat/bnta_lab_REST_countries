import { useState } from "react";

const Country = (props) => {

    // Toggle event to move country between lists
    const [isVisited, setIsVisited] = useState(false);

    const ToggleEvent = async () => {

        // Move from bucket list to visited 
        if (!isVisited) {
            await props.setVisitedCountries([...props.visitedCountries, props.country]);
            await props.setCountriesToVisit(props.countriesToVisit.filter((country) => country !== props.country));
        }
        // Move from visited to bucket list
        if (isVisited) {
            await props.setCountriesToVisit([...props.countriesToVisit, props.country]);
            await props.setVisitedCountries(props.visitedCountries.filter((country) => country !== props.country));
        }
        // Change state on toggle
        setIsVisited(!isVisited);
    }

    return (
        <>
            <li>{props.country.name.common}</li>
            <button onClick = {ToggleEvent}>Move From List</button>
        </>
    )
}


export default Country;