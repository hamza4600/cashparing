import styled from "styled-components";


export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 50px;
    background-color: black;
    color: white;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0;
        border-bottom: none;
    }
`;

// left Side navbar Icons Need to be Palced in the left side of the navbar
export const NavbarIcons = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 12em;

    //  apply css on all childern 
    > * {
        cursor: pointer;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
    }
    `;


// Nav icon drop down   props for left and right side of the navbar if drop down is from left side it should slide from left side and if it is from right side it should slide from right side
export const TopNavTab = styled.div`
    flex-grow: 1;  
    display: flex;
    align-items: flex-start;
    flex: auto;
    overflow: auto;
    width: 240px;
    height: 100vh;
    margin-top: 2px;
    background-color: #10355a;    
    color: black;
    position: absolute;
    left : ${props => props.left ? "0" : ""};
    right : ${props => props.right ? "0" : ""};
    opacity: 0.89;
    z-index: 100;
    animation: ${ props => props.right ? "slider" : "topdown " } 0.2s ease-in-out;
    flex-direction: column;
    color: white;

    @keyframes topdown {
    0% {
        overflow: hidden;
        width: 200px;
        height: 0vh;
        left: 0;
        }
    30% {
        overflow: hidden;
        width: 200px;
        height: 30vh;
        left: 0;
        }            
    40% {
        overflow: hidden;
        width: 200px;
        height: 60vh;
        left: 0;
    }
    100% {
        overflow: hidden;
        width: 200px;
        height: 100vh;
        left: 0;
        }
    }

    @keyframes slider {
        0% {
            overflow: hidden;
            width: 200px;
            height: 100vh;
            right:0px;
            
            }
        30% {
            overflow: hidden;
            width: 200px;
            height: 100vh;
            right:0px;
            }            
        40% {
            overflow: hidden;
            width: 200px;
            height: 100vh;  
            right:0px;  
        }
        100% {
            overflow: hidden;
            width: 200px;
            height: 100vh;
            right:0px;
            }
        }

    ;
    @media (max-width: 768px) {
        display: none;
    }       
`;    


export const NavbarTab = styled.div`
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    cursor: pointer;
    padding-left: 5em;
    
    :hover {
        background-color: black;
        color: #00FFFF;
    }
    :active {
        background-color: slategrey;
        color: black;
    }
    
    @media (max-width: 768px) {
    }
    `;


export const NavList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: auto;
    }
    `;      

export const NavListData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: auto;
    
    `;
