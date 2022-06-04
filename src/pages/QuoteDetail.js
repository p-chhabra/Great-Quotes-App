import { Route, useParams } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const QuoteDetail = () => {
    const DUMMY_QUOTES = [
        {id: "q1", author: 'Mangu', text: "Gotta live the Thug Life!"},
        {id: "q2", author: 'Bandook Baba', text: "Chori di Bandook fadi gayi ni"},
        {id: "q3", author: 'Alex Morgan', text: "Go in quite mode for 6 months, all your life problems will disappear"},
        {id: "q4", author: 'Joker', text: "Stop overthinking, 99% of your problems are just in your mind"}
    ]
    const quote = DUMMY_QUOTES.find((quote)=>{
        return quote.id = params.quoteID;
    })
    const params = useParams();
    return (
        <Fragment>
    <HighlightedQuote author={quote.author} text={quote.text}/>
    <p>{params.quotesID}</p>
    <Route path={`/quotes/${params.quotesID}/comments`}>
        <Comments/>
    </Route>
    </Fragment>)
}

export default QuoteDetail;