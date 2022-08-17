import { Nav, NavbarIcons, NavbarTab, NavList, NavListData, TopNavTab } from "./structure"

// AiOutlineMenu
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

 import useToggle, { useToggelDropDown } from "../../Hooks/usetoggel";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FiFlag } from "react-icons/fi";

import styles from "./nav.module.css";
import { useHover } from "../../Hooks/useHover";
 
export default function Navbar() {
    const [serach, searchbar] = useToggle(false);
    const [ismenu , optionsMenu] =useToggelDropDown({initialState: false});

    const [flag , options] =useToggelDropDown({initialState: false});

    const [user , optionsUser] =useToggelDropDown({initialState: false});

    
    const [hoverref, isHovering] = useHover();

    //  at One time only one drop down will be open
    const toptoggle= ()=> {
        optionsMenu.toggle();
        options.off();
        optionsUser.off();
    }

    const flagdropdown =()=> {
        options.toggle();
        optionsMenu.off();
        optionsUser.off();

    }

    const userdropdown =()=> {
        optionsUser.toggle();
        optionsMenu.off();
        options.off();
    }

     
return(<>
        <Nav>
            <div>
            
            <img className={styles.img} src="https://evfog.com/frontend/evautomotive/images/spin-logo.png" alt="logo"/> 
            
            { ismenu ? <TopDropDown/> : null  } 
            
            { flag ?   <FlagDropDown/> : null }
            
            { user ? <UserDropDown/> : null }

            </div>
            <NavbarIcons>
                { serach ? <SearchBar/> : null }
                <p ref={hoverref} className={styles.Home}>
                    HOME
                    {isHovering ? <span className={styles.hover}>Home </span> : null} 
                </p>
                
                <TopNavIcons size={20}      onClick={toptoggle} />
                <FiSearch size={20}         onClick={searchbar}/>
                <HiOutlineUser size={20}    onClick={userdropdown}/>  
                <FiFlag size={20}           onClick={flagdropdown}  />
            </NavbarIcons>
        </Nav>
    </>)
}

export const TopNavIcons =({onClick})=>{
    const [state , toggel]    =useToggle();
   
    return(<div onClick={toggel} onClickCapture={onClick}>
    { state ?  <AiOutlineClose  size={20}/> : <AiOutlineMenu size={20} />  }
    </div>)
}

// top drop down menu
export const TopDropDown = ()=>{
    //  data for drop down menu will be in array
    const arr= [ "Home", "About", "Services", "Contact" , "Login" ];

    const [ismenu , optionsMenu] =useToggelDropDown({initialState: false});
    const [isSho , optionsSho] =useToggelDropDown({initialState: false});
    const [ismenuTwo , optionsShoTwo] =useToggelDropDown({initialState: false});
    const [category , categorySho] =useToggelDropDown({initialState: false});

    const Open =()=>{
        optionsMenu.toggle();
        optionsShoTwo.off();
    }
 
    const handTwo=()=>{
        optionsSho.toggle();
    }
    
    const OpenTwo=()=>{
        optionsShoTwo.toggle();
        optionsMenu.off();
        category.off();
    }
    const showcaterory=()=>{
        categorySho.toggle();
    }

    return(<>

        <TopNavTab left={true}>
    
    <NavbarTab onClick={showcaterory}>Main Categories</NavbarTab>
    { category ?  
    <div style={{width: "100%"}}>
    <NavbarTab  >Automotive</NavbarTab>
    <NavbarTab  >Medican</NavbarTab>
    <NavbarTab  >Garments</NavbarTab>
    <NavbarTab  >Shoes</NavbarTab>
    <NavbarTab  onClick={Open}>Food</NavbarTab>
    </div>
    : null }
    {ismenu ? 
    <NavList>
        
        <NavListData onClick={handTwo}>
            <NavbarTab>SUB AC Services </NavbarTab>
                {isSho? <div style={{width:"100%"}}>
                    <NavbarTab>Haier 310</NavbarTab>
                    <NavbarTab>AVL</NavbarTab>
                    <NavbarTab>Mahl</NavbarTab>
                    <NavbarTab>BrainBee</NavbarTab>
                </div> : null }
        </NavListData>

        <NavbarTab> Comprosser</NavbarTab>
        <NavbarTab> Diagnoises</NavbarTab>
        <NavbarTab> Electric Cable</NavbarTab>
        <NavbarTab> Gas Extraction</NavbarTab>
        <NavbarTab> Lift</NavbarTab>
        <NavbarTab> Software</NavbarTab>
        <NavbarTab> Tools</NavbarTab>
        <NavbarTab> Spray Baths</NavbarTab>
        <NavbarTab> Tyre Services</NavbarTab>

     
     </NavList> : null}


     {/* Two */}
     <NavbarTab  onClick={OpenTwo}>Contact Us</NavbarTab>
    {ismenuTwo ? 
    <NavList>
        <NavbarTab> Our Services</NavbarTab>
        <NavbarTab> News </NavbarTab>
        <NavbarTab> About Us</NavbarTab>
        <NavbarTab> Events</NavbarTab>
        <NavbarTab> Terms</NavbarTab>
        <NavbarTab> Techinical Support</NavbarTab>
        <NavbarTab> Contact Us</NavbarTab>

        {/* <NavListData onClick={handTwo}>
            <NavbarTab>Sub Drop Downs</NavbarTab>
                {isSho? <div style={{width:"100%"}}>
                    <NavbarTab>OPne</NavbarTab>
                    <NavbarTab>OPne</NavbarTab>
                    <NavbarTab>OPne</NavbarTab>
                    <NavbarTab>OPne</NavbarTab>
                </div> : null }
        </NavListData> */}
     
     </NavList> : null}  



        </TopNavTab>
    
    </>)
}


// Flag drop down
export const FlagDropDown = ()=>{

    return(<>
        <TopNavTab right={true}>
            <NavbarTab> English</NavbarTab>
            <NavbarTab> Finnish</NavbarTab>
            <NavbarTab> Spanish</NavbarTab>
            <NavbarTab> French</NavbarTab>
            <NavbarTab> German</NavbarTab>
            <NavbarTab> Italian</NavbarTab>
            <NavbarTab> Russion</NavbarTab>
            <NavbarTab> Portuguese</NavbarTab>
            <NavbarTab> Turkish</NavbarTab>
            <NavbarTab> Dutch</NavbarTab>
            <NavbarTab> Swedish</NavbarTab>
            <NavbarTab> Norwegian</NavbarTab>
            <NavbarTab> Danish</NavbarTab>
            <NavbarTab> Polish</NavbarTab>

        </TopNavTab>
    </>)
}



export const UserDropDown =()=> {
    return(<>
        <TopNavTab right={true}>
            <NavbarTab> User Login</NavbarTab>
            <NavbarTab> User Register</NavbarTab>
            <NavbarTab> Partner Login</NavbarTab>
            <NavbarTab> Partner Register</NavbarTab>
        </TopNavTab>
        
    </>)
}


export const SearchBar =()=>{
    return(<>
        <input className={styles.input} type="text" placeholder="Search"/>
    </>)
}


// dropdown on clikck
export const DropDown =({title})=>{
    const [ismenu , optionsMenu] =useToggelDropDown({initialState: false});
    const [isSho , optionsSho] =useToggelDropDown({initialState: false});
    const Open =()=>{
        optionsMenu.toggle();
    }
 
    const hand=()=>{
        optionsSho.toggle();
    }
    return(<>
    <NavbarTab  onClick={Open}>{title}</NavbarTab>
    {ismenu ? 
    <NavList>
        <NavbarTab> One</NavbarTab>
        <NavbarTab> Two</NavbarTab>
        <NavbarTab> Three</NavbarTab>
        <NavbarTab> Foure</NavbarTab>

        <NavListData onClick={hand}>
            <NavbarTab>Sub Drop Downs</NavbarTab>
                {isSho? <div style={{width:"100%"}}>
                    <NavbarTab>OPne</NavbarTab>
                    <NavbarTab>OPne</NavbarTab>
                    <NavbarTab>OPne</NavbarTab>
                    <NavbarTab>OPne</NavbarTab>
                </div> : null }
        </NavListData>
     
     </NavList> : null}
    </>)
} 
