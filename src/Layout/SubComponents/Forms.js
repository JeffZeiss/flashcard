import React from "react"
// import {Link} from "react-router-dom"
import { Buttons, DeckFormFields, CardFormFields } from "./SubComponents"

function DeckForm({ newOrEdit,
    // ,setAllDecks, setError, 
    setDeck, deck, apiRefresh, setApiRefresh,
    //  page, mainState
    // deckId
}) {


    return (
        <div>
            <DeckFormFields
                // editState={editState} mainState={mainState} setAllDecks={setAllDecks} setError={setError} 
                setDeck={setDeck} deck={deck} apiRefresh={apiRefresh} setApiRefresh={setApiRefresh} newOrEdit={newOrEdit}
            // deckId={deckId}
            />
            <Buttons />
        </div>
    )
}

function CardForm({ apiRefresh, setApiRefresh, setDeck, newOrEdit,
    // editState,allDecks,setAllDecks, setError,
    deck }) {
    return (
        <div>
            <CardFormFields
                //  editState={editState} setAllDecks={setAllDecks}
                apiRefresh={apiRefresh} setApiRefresh={setApiRefresh}
                setDeck={setDeck} newOrEdit={newOrEdit}
                // setError={setError} 
                deck={deck}
            // deckId={deckId}
            />
            <Buttons />
        </div>
    )

}

export { DeckForm, CardForm }

//use <DeckForm editState={mainState.edit}/>
//use <CardForm editState={mainState.edit}/>