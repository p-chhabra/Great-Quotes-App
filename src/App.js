import {Route, Switch, Redirect} from 'react-router-dom'
import AddQuote from './pages/AddQoute';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

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
      <Route path='*'>
        <NotFound/>
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
