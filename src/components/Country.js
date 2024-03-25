import { useState } from "react";

const Country = (props) => {

    const [isVisited, setIsVisited] = useState(false);
    const [seeMoreInfo, setSeeMoreInfo] = useState("none");

    // Toggle event to move country between lists
    const ToggleEventVisit = async (event) => {
        event.preventDefault();
        // Move from bucket list to visited 
        if (!isVisited) {
            await props.setVisitedCountries([...props.visitedCountries, props.country]);
            await props.setCountriesToVisit(props.countriesToVisit.filter((country) => country !== props.country));
        }
        // Move from visited to bucket list
        else {
            await props.setCountriesToVisit([...props.countriesToVisit, props.country]);
            await props.setVisitedCountries(props.visitedCountries.filter((country) => country !== props.country));
        }
        // Change state on toggle
        setIsVisited(!isVisited);
    }

    // Toggle event to see more info
    const ToggleEventMore = (event) => {
        event.preventDefault();

        if (seeMoreInfo === "none") {
            setSeeMoreInfo("block");
        } else {
            setSeeMoreInfo("none");
        }
    }


    // TODO: Change button innerHTML based on list
    return (
        <>
        <div className = "country">
            <img src = {props.country.flags.png} alt = {props.country.name.common}/>
            <li>{props.country.name.common}</li>
            <button onClick = {ToggleEventMore}>Learn More</button>
            <button onClick = {ToggleEventVisit}>Visit!🚩</button>
        </div>
        <div style = {{display: seeMoreInfo}}>
            <ul>
                <li>Capital: {props.country.capital}</li>
                <li>Population: {props.country.population}</li>
                <li>Currency: {props.country.currencies[Object.keys(props.country.currencies)].name}</li>
            </ul>
        </div>
        </>
    )
}


export default Country;