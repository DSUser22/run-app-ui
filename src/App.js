import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AllTrainingsTable from './components/pages/AllTrainingsTable';
import BuildPlan from './components/pages/BuildPlan';
import CurrentTraining from './components/pages/CurrentTraining';
import HomePage from './components/pages/HomePage';
import Navbar from './components/small/Navbar';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/SignIn';
import MyAlert from './components/small/MyAlert';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path="/auth" element={<LogIn/>}></Route>
          <Route path="/registration" element={<SignUp/>}></Route>
          <Route path="/my/plan/training" element={<CurrentTraining/>}></Route>
          <Route path="/my/plan/" element={<BuildPlan/>}></Route>
          <Route path="my/plan/training/all" element={<AllTrainingsTable/>}></Route>
          <Route path="alert" element={<MyAlert/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
