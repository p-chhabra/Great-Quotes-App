import {Route, Switch, Redirect} from 'react-router-dom'
import AddQuote from './pages/AddQoute';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
    <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes'/>
      </Route>
      <Route path='/quotes' exact>
        <AllQuotes/>
      </Route>
      <Route path='/quotes/:quotesID'>
        <QuoteDetail/>
      </Route>
      <Route path='/new-quote'>
        <AddQuote/>
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
