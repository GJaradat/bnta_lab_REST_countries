import { useEffect, useState } from "react";
import Country from "../components/Country";

const CountriesToVisit = (props) => {
    console.log(props.countriesToVisit);

    const countryList = props.countriesToVisit.map((country) => {
        return <Country country = {country} setCountriesToVisit = {props.setCountriesToVisit}/>
    })

    return (
        <>
            <ul id = "countriesToVisit">
                {countryList}
            </ul>
        </>
    )
}

export default CountriesToVisit;