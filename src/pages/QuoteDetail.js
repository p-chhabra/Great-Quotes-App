import { Route, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import BackButton from "../components/UI/BackButton";

const QuoteDetail = (props) => {
    const params = useParams();
    const quoteHiglighted = props.quotes.find(quote => quote.id === params.quotesID)
    if(!quoteHiglighted){
        return <p>No quote found!</p>
    }
    return (
    <Fragment>
    <BackButton title = '⬅️' path='/quotes'/>
    <HighlightedQuote text={quoteHiglighted.text} author={quoteHiglighted.author}></HighlightedQuote>
    <Link className="centered no_underline" to={`/quotes/${params.quotesID}/comments`}>
        <button className="btn--flat">Load Comments</button>
    </Link>
    <Route path={`/quotes/${params.quotesID}/comments`}>
        <Comments/>
    </Route>
    </Fragment>)
}

export default QuoteDetail;