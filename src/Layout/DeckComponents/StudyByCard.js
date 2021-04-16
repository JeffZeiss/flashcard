import React, { useState } from "react"
import { useHistory } from "react-router-dom"

function StudyByCard(props) {
    const { cardOfDeck, deckLength, setCardOfDeck, card = {} } = props
    // cardOfDeck={cardOfDeck} setCardOfDeck={setCardOfDeck} card={card} deck={deck}
    // const {deckId}=useParams()
    // const    abortController=new AbortController()
    const [flipped, setFlipped] = useState(false)
    const [fOrB, setFOrB] = useState(true)
    // const [deck, setDeck]=useState({})
    // const {mainState,setAllDecks,setMainState
    // const [cardOfDeck,setCardOfDeck]=useState(1)
    // const[card,setCard]=useState({})

    const history = useHistory()
    // , deck,url
    // const{setApiRefresh,apiRefresh}=props
    // const abortController=new AbortController()
    // const deckLength=deck.cards.length
    // useEffect(()=>{

    //     readDeck(deckId,AbortController.signal).then(setDeck)
    // const [frontContent,setFrontContent]=useState({})
    // const [backContent,setBackContent]=useState({})
    function nextHandler() {
        if (cardOfDeck + 1 !== deckLength) {
            setFlipped(false)
            setFOrB(true)
            setCardOfDeck(cardOfDeck + 1)
        }
        else {
            finalCardHandler()
        }
    }
    function flipHandler() {
        if (flipped === false) { setFlipped(true) }
        setFOrB(!fOrB)
    }
    function finalCardHandler() {
        if (window.confirm("Restart cards? Click 'cancel to return to the home page.")) {
            setCardOfDeck(0);
            setFlipped(false)
        }
        else {
            history.push("/")
        }
    }

    // useEffect(()=>{
    //     if(Object.keys(frontContent).length===0||!frontContent){
    //         setFrontContent(card.front)
    //     }
    // },[card])
    // useEffect(()=>{
    //     if(Object.keys(backContent||!frontContent).length===0){
    //         setBackContent(card.back)
    //     }
    // },[card])
    // useEffect(()=>{
    //         setFrontContent(card.front)
    // },[card])
    // useEffect(()=>{
    //         setBackContent(card.back)
    // },[card])

    // console.log(frontContent)
    // //    setMainState({...mainState,editState:true,page:"Study"})
    // },[apiRefresh,deckId])
    // useEffect(()=>{
    // readCard(cardOfDeck,abortController.signal).then(setCard)},[cardOfDeck]
    // )
    // console.log(deck,"deck in studydeck")
    // if (Object.keys(card).length!==0){
    if (fOrB === true) return (<div>
        <p>{`Card ${cardOfDeck + 1} of ${deckLength}`}</p>
        <p>{
            // frontContent
            card.front
        }</p>
        <button type="button" onClick={flipHandler}>Flip</button>
        {cardOfDeck + 1 !== deckLength ? (
            flipped === true ? <button type="button" onClick={nextHandler}>Next</button> : null
        ) : null}

    </div>
    )
    return (<div>
        <p>{`Card ${cardOfDeck + 1} of ${deckLength}`}</p>
        <p>{
            // backContent
            card.back
        }</p>
        <button type="button" onClick={flipHandler}>Flip</button>
        <button type="button" onClick={nextHandler}>Next</button>
    </div>)
    // }else{return (<p>...loading</p>)}
}

export default StudyByCard