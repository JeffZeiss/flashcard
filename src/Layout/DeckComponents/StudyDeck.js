import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// import {Buttons,NavBreadCrumb} from "../SubComponents/SubComponents"
// import {DeckForm} from "../SubComponents/Forms"
import { readDeck, readCard } from "../../utils/api/index"
import StudyTop from "./StudyTop"
import NotEnoughCards from "./NotEnoughCards"
import StudyByCard from "./StudyByCard"
function StudyDeck(props) {
    const { deckId } = useParams()
    const [deck, setDeck] = useState({ cards: [] })
    // const {mainState,setAllDecks,setMainState
    const [cardOfDeck, setCardOfDeck] = useState(0)
    const [card, setCard] = useState({})


    // , deck,url
    const { setApiRefresh, apiRefresh } = props
    // const abortController = new AbortController()
    const deckLength = deck.cards.length
    useEffect(() => {

        readDeck(deckId).then(setDeck)


        //    setMainState({...mainState,editState:true,page:"Study"})
    }, [apiRefresh, deckId])
    useEffect(() => {
        console.log(deck)
        if (deck.cards.length > 0) {
            console.log("deck cards have loaded")
            console.log("card of deck id", deck.cards[cardOfDeck])
            readCard(deck.cards[cardOfDeck].id).then((id) => { console.log(id); setCard(id) })
        }
    }
        , [deck, cardOfDeck])
    // console.log(deck,"deck in studydeck")
    if (deckLength > 2) return (<div>
        <StudyTop setApiRefresh={setApiRefresh} />
        <StudyByCard cardOfDeck={cardOfDeck} setCardOfDeck={setCardOfDeck} card={card} deck={deck} deckLength={deckLength} />
    </div>
    )
    return (<div>
        <StudyTop setApiRefresh={setApiRefresh} />
        <NotEnoughCards deckId={deckId} deckLength={deckLength} />
    </div>)
}

export default StudyDeck