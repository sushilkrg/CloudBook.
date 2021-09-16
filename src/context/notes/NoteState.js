import noteContext from "./noteContext";
import react, { useState } from "react";

const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "613b38abf3939941099799f9",
          "user": "613b03c1553bc98a4667bd6a",
          "title": "mytitle",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-10T10:51:23.921Z",
          "__v": 0
        },
        {
          "_id": "613b38abf3939941099799f9",
          "user": "613b03c1553bc98a4667bd6a",
          "title": "mytitle",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-10T10:51:23.921Z",
          "__v": 0
        },
        {
          "_id": "613b38abf3939941099799f9",
          "user": "613b03c1553bc98a4667bd6a",
          "title": "mytitle",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-10T10:51:23.921Z",
          "__v": 0
        },
        {
          "_id": "613b38abf3939941099799f9",
          "user": "613b03c1553bc98a4667bd6a",
          "title": "mytitle",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-10T10:51:23.921Z",
          "__v": 0
        },
        {
          "_id": "613b38abf3939941099799f9",
          "user": "613b03c1553bc98a4667bd6a",
          "title": "mytitle",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-10T10:51:23.921Z",
          "__v": 0
        },
        {
          "_id": "613b38abf3939941099799f9",
          "user": "613b03c1553bc98a4667bd6a",
          "title": "mytitle",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-10T10:51:23.921Z",
          "__v": 0
        },
        {
          "_id": "613b38abf3939941099799f9",
          "user": "613b03c1553bc98a4667bd6a",
          "title": "mytitle",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-10T10:51:23.921Z",
          "__v": 0
        },
        {
          "_id": "613b38abf3939941099799f9",
          "user": "613b03c1553bc98a4667bd6a",
          "title": "mytitle",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-10T10:51:23.921Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

   return(
        <noteContext.Provider value = {{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;