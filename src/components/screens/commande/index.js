import * as React from 'react'
import Header from '../../header'
import Table from '../../table'
import './style.css'


const Commande = () => {
    return (
        <div>
            <Header title="Commande"/>
            <div className="table-box">
                <Table/>
            </div>
        </div>
    )
}

export default Commande