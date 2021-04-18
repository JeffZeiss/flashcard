import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
// import {Buttons,NavBreadCrumb} from "../SubComponents/SubComponents"
import { DeckForm } from "../SubComponents/Forms"
import { readDeck } from "../../utils/api/index"
function EditDeck(props) {
    // const history=useHistory()
    const { apiRefresh, setApiRefresh } = props
    const { deckId } = useParams()
    const [deck, setDeck] = useState({})
    const [newOrEdit,
        // setNewOrEdit
    ] = useState("edit")
    // const abortController=new AbortController()
    useEffect(() => {
        readDeck(deckId).then(setDeck)
        // setMainState({...mainState,editState:true, deepBreadCrumb:true, page:"Edit Deck"})
    }, [deckId,apiRefresh])
    console.log(deck, "deck")
    // history.location.pathname
    // ${deck.name}
    // const {url}=useRouteMatch()
    return (
        <div>
            {/* <NavBreadCrumb deckLink={url} deck={deck} setMainState={setMainState} page={mainState.page} mainState={mainState} 
             deep={mainState.deepBreadCrumb}/>   */}
            <h5><Link to="/">Home</Link>/<Link to={`/decks/${deck.id}`}>{`${deck.name}/`}</Link>Edit Deck</h5>
            <h2>Edit Deck
                {/* {deck.name} */}
            </h2>
            {/* <DeckEditForm newOrEdit={newOrEdit} setApiRefresh={setApiRefresh} apiRefresh={apiRefresh} */}
            <DeckForm newOrEdit={newOrEdit} setApiRefresh={setApiRefresh} apiRefresh={apiRefresh}
                // editState={mainState.editState} 
                deck={deck}
            //  setAllDecks={setAllDecks} allDecks={allDecks}
            />
            {/* <Buttons 
            // setAllDecks={setAllDecks} 
            // mainState={mainState}
            /> */}
        </div>
    )
}

export default EditDeck

// function StudyDeck(props){
//     const {mainState,setAllDecks,setMainState, deck}=props
//     useEffect(()=>{
//        setMainState({...mainState,edit:true,page:"Study"})
//     },[])
//     return( 
//         <div>
//             <NavBreadCrumb pageState={mainState.page}/>            
//             <DeckForm editState={mainState.edit} deck={deck}/>
//             <Buttons setAllDecks={setAllDecks} mainState={mainState}/>
//         </div>
//     )
// }