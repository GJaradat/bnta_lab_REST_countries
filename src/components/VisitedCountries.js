import { useEffect, useState } from "react";
import Country from "./Country";

const VisitedCountries = (props) => {
    
    const countryList = props.visitedCountries.map((country) => {
        return <Country country = {country}/>
    })
    return (
            <>
                <ul id = "visitedCountries">
                    {countryList}
                </ul>
            </>
    )
}