import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import {Buttons,NavBreadCrumb} from "../SubComponents/SubComponents"
import { DeckForm } from "../SubComponents/Forms"
// import {NewDeckSubmitButtons} from "../SubComponents/SubComponents"//Not necessary, placed in form component

function CreateNew(props) {
    // const{mainState,setMainState,allDecks,setAllDecks,error,setError}=props
    const { apiRefresh, setApiRefresh
        // mainState,setAllDecks,setMainState
    } = props
    const [newOrEdit, setNewOrEdit] = useState("new")
    const [deck, setDeck] = useState([])
    // const highestDeck=allDecks.map

    useEffect(() => {
        // console.log(mainState,"mainstate");
        setNewOrEdit("new")
        // (()=>({...mainState, create:true, editState:false, page:"Create Deck"}))
        // console.log(mainState,"mainState")
    }, [
        // mainState.editState
    ])
    // const createTempDeck = {}
    // console.log(mainState,"mainState outside update useEffect")
    return (
        <div>
            {/* <NavBreadCrumb page={mainState.page}  mainState={mainState} 
            setMainState={setMainState} deck={createTempDeck}/>             */}
            <h5><Link to="/">Home</Link>/ Create Deck</h5>
            <h3>
                {/* {mainState.page} */}
                Create Deck
            </h3>
            <DeckForm
                // editState={mainState.editState} setAllDecks={setAllDecks} allDecks={allDecks} setError={setError} mainState={mainState}
                newOrEdit={newOrEdit} deck={deck} apiRefresh={apiRefresh} setApiRefresh={setApiRefresh} setDeck={setDeck}
            />
            {/* <NewDeckSubmitButtons/> */}
            {/* <Buttons setAllDecks={setAllDecks} mainState={mainState}/> */}
        </div>
    )
}

export default CreateNew
// setProp((prevState) => ({ ...prevState, stopped: true }));