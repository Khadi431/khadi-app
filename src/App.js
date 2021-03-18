import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Form from "./components/Form";
function App() {
  return(
    <section style={{backgroundImage: "url(./IMG/human.jpg)"}}>
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Contact/>
    <Form/>
    </>
    </section>
  );  
}


export default App;
