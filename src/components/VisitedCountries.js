import { useEffect, useState } from "react";
import Country from "./Country";

const VisitedCountries = (props) => {
    
    const countryList = props.visitedCountries.map((country) => {
        return <Country country = {country}
        countriesToVisit = {props.countriesToVisit} setCountriesToVisit = {props.setCountriesToVisit}
        visitedCountries = {props.visitedCountries} setVisitedCountries = {props.setVisitedCountries}/>
    })
    
    return (
            <>
                <ul id = "visitedCountries">
                    {countryList}
                </ul>
            </>
    )
}

export default VisitedCountries;