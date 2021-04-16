import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { createDeck, updateDeck } from "../../utils/api/index"

function NavBreadCrumb({ page, deckLink, deck, deep }) {//can likely leave this untouched... might have to delete extraneous
    console.log(page)
    console.log(deep)
    const undeep = () => {
        // useEffect(()=>{
        // setMainState({...mainState, deepBreadCrumb:false, page:deck.name})
        // },[])
    }
    return (
        <h5><Link to="/">Home/</Link>{deep && <Link to={deckLink} onClick={undeep}>{deck ? `${deck.name}/` : null}</Link>}{page}</h5>
    )
}
const abortController = new AbortController()
function Buttons() {
    return null
}
function NewDeckSubmitButtons(props) {
    const { newOrEdit, deck } = props;
    return (<div>
        <Link to={(newOrEdit === "new") ? "/" : `/decks/${deck.id}`} className="btn">Cancel</Link>
        <button type="submit">Submit</button>
    </div>
    )
}
function DeckFormFields(props
    // deckId
) {
    // const[deck,setDeck]=useState({})
    const { newOrEdit, apiRefresh, setApiRefresh, deck
        // editState, mainState, setAllDecks, allDecks, setError,
    } = props
    // console.log(allDecks)
    console.log(typeof (deck), "type of of deck")
    // console.log(typeof allDecks, "alldecks type")
    // console.log(allDecks,"all decks")
    // const{deckId}=useParams()
    console.log(newOrEdit, "neworeditState")
    const history = useHistory()
    //     useEffect(()=>{
    //         readDeck(deckId,AbortController.signal).then(setDeck)

    // },[])

    console.log(deck, "deck")//=>gives correct deck object with content
    const x = (newOrEdit === "edit") ? deck.name : ""
    const y = (newOrEdit === "edit") ? deck.description : ""
    console.log(x, "name", y, "desc")//=> gives both x and y correctly as deck.name and deck.description
    // const z={name:x,description:y} //=>prints name:correct name, description:correct description
    // console.log(z,"z insert of default object")
    //useState initiates state
    const [deckFormContent, setDeckFormContent] = useState({ name: x, description: y })
    //check
    useEffect(() => {
        if (newOrEdit === "edit" && !deckFormContent.name && deck.name) {
            setDeckFormContent({ name: deck.name, description: deck.description })
        }
    })


    console.log(deckFormContent, "deckFormContent")//=>Prints name:undefined, description:undefined


    // console.log(deckFormContent,"deckFormContent") //=>gives {name: undefined, description: undefined}
    // console.log(x,"nameIf checking on far side of failure")asdfa
    // console.log(editState,"editState")
    const handleChangeTitleForm = ({ target }) => {
        setDeckFormContent({ ...deckFormContent, name: target.value })
        console.log("handlechangecalled")
    }
    const handleChangeDescForm = ({ target }) => {
        console.log("loghandlechangecalled")
        setDeckFormContent({ ...deckFormContent, description: target.value })
    }

    const createFetch = () => {
        createDeck({ ...deckFormContent }, abortController.signal)
            .then((result) => {
                // console.log(result);
                // console.log(result,"api create result")
                // console.log(allDecks,"allDecks not iterable but spread? Not iterating???")
                // setAllDecks([...allDecks,result])
                setApiRefresh(apiRefresh + 1)
                history.push(`/decks/${result.id}`)
            })
        // .catch((error)=>{console.log(error)})
    }
    const updateFetch = () => {
        updateDeck({ ...deckFormContent, id: deck.id }, abortController.signal)
            .then((result) => {
                // console.log(result,"result from update fetch")
                // console.log(typeof allDecks,allDecks,"allDecks type and actual content")
                // setAllDecks([...allDecks])
                // console.log(result.id,"result.id")
                setApiRefresh(apiRefresh + 1)
                history.push(`/decks/${result.id}`)

            })
        // .catch((error)=>{console.log(error)})
    }

    // console.log("deckformfields Reached")
    // edit?console.log(deck.id,"deck ID should exist if editing "):console.log("wtf")

    const handleSubmit = (event) => {
        event.preventDefault();
        createFetch()
    }
    const handleUpdate = (event) => {
        event.preventDefault();
        updateFetch()
    }
    return (<form onSubmit={(newOrEdit === "edit") ? handleUpdate : handleSubmit}>
        <label >Name
       <textarea
                defaultValue={deckFormContent.name}
                onChange={handleChangeTitleForm}
                placeholder="Deck Name"
            />
        </label><br />
        <label >
            Description
       <textarea
                defaultValue={deckFormContent.description}
                onChange={handleChangeDescForm}
                placeholder="Brief description of the deck"
            />
        </label><br />
        <NewDeckSubmitButtons newOrEdit={newOrEdit} deck={deck} />
    </form>
    )
}

function CardFormFields() {
    return null
}

export { NavBreadCrumb, DeckFormFields, Buttons, CardFormFields, NewDeckSubmitButtons }