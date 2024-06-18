import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Missing from './Components/Missing';
import Nav from './Components/Nav';
import NewPost from './Components/NewPost';
import PostPage from './Components/PostPage';
import { Route, Routes } from 'react-router-dom';

import { DataProvider } from './context/DataContext';

function App() {

  return (
    <div className="App">
      <DataProvider>
        <Header title={"Share Media"}/>
        <Nav/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/post'>
            <Route index element={
              <NewPost/>
            }
            />
            <Route path=':id' element={<PostPage/>}/>
          </Route>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<Missing/>}/>
        </Routes>
        <Footer/>
      </DataProvider>
    </div>
  );
}

export default App;
