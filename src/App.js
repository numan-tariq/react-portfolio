import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../src/components/NavBar/";
import Me from "./pages/Me/";
import Education from "./pages/Education/";
import Project from "./pages/Project/";
import Awards from "./pages/Awards/";
import WhyMe from "./pages/WhyMe/";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/me" />
          </Route>
          <Route path="/me">
            <Me />
          </Route>
          <Route path="/education" exact>
            <Education />
          </Route>
          <Route path="/project" exact>
            <Project />
          </Route>
          <Route path="/awards">
            <Awards />
          </Route>
          <Route path="/whyme">
            <WhyMe />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
