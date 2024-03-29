import About from "./components/About";
import Contact from "./components/Contact";
import MemberShip from "./components/MemberShip";
import Navbar from "./components/Navbar";
import NewLetter from "./components/NewLetter";
import Packages from "./components/Packages";
import SectionOne from "./components/SectionOne";
import Service from "./components/Service";
import StatisticList from "./components/StatisticList";

function App() {
  return (
    <>
      <Navbar />
      <SectionOne />
      <StatisticList />
      <Service />
      <About />
      <MemberShip />
      <Packages />
      <NewLetter />
      <Contact />
    </>
  );
}

export default App;
