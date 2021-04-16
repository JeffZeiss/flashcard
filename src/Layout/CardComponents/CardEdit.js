import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import CardForm from "./CardForm"
import { readDeck, readCard } from "../../utils/api/index"


function CardEdit(props) {
    const { cardId, deckId } = useParams()
    const abortController = new AbortController()
    const { apiRefresh, setApiRefresh
        // url,
        // mainState
    } = props
    const [newOrEditCard,
        // setNewOrEditCard
    ] = useState("edit")
    const [thisCard, setThisCard] = useState({})
    const [deck, setDeck] = useState({})
    // const { deckId } = useParams()//Do your fetching with this
    useEffect(() => {
        readDeck(deckId, abortController.signal).then((deck) => {
            setDeck(deck)
            readCard(cardId, abortController.signal).then(setThisCard)
        })

    }, [apiRefresh])

    //get the actual card with a fetch via cardId and place it into thisCard?

    return (
        <div>
            <h5><Link to="/">Home</Link>/<Link to={`/decks/${deck.id}`}>{`${deck.name}`}</Link>{`/Edit Card ${cardId}`}</h5>

            <CardForm
                //  url={url} 
                deck={deck}
                newOrEditCard={newOrEditCard}
                apiRefresh={apiRefresh}
                setApiRefresh={setApiRefresh}
                //  mainState={mainState} 
                thisCard={thisCard}
            // setThisCard={setThisCard}
            />
        </div>
    )
}
export default CardEdit