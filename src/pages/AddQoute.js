import { Fragment } from 'react/cjs/react.production.min';
import QuoteForm from '../components/quotes/QuoteForm'

const AddQuote = () => {

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
    }

    return (
        <Fragment>
            <h1>Add a Quote</h1>
            <QuoteForm onAddQuote={addQuoteHandler}/>
        </Fragment>
    )
}

export default AddQuote;