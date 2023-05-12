import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import { CounterProvider } from "./context/counterContext";
import Question from "./components/Question/Question";
import Game from "./components/Game/Game"
import ScoreBoard from './components/Scoreboard/Scoreboard'
import QuestionOne from "./components/Question/QuestionOne";
import QuestionTwo from "./components/Question/QuestionTwo";
import QuestionThree from "./components/Question/QuestionThree";
import QuestionFour from './components/Question/QuestionFour'
import QuestionFive from './components/Question/QuestionFive'
import QuestionSix from './components/Question/QuestionSix'
import QuestionSeven from './components/Question/QuestionSeven'
import QuestionEight from './components/Question/QuestionEight'
import QuestionNine from './components/Question/QuestionNine'
import QuestionTen from './components/Question/QuestionTen'
import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  return (
    <>
      <CounterProvider>
        <BrowserRouter>
        <ScoreBoard/>
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/question" element={<Question />} />
            <Route path="/question/questionOne" element={<QuestionOne />} />
            <Route path="/question/questionTwo" element={<QuestionTwo />} />
            <Route path="/question/questionThree" element={<QuestionThree />} />
            <Route path="/question/questionFour" element={<QuestionFour/>}/>
            <Route path="/question/questionFive" element={<QuestionFive/>}/>
            <Route path="/question/questionSix" element={<QuestionSix/>}/>
            <Route path="/question/questionSeven" element={<QuestionSeven/>}/>
            <Route path="/question/questionEight" element={<QuestionEight/>}/>
            <Route path="/question/questionNine" element={<QuestionNine/>}/>
            <Route path="/question/questionTen" element={<QuestionTen/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
      </CounterProvider>
    </>
  );
}

export default App;
