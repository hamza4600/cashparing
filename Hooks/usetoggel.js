//  use toggel to change the state of the switch

import { useState } from "react";

//  use toggel to change the state of the switch

export default function useToggle(initialState = false) {

    const [state, setState] = useState(initialState);
    const toggle = () => setState(!state);
    return [state, toggle];
    
}

// custome Toggel  for drop down

export const useToggelDropDown = ({initialState = false }) => {
    const [state, setState] = useState(initialState);

    const toggle = () => setState(!state);
    const options = {
        on: () => setState(true),
        off: () => setState(false),
        toggle: toggle,
    }

    return [state, options];
}

 