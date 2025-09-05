import { Header } from "./components/Header";
import "./App.css";
import { Hero } from "./sections/Hero";
import { SubjectManagment } from "./sections/SubjectManagment";

const App: React.FC = () => {


  return (
    <>
      <Header />
      <div className="app">
        <section className="container">
          <Hero />
        </section>
      </div>
      <div className="appContainer">
        <SubjectManagment />
      </div>
    </>
  );
};

export default App;
