import Hero from './components/hero'
import Content from './components/content'
import Survey from './components/survey'

import { useState } from 'react'

function App() {
  const [surveyPopup, setSurveyPopup] = useState(false);

  return (
    <div>
      <Hero/>
      <Content setSurveyPopup={setSurveyPopup}></Content>
      <Survey trigger={surveyPopup}></Survey>
    </div>
  );
}

export default App;
