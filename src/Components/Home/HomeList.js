import React from 'react';
import homes from '../../json/game-of-thrones';
import  './HomeList.scss';

import {Link, NavLink} from 'react-router-dom';
class HomeList extends React.Component{

    render(){
        return(
            <div>
                <h2 className="text-center">Houses</h2>
                <ul>

                {homes.houses.map((name, index)=>{


                    return <li key={index} className="p-1"><NavLink  activeClassName="link-active" onClick={this.handleSubmit} to={`/${name.name}`}>{name.name}</NavLink></li>
                })}
                </ul>
            </div>
        )
    }


}
export default HomeList;