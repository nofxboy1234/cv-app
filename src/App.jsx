import './App.css';
import './styles/Component.css';

import General from './components/general/General';
import EducationIndex from './components/education/Index';
import ExperienceIndex from './components/experience/Index';

function App() {
  return (
    <>
      <h1>CV App</h1>
      <General />
      <EducationIndex />
      <ExperienceIndex />
    </>
  );
}

export default App;
