import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";
import { useState } from "react"
function App() {

  const [tabIndex, setTabindex ] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <MuiThemeProvider theme={Theme}>
      <div className="App">
        <Router>
          <Header tabIndex={tabIndex} setTabindex={setTabindex} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
          <Routes>
            <Route exact path="/" element= {<LandingPage setTabindex={setTabindex} setSelectedIndex={setSelectedIndex} />} />
            <Route exact path="/services" element= {<Services setTabindex={setTabindex} setSelectedIndex={setSelectedIndex} />} />
            <Route exact path="/customsoftware" element= {<CustomSoftware setTabindex={setTabindex} setSelectedIndex={setSelectedIndex} />} />
            <Route exact path="/mobileapps" element= {<div>iOS/Android App Development</div>} />
            <Route exact path="/websites" element= {<div>Websites</div>} />
            <Route exact path="/revolution" element= {<div>Revolution</div>} />
            <Route exact path="/about" element= {<div>About</div>} />
            <Route exact path="/contact" element= {<div>Contact</div>} />
            <Route exact path="/estimate" element= {<div>Estimate</div>} />
        </Routes>
          <Footer setTabindex={setTabindex} setSelectedIndex={setSelectedIndex} />
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
