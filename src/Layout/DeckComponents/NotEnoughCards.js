// import React, {useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
// import {Buttons,NavBreadCrumb} from "../SubComponents/SubComponents"
// import {DeckForm} from "../SubComponents/Forms"
// import {readDeck,readCard} from "../../utils/api/index"


function NotEnoughCards(props) {
    const { deckId } = useParams()
    const { deckLength } = props

    return (
        <div>
            <h4>Not Enough Cards.</h4>
            <p>You need at least 3 cards to study. There are {deckLength} in this deck.</p>
            <Link to={`/decks/${deckId}/cards/new`}>Add Cards</Link>
        </div>
    )
}

export default NotEnoughCards