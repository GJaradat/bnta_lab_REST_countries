import { useEffect, useState } from "react";
import CountryForm from "../components/CountryForm";
import CountriesToVisit from "../components/CountriesToVisit";
import VisitedCountries from "../components/VisitedCountries";

const BucketListContainer = () => {
    
    const [countries, setCountries] = useState([]);
    const [countriesToVisit, setCountriesToVisit] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        .catch(error => console.error(error));

        const data = await response.json();
        setCountries(data);
    }

    // Get API data when page loads
    useEffect(() => {
        fetchCountries();
    } , []);

    return (
        <section id = "bucketListContainer">
            <CountryForm countries={countries} countriesToVisit={countriesToVisit} 
                            setCountriesToVisit={setCountriesToVisit}/>
            <CountriesToVisit countriesToVisit={countriesToVisit} visitedCountries={visitedCountries}
                            setCountriesToVisit={setCountriesToVisit} setVisitedCountries={setVisitedCountries}/>
            <VisitedCountries visitedCountries={visitedCountries} countriesToVisit={countriesToVisit} 
                            setCountriesToVisit={setCountriesToVisit} setVisitedCountries={setVisitedCountries}/>
        </section>
    )
}

export default BucketListContainer;