import { Nav, NavbarIcons, TopNavTab } from "./structure"

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
                <p  ref={hoverref} style={{marginTop:"10px"}}>
                    HOME 
                    {isHovering ? <span  className={styles.hover} >Home </span> : null} 
                </p>
                
                <TopNavIcons                onClick={toptoggle} />
                <FiSearch size={20}         onClick={searchbar}/>
                <HiOutlineUser size={22}    onClick={userdropdown}/>  
                <FiFlag size={22}           onClick={flagdropdown}  />
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
    return(<>
        <TopNavTab left={true}>

            <p>HOME</p>
            <p>ABOUT</p>
            <p>SERVICES</p>
            <p>CONTACT</p>
            <p>BLOG</p>
            <p>FAQ</p>
            <p>SHOP</p>


        </TopNavTab>
    
    </>)
}


// Flag drop down
export const FlagDropDown = ()=>{
    return(<>
        <TopNavTab right={true}>
            <p>English</p>
            <p>French</p>
            <p>Spanish</p>
            <p>German</p>
            <p>Italian</p>
        </TopNavTab>
    </>)
}



export const UserDropDown =()=> {
    return(<>
        <TopNavTab right={true}>
            <p>My Account</p>
            <p>My Orders</p>
            <p>My Wishlist</p>
            <p>My Cart</p>
            <p>My Address</p>
            <p>My Profile</p>
            <p>My Settings</p>
            <p>My Logout</p>
        </TopNavTab>
        
    </>)

}


export const SearchBar =()=>{
    return(<>
        <input className={styles.input} type="text" placeholder="Search"/>
    </>)
}