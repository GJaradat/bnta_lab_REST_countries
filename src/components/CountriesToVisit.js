import { useEffect, useState } from "react";
import Country from "./Country";

const CountriesToVisit = (props) => {

    const countryList = props.countriesToVisit.map((country) => {
        return <Country country = {country} key = {country.name.common}
        countriesToVisit = {props.countriesToVisit} setCountriesToVisit = {props.setCountriesToVisit}
        visitedCountries = {props.visitedCountries} setVisitedCountries = {props.setVisitedCountries}/>
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