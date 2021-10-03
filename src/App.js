import Header from "./components/Header/Header";
import Navigation from "./components/Nav/Navigation";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainPages from "./pages/MainPages";
import DetailPages from "./pages/DetailPages";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <MainPages />
        </Route>
        <Route path="/product">
          <DetailPages />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
