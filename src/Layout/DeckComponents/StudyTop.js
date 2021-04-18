import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
// import {Buttons,NavBreadCrumb} from "../SubComponents/SubComponents"
// import {DeckForm} from "../SubComponents/Forms"
import { readDeck } from "../../utils/api/index"

function StudyTop(props) {
    const { deckId } = useParams()
    const [deck, setDeck] = useState({})
    // const {mainState,setAllDecks,setMainState
    // const [cardOfDeck,setCardOfDeck]=useState(1)

    // , deck,url
    const {
        // setApiRefresh,
        apiRefresh } = props
    // const abortController=new AbortController()
    useEffect(() => {

        readDeck(deckId).then(setDeck)

        //    setMainState({...mainState,editState:true,page:"Study"})
    }, [apiRefresh, deckId])
    // console.log(deck,"deck in studydeck")
    return (
        <div>
            {/* <NavBreadCrumb pageState={mainState.page}/>      */}
            <h5><Link to="/">Home/</Link><Link to={
                `/decks/${deck.id}`
            }>{`${deck.name}/`}</Link>Study</h5>
            <h2>{deck.name}: Study</h2>
            {/* <DeckForm editState={mainState.editState} deck={deck}/> */}


            {/* <Buttons setAllDecks={setAllDecks} mainState={mainState}/> */}
        </div>
    )
}
export default StudyTop