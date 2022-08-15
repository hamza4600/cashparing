//  Main Layout of {Page}
//  It include Header and footer and also include the main content of the page

import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import styled from "styled-components";

export default function Layout({ children }) {
    return (<>
        <Navbar/>
            <Main>
                {children}
            </Main>
        <Footer/>
    </>);
}


//  Header for page details  nned to m,ake some chnags 

export const Main = styled.main`
    position: relative;
    display: flex;
    aline-items: center;
    flex-direction: column;
    // justify-content: center;
    width: 100%;
    min-height: 100vh;
    height: auto;
    background-color: white;     
    color: black;
    flex: 1;
    `;
