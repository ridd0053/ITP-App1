import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Theme from "./ui/Theme";
import Header from "./ui/Header";
function App() {

  return (
    <MuiThemeProvider theme={Theme}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element= {<div>Home</div>} />
            <Route exact path="/services" element= {<div>Services</div>} />
            <Route exact path="/customsoftware" element= {<div>Custom Software</div>} />
            <Route exact path="/mobileapps" element= {<div>Mobile Apps</div>} />
            <Route exact path="/websites" element= {<div>Websites</div>} />
            <Route exact path="/revolution" element= {<div>Revolution</div>} />
            <Route exact path="/about" element= {<div>About</div>} />
            <Route exact path="/contact" element= {<div>Contact</div>} />
        </Routes>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
