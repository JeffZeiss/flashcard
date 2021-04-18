import React, { useState, Fragment, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { createCard, updateCard } from "../../utils/api/index"

function NewCardSubmitButtons({ setApiRefresh, deck, newOrEditCard }) {
    return (
        <Fragment>
            <Link to={(newOrEditCard === "edit?") ? "/" : `/decks/${deck.id}`} className="btn">{(newOrEditCard === "new") ? "done" : "Cancel"}</Link>
            <button type="submit">Submit</button>

        </Fragment>
    )
}
// function Buttons(){
//     return null

// }
function CardForm(props) {
    const { newOrEditCard, setApiRefresh, apiRefresh, deck,
        // mainState,deck,setCardsOfDeck,CardsOfDeck,
        // editState, setAllDecks, allDecks, setError,
        thisCard
        // ,setThisCard,url
    } = props
    // const abortController = new AbortController()
    console.log(thisCard, "this card")
    //  const editState = mainState.cardEdit
    // console.log(allDecks)
    //  console.log(deck,"deck")
    // console.log(typeof deck,"type of of deck")
    // console.log(typeof allDecks, "alldecks type")
    // console.log(allDecks,"all decks")
    const history = useHistory()
    const [editBegun, setEditBegun] = useState(false)
    const frontIf = (newOrEditCard === "edit") ? thisCard.front : ""
    const backIf = (newOrEditCard === "edit") ? thisCard.back : ""
    const [cardContent, setCardContent] = useState({ front: frontIf, back: backIf })
    useEffect(() => {
        if (newOrEditCard === "edit" && !cardContent.front && thisCard && editBegun === false)//set deck to card
        {
            setCardContent({ ...thisCard })
        }
    },[newOrEditCard,cardContent.front,thisCard,editBegun])
    //  {front:frontIf,back:backIf}
    // const[deckFormContent,setDeckFormContent]=useState({name:nameIf,description:descIf})

    const handleChangeFrontForm = ({ target }) => {
        setEditBegun(true)
        setCardContent({ ...cardContent, front: target.value })
    }
    const handleChangeBackForm = ({ target }) => {
        setEditBegun(true)
        setCardContent({ ...cardContent, back: target.value })
    }

    const createFetch = () => {
        createCard(deck.id, cardContent)
            .then((result) => {
                // console.log(result);
                // console.log(result,"api create result")
                // console.log(allDecks,"allDecks not iterable but spread? Not iterating???")
                setCardContent({ front: '', back: '' })
                setApiRefresh(apiRefresh + 1)
                // history.push("/")
            })
        // .catch((error)=>{console.log(error)})
    }
    const updateFetch = () => {
        updateCard(cardContent)
            .then((result) => {
                // console.log(result,"result from update fetch")
                // console.log(typeof allDecks,allDecks,"allDecks type and actual content")
                // setCard([...cardContent])
                // console.log(result.id,"result.id")
                setApiRefresh(apiRefresh + 1)
                history.push(`/decks/${deck.id}`)

            })
        // .catch((error)=>{console.log(error)})
    }

    // console.log("deckformfields Reached")
    // edit?console.log(deck.id,"deck ID should exist if editing "):console.log("wtf")

    const handleCardSubmit = (event) => {
        event.preventDefault();
        createFetch()
    }
    const handleCardUpdate = (event) => {
        event.preventDefault();
        updateFetch()
    }
    return (<div>
        {/* <p>testing return</p> */}
        <h2>Edit Card</h2>
        <form onSubmit={(newOrEditCard === "edit") ? handleCardUpdate : handleCardSubmit}>
            <label >Front
           <textarea
                    value={cardContent.front}
                    onChange={handleChangeFrontForm}
                    placeholder="front placeholder"
                />
            </label><br />
            <label >
                Back
           <textarea
                    value={cardContent.back}
                    onChange={handleChangeBackForm}
                    placeholder="back placeholder"
                />
            </label><br />
            <NewCardSubmitButtons newOrEditCard={newOrEditCard} setApiRefresh={setApiRefresh} deck={deck} />
        </form>
    </div>
    )
}


//     const{deck,url}=props
//     return (
//         <div>

//         </div>
//     )
// }
export default CardForm