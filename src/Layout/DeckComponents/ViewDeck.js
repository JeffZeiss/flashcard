import React, { useState, useEffect } from "react"
import { Link, useParams, useHistory } from "react-router-dom"
// import {  NavBreadCrumb } from "../SubComponents/SubComponents"
import { readDeck, deleteDeck, deleteCard } from "../../utils/api/index"
// import { DeckForm } from "../SubComponents/Forms"
// import {useParams} from "react-router-dom"
// import EditDeck from "./EditDeck"
// import StudyDeck from "./StudyDeck"

// import AddCards from "../CardComponents/AddCards"
// import CardEdit from "../CardComponents/CardEdit"

function ViewDeck(props) {
    const { apiRefresh, setApiRefresh
        //  setMainState, mainState, setAllDecks, allDecks
    } = props
    const [deck, setDeck] = useState({ name: "no deck", cards: [] })

    // const {url} = useRouteMatch()
    const history = useHistory()
    // const abortController = new AbortController()

    const { deckId } = useParams()//Do your fetching with this
    useEffect(() => {
        readDeck(deckId).then((deck) => {
            setDeck(deck)
        })

    }, [apiRefresh,deckId])


    // const cardTotal = deck.cards.length;

    function CardList(props) {
        // const { deckProp } = props

        return (<div>{
            deck.cards.map((card = [], index) => {
                return (<div key={index}>
                    <p>{card.front}</p>
                    <p>{card.back}</p>
                    <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}>Edit</Link>
                    <button type="button" onClick={deleteCardClick} data-Arg1={card.id}>Delete</button>
                    {/* <CardButton/> */}
                </div>)
                // return (
                //     <Fragment>
                //         {}
                //     </Fragment>
                // )
            })}</div>)
    }
    const deleteClick = (ID) => {
        if (window.confirm("Delete this deck? You will not be able to recover it."))
            deleteDeck(ID)
                .then((x) => {
                    // const decksLessDelete = allDecks.filter((deck) => deck.id !== parseInt(ID))
                    // console.log(decksLessDelete, "deckslessdelete")
                    // setAllDecks(decksLessDelete)
                    // setApiRefresh(!apiRefresh)
                    history.push("/")

                })
        // this is likely not the move to do here cause the reply is an empty {}
        // .catch(setError);


        // if (error) {
        //     return null
        // }
    }
    const deleteCardClick = (event) => {
        const cardId = event.target.getAttribute("data-arg1")
        if (window.confirm("Delete this card? You will not be able to recover it."))
            deleteCard(cardId)
                .then((x) => {
                    // const deckCardDeleted = deck.cards.filter((card)=>card.id!==cardId)
                    setApiRefresh(apiRefresh + 1)
                })
    }

    // if (cardTotal >= 3) {
    return (
        <div>
            {/* <Switch> */}
            {/* <Route exact path={`${url}/`}> */}
            {/* <NavBreadCrumb page={mainState.page} deck={blankVar} deep={mainState.deepBreadCrumb} mainState={mainState} 
            setMainState={setMainState}/> */}
            <h5><Link to="/">Home</Link>
                {`/${deck.name}`}</h5>
            <h2>{deck.name}</h2>
            <p>{deck.description}</p>
            <Link to={`/decks/${deckId}/edit`} className="btn">Edit</Link>
            <Link to={`/decks/${deckId}/study`} className="btn">Study</Link>
            <Link to={`/decks/${deckId}/cards/new`} className="btn">Add Cards</Link>
            <button type="button" onClick={() => deleteClick(deck.id)}>Delete</button>
            <h2>Cards</h2>
            <CardList />
            {/* <DeckForm editState={mainState.edit}/> */}
            {/* <Buttons setAllDecks={setAllDecks} mainState={mainState} buttons={buttons} /> */}
            {/* </Route> */}

            {/* </Switch> */}
        </div>
    )
    // }
    // return(null)


}

export default ViewDeck