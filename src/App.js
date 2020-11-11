import React from "react"
import './App.css'
import { AiOutlineMenuFold } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs'
import { MdLocalGroceryStore } from 'react-icons/md'
import { IoMdNotifications } from 'react-icons/io'
import { SiMarketo } from 'react-icons/si'
import { ImUsers } from 'react-icons/im'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () =>{
  return (
    <Router>
      <div className="App-header">
        <div className="menu">
          <div className="title">
            <BsCircleFill size={10} color="green" /><h1>Wenzeshop</h1><AiOutlineMenuFold size={20} className="menu-icon"/>
          </div>
          <nav>
            <ul>
              <li>
                <MdLocalGroceryStore /><Link to="/">Commandes</Link>
              </li>
              <li>
                <IoMdNotifications /><Link to="/about">Notifications</Link>
              </li>
              <li>
                <SiMarketo /><Link to="/users">Magasin</Link>
              </li>
              <li>
                <ImUsers /><Link to="/users">Livreurs</Link>
              </li>
              <li>
              <ImUsers /><Link to="/users">Clients</Link>
              </li>
            </ul>
          </nav>
          <nav className="nav-bottom">
                <Link to="/">Statistiques</Link>
                <Link to="/about">Equipe</Link>           
                <Link to="/users">Carnet</Link> 
          </nav>
          <div className="button-help">
            <Link to="/">help</Link>
          </div>
        </div>
        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


export default App