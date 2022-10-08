import './App.css';
import Sidebar from './Components/Sidebar';
import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';
import Users/*, UserManagement/*, Profiles, Groups*/ from './Pages/UserManagement';
import DataFetching from './Pages/DataFetching';

/**
 * Notes:
 * 1) here user management component is the Users component
 * 2)if I want user management||Profiles||Groups||other menu items to have a page...
 * I shall add its import, component
 * , and route tag ....
 * the one line import is not going to work here
 * as I have to export the coponent I am using
 */
function App() {
  return (
    <Router>
     <Sidebar />
     
     <Routes>
       {/* <Route path="/userManagement" exact component={UserManagement}/> */}
       <Route path="/userManagement/users" element={<Users />}/>

       {/* <Route path="/userManagement/profiles" exact component={Profiles}/>
       <Route path="/userManagement/groups" exact component={Groups}/> */}
     </Routes> 
    </Router>
  );
}

export default App;
