import { Fragment } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import QuoteList from "../components/quotes/QuoteList";

const AllQuotes = () => {
    const DUMMY_QUOTES = [
        {id: "q1", author: 'Mangu', text: "Gotta live the Thug Life!"},
        {id: "q2", author: 'Bandook Baba', text: "Chori di Bandook fadi gayi ni"},
        {id: "q3", author: 'Alex Morgan', text: "Go in quite mode for 6 months, all your life problems will disappear"},
        {id: "q4", author: 'Joker', text: "Stop overthinking, 99% of your problems are just in your mind"}
    ]
    return (
        <Fragment>
            <h1>All Quotes Page</h1>
            <ul>
                <QuoteList quotes={DUMMY_QUOTES}/>
            </ul>
        </Fragment>
    )
}

export default AllQuotes;