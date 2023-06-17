import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import DegreeList from './components/allDegrees';
import NavBar from './components/navBar';
import DegreeForm from './components/addDegree';
import DegreePage from './components/degreePage';
import Home from './components/home';
import CohortList from './components/allCohorts';
import CohortPage from './components/cohortPage';
import CohortForm from './components/addCohort';
import ModuleList from './components/allModules';
import ModulePage from './components/modulePage';
import ModuleForm from './components/addModule';
import StudentForm from './components/addStudent';
import MCohortList from './components/modulesByCohort';
import StudentPage from './components/studentPage';
import GradeForm from './components/addGradePage';
import CohortListPickStudent from './components/selCohortStud';
import Footer from './components/footer';
import StudentByCohortPage from './components/stuByCohort';




function App() {
  return (
    
      <div>
        <NavBar />
      
        <BrowserRouter>
        <div className="App">
          <header className="App-header">
          
            <Routes>
          <Route path ="/" element= {<Home/>}/>
          <Route path = "/degrees" element= {<DegreeList />}/>
          <Route path = "/cohorts" element= {<CohortList />}/>
          <Route path = "/modules" element= {<ModuleList />}/>
          <Route path = "/student/:id" element= {<StudentPage />}/>
          <Route path = "/cohort/students/:id" element= {<StudentByCohortPage/>}/>
          <Route path = "/student/cohort" element= {<CohortListPickStudent />}/>
          <Route path = "/student/grade" element= {<GradeForm />}/>
          <Route path = "/cohort/modules/:id" element= {<MCohortList />}/>
          <Route path="/degrees/:shortcode" element={<DegreePage/>} />
          <Route path = "/module/:code" element={<ModulePage />}/>
          <Route path="/degree/add" element={<DegreeForm/>} />
          <Route path = "/cohort/:id" element = {<CohortPage/>}/>
          <Route path = "/cohort/add" element = {<CohortForm/>}/>
          <Route path = "/student/add" element = {<StudentForm/>}/>
          <Route path = "/module/add" element = {<ModuleForm/>}/>

        </Routes>
          </header>
          <Footer />
        </div>
        </BrowserRouter>
      </div>
    
  );
}

export default App;

