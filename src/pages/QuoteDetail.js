import { Route, useParams } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import BackButton from "../components/UI/BackButton";

const DUMMY_QUOTES = [
    {id: "q1", author: 'Mangu', text: "Gotta live the Thug Life!"},
    {id: "q2", author: 'Bandook Baba', text: "Chori di Bandook fadi gayi ni"},
    {id: "q3", author: 'Alex Morgan', text: "Go in quite mode for 6 months, all your life problems will disappear"},
    {id: "q4", author: 'Joker', text: "Stop overthinking, 99% of your problems are just in your mind"}
]

const QuoteDetail = () => {
    const params = useParams();
    const quoteHiglighted = DUMMY_QUOTES.find(quote => quote.id === params.quotesID)
    if(!quoteHiglighted){
        return <p>No quote found!</p>
    }
    return (
    <Fragment>
    <BackButton title = '⬅️' path='/quotes'/>
    <HighlightedQuote text={quoteHiglighted.text} author={quoteHiglighted.author}></HighlightedQuote>
    <Route path={`/quotes/${params.quotesID}/comments`}>
        <Comments/>
    </Route>
    </Fragment>)
}

export default QuoteDetail;