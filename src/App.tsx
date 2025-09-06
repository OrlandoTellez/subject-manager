import { Header } from "./components/Header";
import "./App.css";
import { Hero } from "./sections/Hero";
import { SubjectManagment } from "./sections/SubjectManagment";
import CustomTitleBar from "./components/CustomTitleBar";

const App: React.FC = () => {


  return (
    <>
      <CustomTitleBar />
      <div className="app">
          <Hero /> 
          <SubjectManagment />
      </div>
    </>
  );
};

export default App;
