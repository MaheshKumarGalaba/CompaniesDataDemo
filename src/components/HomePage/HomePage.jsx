import { useEffect } from "react";
import HeaderContent from "./HeaderContent";
import MainContent from "./MainContent";
import FooterContent from "./FooterContent";
import FilterContainer from "./FilterContent";


const HomePage = (props) => {

    const config = props.config;


    useEffect(() => {

    }, [])


    return (
        <>
            <HeaderContent></HeaderContent>
            <FilterContainer config={config}></FilterContainer>
            <MainContent config={config}></MainContent>
            <FooterContent></FooterContent>
        </>
    )

}

export default HomePage;