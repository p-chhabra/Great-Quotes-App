import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import React, { useEffect, useState, Suspense } from "react";

const AddQuote = React.lazy(() => import("./pages/AddQoute"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch(
        "https://react-http-1ca3c-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const quotesArray = [];

      for (const key in data) {
        quotesArray.push({
          id: data[key].id,
          author: data[key].author,
          text: data[key].text,
        });
      }
      setQuotes(quotesArray);
    };
    fetchQuotes();
  }, []);
  console.log(quotes);

  return (
    <Layout>
      <Suspense>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes quotes={quotes} />
          </Route>
          <Route path="/quotes/:quotesID">
            <QuoteDetail quotes={quotes} />
          </Route>
          <Route path="/new-quote">
            <AddQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
