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
                <p ref={hoverref} style={{marginTop:"1px"}}>
                    HOME
                    {isHovering ? <span className={styles.hover}>Home </span> : null} 
                </p>
                
                <TopNavIcons size={20}              onClick={toptoggle} />
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

    const Open =()=>{
        optionsMenu.toggle();
        optionsShoTwo.off();

    }
 
    const hand=()=>{
        optionsSho.toggle();
    }
    
    const handTwo=()=>{
        optionsShoTwo.toggle();
        optionsMenu.off();
    }
    return(<>
        <TopNavTab left={true}>


    <NavbarTab  onClick={Open}>One Data</NavbarTab>
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

     {/* Two */}
     <NavbarTab  onClick={Open}>Two Data</NavbarTab>
    {ismenuTwo ? 
    <NavList>
        <NavbarTab> One</NavbarTab>
        <NavbarTab> Two</NavbarTab>
        <NavbarTab> Three</NavbarTab>
        <NavbarTab> Foure</NavbarTab>

        <NavListData onClick={handTwo}>
            <NavbarTab>Sub Drop Downs</NavbarTab>
                {isSho? <div style={{width:"100%"}}>
                    <NavbarTab>OPne</NavbarTab>
                    <NavbarTab>OPne</NavbarTab>
                    <NavbarTab>OPne</NavbarTab>
                    <NavbarTab>OPne</NavbarTab>
                </div> : null }
        </NavListData>
     
     </NavList> : null}  



        </TopNavTab>
    
    </>)
}


// Flag drop down
export const FlagDropDown = ()=>{
    return(<>
        <TopNavTab right={true}>
            <NavbarTab> English</NavbarTab>
            <NavbarTab> English</NavbarTab>
            <NavbarTab> French</NavbarTab>
            <NavbarTab> Spanish</NavbarTab>
            <NavbarTab> German</NavbarTab>
            <NavbarTab> Italian</NavbarTab>
            <NavbarTab> Italian</NavbarTab>
            <NavbarTab> Italian</NavbarTab>
            <NavbarTab> Italian</NavbarTab>
            <NavbarTab> Italian</NavbarTab>

        </TopNavTab>
    </>)
}



export const UserDropDown =()=> {
    return(<>
        <TopNavTab right={true}>
            <NavbarTab> My Account</NavbarTab>
            <NavbarTab> My Orders</NavbarTab>
            <NavbarTab> My Wishlist</NavbarTab>
            <NavbarTab> My Cart</NavbarTab>
            <NavbarTab> My Address</NavbarTab>
            <NavbarTab> My Profile</NavbarTab>
            <NavbarTab> My Settings</NavbarTab>
            <NavbarTab> My Logout</NavbarTab>
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
