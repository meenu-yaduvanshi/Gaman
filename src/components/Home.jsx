import Nav from "./Nav"
import Crousel from "./Crousel";
import AnimationText from "./AnimationText";
import TripPlanForm from "./TripPlanForm";

const Home = () => {
  return (
    <>
      <Nav />
      <Crousel />
      <div className="circel">
        <p>A line about Gaman</p>
      </div>
      <AnimationText />
      <TripPlanForm />
    </>
  )
}

export default Home;