import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Print from './components/Print';

const App = () => {

  return (
      <div className="App">
        <Header/>
        <Profile/>
        <Contact/>
        <Experience/>
        <Education/>
        <Skills/>
        <Print/>
      </div>
  );
};

export default App;
