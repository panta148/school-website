import './App.css';
import Navbar from './Component/Navbar';
import { Switch, Route } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import NewsEvents from './Component/NewsEvents';
import Academics from './Component/Academics';
import Services from './Component/Services';
import Calender from './Component/Calender';
import Student from './Component/Student';
import Bacademic from './Component/Bacademic';
import Admission from './Component/Admission';
import Errorpage from './Component/Errorpage';
function App() {
  return (
    <>
      <Navbar />

      {/* using react router here after  */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/NewsEvents">
          <NewsEvents />
        </Route>
        <Route exact path="/Academics">
          <Academics />
        </Route>
        <Route exact path="/Services">
          <Services />

        </Route>
        <Route exact path="/Calender">
          <Calender />
        </Route>
        <Route exact path="/Student">
          <Student />
        </Route>
        <Route exact path="/Bacademics">
          <Bacademic />

        </Route>
        <Route exact path="/Admission">
          <Admission />

        </Route>
        <Route>
          <Errorpage />

        </Route>

      </Switch>



    </>
  );
}

export default App;
