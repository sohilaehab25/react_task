import './App.css';
import NavBar from './copmonents/navBar';
import Slider from './copmonents/Slider';
import Footer from './copmonents/footer';
import AllTeachers from './teachers/AllTeachers';
import ListChildren from './children/ListChildren';
import ListClasses from './classes/ListAllclasses';

function App() {
    return(
        <>
         <NavBar/>
         <Slider/>
         <AllTeachers/>
         <ListChildren/>
         <ListClasses/>
         <Footer/>
        </>
);

}

export default App;
