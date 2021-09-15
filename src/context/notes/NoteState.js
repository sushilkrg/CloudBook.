import noteContext from "./noteContext";
import react, { useState } from "react";

const NoteState = (props) => {

   return(
        <noteContext.Provider value = {{}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;