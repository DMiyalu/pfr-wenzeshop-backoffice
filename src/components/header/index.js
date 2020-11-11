import * as React from 'react'
import './style.css'
import { IoIosHelp } from 'react-icons/io'


const Header = ({title}) => {
    return (
        <div className="container">
            <h2>{title}</h2>
            <div className="search-bar">
                <div class="ui category search">
                    <div class="ui icon input">
                        <input class="prompt" type="text" placeholder="Entrez votre recherche..."/>
                        <i class="search icon"></i>
                    </div>
                    <div class="results"></div>
                </div>
            </div>
            <div className="help">
                <IoIosHelp size={25} />
            </div>
            <div className="compte">
                <h3>DM</h3>
            </div>
        </div>
    )
}

export default Header