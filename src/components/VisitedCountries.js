import { useEffect, useState } from "react";
import Country from "./Country";

const VisitedCountries = (props) => {
    
    const countryList = props.visitedCountries.map((country) => {
        return <Country country = {country} key = {country.name.common}
        countriesToVisit = {props.countriesToVisit} setCountriesToVisit = {props.setCountriesToVisit}
        visitedCountries = {props.visitedCountries} setVisitedCountries = {props.setVisitedCountries}/>
    })

    return (
            <>
                <ul id = "visitedCountries">
                <h2>Visited Countries</h2>
                    {countryList}
                </ul>
            </>
    )
}

export default VisitedCountries;