import React, { useState, Fragment } from "react";
import Header from "./Header";
import { Route, Switch, Link } from "react-router-dom";
import NotFound from "./NotFound";
import CreateNew from "../Layout/DeckComponents/CreateNew"
import DecksListed from "../Layout/DeckComponents/DecksListed"
import ViewDeck from "../Layout/DeckComponents/ViewDeck"
// import React, { useState, Fragment, useEffect } from "react"
// import { Switch, Route, Link, useParams, useRouteMatch, useHistory} from "react-router-dom"
// import { Buttons, NavBreadCrumb } from "../SubComponents/SubComponents"
// import { readDeck, deleteDeck, deleteCard } from "../../utils/api/index"
// import { DeckForm } from "../SubComponents/Forms"
// import {useParams} from "react-router-dom"
import EditDeck from "../Layout/DeckComponents/EditDeck"
import StudyDeck from "../Layout/DeckComponents/StudyDeck"
import CardEdit from "../Layout/CardComponents/CardEdit"
import AddCards from "../Layout/CardComponents/AddCards"

// import {listDecks} from "../utils/api"
// import {Link} from "react-router-dom"

// import from "./CardComponents"

//import the full list of decks

function Layout() {
  // console.log(listDecks)
  const [apiRefresh, setApiRefresh] = useState(1)

  //way to list all decks
  // const [allDecks,setAllDecks] =useState([]) 
  // let defaultMainState = {
  //   page:"Home",
  //   editState: false,
  //   deepBreadCrumb: false,
  //   cardEdit: false,
  //   create:false

  // }
  // const [update, setUpdate]=useState(false)
  // const [mainState, setMainState]=useState({...defaultMainState})
  //way to know current deck you're using/focused on
  // const [currentDeckId,setCurrentDeckId] =useState('')
  //current card to focus on
  // const [currentCardId,setCurrentCardId] =useState('')
  // const [error,setError] =useState(undefined)
  // const abortController = new AbortController
  // const abortController = new AbortController();

  // console.log(allDecks)

  // function DeleteClick (deckId){       ***Moved to Deckslisted directly
  //   // const history=useHistory()
  //   console.log("entered DeleteClick")
  //   console.log(allDecks,"allDecks")
  //   useEffect(()=>{
  //     deleteDeck(deckId,abortController.signal)
  //     .then((x)=>{setAllDecks(x);console.log(x)}) 
  //     // this is likely not the move to do here cause the reply is an empty {}
  //     .catch(setError);
  //     return ()=> abortController.abort()
  //   },[]
  //   )
  //   if (error){
  //     return null
  //   }
  //   // getAllDecks(); likely not necessary b/c useEffect of list all watching setAllDecks
  //   // history.push("/") // might not be necessary cause it's in api?
  // }
  // GetAllDecks();
  // return(<p>hello world</p>)
  return (
    <Fragment>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            {/*switch the above to a Link locally on home*/}
            <Link to="/decks/new"
            //  onClick={()=>setMainState({...mainState,create:true})}
            >Create Deck</Link>
            <DecksListed
              // allDecks={allDecks} 
              // setAllDecks={setAllDecks} 
              // setError={setError} 
              // error={error}
              // setMainState={setMainState}
              // mainState={mainState} 
              // mainState={mainState} 
              // setMainState={setMainState}
              // deleteProp={DeleteClick} **moved to deckslisted
              apiRefresh={apiRefresh} setApiRefresh={setApiRefresh}
            />
          </Route>
          <Route path="/decks/new">{/*must constrain new so it isn't construed as a deckId param */}
            <CreateNew
              apiRefresh={apiRefresh} setApiRefresh={setApiRefresh}
            // allDecks={allDecks} 
            // setAllDecks={setAllDecks} 
            // setError={setError} 
            // error={error}
            // mainState={mainState} 
            // setMainState={setMainState}
            />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCards
              apiRefresh={apiRefresh} setApiRefresh={setApiRefresh}
            // mainState={mainState}
            // setAllDecks={setAllDecks}
            // setMainState={setMainState}
            // {/* deck={deck} */}
            // {/* url={url} */}
            // {/* cardsOfDeck={cardsOfDeck}  */}
            // setCardsOfDeck={setCardsOfDeck} 
            />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck
              apiRefresh={apiRefresh} setApiRefresh={setApiRefresh}
            // mainState={mainState}
            // setAllDecks={setAllDecks}
            // setMainState={setMainState}
            // deck={deck}
            // allDecks={allDecks}
            // url={url}
            />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyDeck
              apiRefresh={apiRefresh} setApiRefresh={setApiRefresh}
            // mainState={mainState}
            // setAllDecks={setAllDecks}
            // setMainState={setMainState}
            // deck={deck}
            // url={url}
            // cardsOfDeck={cardsOfDeck} 
            // setCardsOfDeck={setCardsOfDeck} 
            />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit
              apiRefresh={apiRefresh} setApiRefresh={setApiRefresh}
            // mainState={mainState}
            // setAllDecks={setAllDecks}
            // setMainState={setMainState}
            // deck={deck}
            // url={url}
            // cardsOfDeck={cardsOfDeck} 
            // setCardsOfDeck={setCardsOfDeck} 
            />
          </Route>
          <Route exact path="/decks/:deckId">
            <ViewDeck
              apiRefresh={apiRefresh} setApiRefresh={setApiRefresh}
            // allDecks={allDecks} 
            // setAllDecks={setAllDecks} 
            // setError={setError} 
            // error={error}
            // mainState={mainState} 
            // setMainState={setMainState}
            />
          </Route>
          <Route >
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default Layout;
