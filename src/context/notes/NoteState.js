import noteContext from "./noteContext";
import react, { useState } from "react";

const NoteState = (props) => {

    const s1 = {
        "name": "Sushil",
        "class": "8a"
    }

    const [state, setState] = useState(s1);
    const update = ()=> {
        setTimeout(() => {
            setState({
                "name": "SK",
                 "class": "8b"
            })
        }, 1000);
    }

    return(
        <noteContext.Provider value = {{state, update}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;