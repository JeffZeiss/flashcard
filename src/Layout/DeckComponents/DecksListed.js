import React, { useState, Fragment, useEffect } from "react"
import { Link, } from "react-router-dom"
import { deleteDeck, listDecks } from "../../utils/api/index"
//list all decks for "/" path
function DecksListed(props) {
    const [allDecks, setAllDecks] = useState([])
    //   const [apiRefresh,setApiRefresh]=useState(false)
    // 
    // const {
    //   // allDecks, setAllDecks, 
    // setError, error
    // //     // deleteProp
    // }=props
    const { apiRefresh, setApiRefresh } = props
    // const abortController = new AbortController()
    // const history=useHistory()
    // getAllDecks(){
    // const findCurrentDecks = await listDecks(AbortSignal)
    useEffect(() => {


        listDecks().then(setAllDecks)
        // .catch(setError);

        // return () => abortController.abort();
    }, [apiRefresh]);

    // if (error){
    //   return null
    // }
    // }

    function deleteClick(event) {//event contains deckId

        // console.log("entered DeleteClick")
        // console.log(allDecks,"allDecks")
        // useEffect(()=>{
        event.preventDefault();//probably not necessary if not a submit button
        let ID = event.target.getAttribute("data-arg1")
        if (window.confirm("Delete this deck? You will not be able to recover it.")) {
            deleteDeck(ID)
                .then((x) => { setApiRefresh(apiRefresh + 1) })
        }
        // .then((x)=>{setApiRefresh(false)})
        //   const decksLessDelete=allDecks.filter((deck)=>deck.id!==parseInt(ID)) 
        //   console.log(decksLessDelete,"deckslessdelete")
        // setAllDecks(decksLessDelete)
        // history.push("/")})
        // this is likely not the move to do here cause the reply is an empty {}
        // .catch(setError);
        // if (error){
        //   return null
        // } //no need for an error handler. Not 100% sure why
    }
    // getAllDecks(); likely not necessary b/c useEffect of list all watching setAllDecks
    // history.push("/") // might not be necessary cause it's in api?

    // const deckLength=
    // console.log(allDecks,"allDecks prop in decklisted tested") //working
    // const [deckCardTotal,setDeckCardTotal]=useState(deckLength)
    const listedDeckCards = allDecks.map((eachDeck, index) => {
        return (
            <div key={index}>
                <h2>{`${eachDeck.name}`}</h2>
                <p>{`${eachDeck.cards ? eachDeck.cards.length : "0"} cards`}</p>
                {/* don't really need card or a clause for zero on length, as zero length is zero */}
                <br />
                <p>{eachDeck.description}</p>
                <Link to={`/decks/${eachDeck.id}`} className="btn btn-dark"
                >View</Link>
                <Link to={`/decks/${eachDeck.id}/study`} className="btn btn-dark"
                >Study</Link>
                <button onClick={deleteClick} data-arg1={eachDeck.id}>Delete</button>
            </div>)
    })

    return (
        <Fragment>
            {/* <Switch> */}

            {/* <Route> */}
            {listedDeckCards}
            {/* </Route> */}
            {/* </Switch> */}
        </Fragment>
    )
}

export default DecksListed
    // function GetAllDecks(){
    //     // const findCurrentDecks = await listDecks(AbortSignal)
    //     useEffect(() => {


    //       listDecks(abortController.signal).then(setAllDecks).catch(setError);

    //       return () => abortController.abort();
    //     }, []);

    //     if (error){
    //       return null
    //     }
    //     }