import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import CardForm from "./CardForm"
import { readDeck } from "../../utils/api/index"

function AddCards(props) {
    // const{url,mainState,cardsOfDeck,setCardsOfDeck}=props
    const { deckId } = useParams()
    // const history=useHistory()
    const [deck, setDeck] = useState([])
    const [newOrEditCard,
        // setNewOrEditCard
    ] = useState("new")
    const { apiRefresh, setApiRefresh } = props
    useEffect(() => {

        readDeck(deckId, AbortController.signal).then(setDeck)

        //    setMainState({...mainState,editState:true,page:"Study"})
    }, [])

    return (
        <div>
            <h5><Link to="/">Home</Link>/<Link to={`/decks/${deck.id}/`}>{deck.name}</Link>/Add Card</h5>
            <h2>{`${deck.name}:Add Card`}</h2>
            <CardForm setApiRefresh={setApiRefresh} apiRefresh={apiRefresh} newOrEditCard={newOrEditCard} deck={deck}
            // url={url} 
            // cardsOfDeck={cardsOfDeck} 
            // setCardsOfDeck={setCardsOfDeck} 
            // mainState={mainState}
            />
        </div>
    )
}
export default AddCards