import { Route, useParams } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Comments from '../components/comments/Comments'

const QuoteDetail = () => {
    const params = useParams();
    return (
        <Fragment>
    <h1>Quote Detail Page</h1>
    <p>{params.quotesID}</p>
    <Route path={`/quotes/${params.quotesID}/comments`}>
        <Comments/>
    </Route>
    </Fragment>)
}

export default QuoteDetail;