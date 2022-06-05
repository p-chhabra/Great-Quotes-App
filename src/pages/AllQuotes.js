import { Fragment } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import QuoteList from "../components/quotes/QuoteList";

const AllQuotes = (props) => {
    return (
        <Fragment>
            <h1>All Quotes Page</h1>
            <ul>
                <QuoteList quotes={props.quotes}/>
            </ul>
        </Fragment>
    )
}

export default AllQuotes;