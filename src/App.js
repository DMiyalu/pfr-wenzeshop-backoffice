import React from "react"
import './App.css'
import { AiOutlineMenuFold } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs'
import { MdLocalGroceryStore } from 'react-icons/md'
import { IoMdNotifications } from 'react-icons/io'
import { SiMarketo } from 'react-icons/si'
import { ImUsers } from 'react-icons/im'
import Commande from './components/screens/commande'
import Notification from './components/screens/notification'
import Magasin from './components/screens/magasin'
import Utilisateur from './components/screens/utilisateur'
import Statistique from './components/screens/statistique'
import Equipe from './components/screens/equipe'
import Carnet from './components/screens/carnet'
import Home from './components/screens/home'
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
                <MdLocalGroceryStore /><Link to="/commande">Commandes</Link>
              </li>
              <li>
                <IoMdNotifications /><Link to="/notification">Notifications</Link>
              </li>
              <li>
                <SiMarketo /><Link to="/magasin">Magasin</Link>
              </li>
              <li>
                <ImUsers /><Link to="/utilisateur">Livreurs</Link>
              </li>
              <li>
              <ImUsers /><Link to="/utilisateur">Clients</Link>
              </li>
            </ul>
          </nav>
          <nav className="nav-bottom">
                <Link to="/statistique">Statistiques</Link>
                <Link to="/equipe">Equipe</Link>           
                <Link to="/carnet">Carnet</Link> 
          </nav>
          <div className="button-help">
            <Link to="/">help</Link>
          </div>
        </div>
        <div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/commande">
              <Commande />
            </Route>
            <Route path="/notification">
              <Notification />
            </Route>
            <Route path="/magasin">
              <Magasin />
            </Route>
            <Route path="/utilisateur">
              <Utilisateur />
            </Route>
            <Route path="/statistique">
              <Statistique />
            </Route>
            <Route path="/equipe">
              <Equipe />
            </Route>
            <Route path="/carnet">
              <Carnet />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App