import user from '../data/usertab.js';
import React from 'react'
import Profile from '../images/artisant1.png';
import '../css/Artisants.css';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { colorsStar, stars } from '../data/stars.js';


function Batiment() {
    const onlyBatiment = user.filter((user) => user.category === 'Batiment');
    return (
        <div>
            {onlyBatiment.map((user) => (
            <Link className="card-link" to={`/user/${user.id}`} key={user.id}>
                <div className="page-card">
                    <div className='top-card'>
                        <div className='top-card'>
                            <img src={Profile} alt="Profile" />
                            <div className='info'> 
                                <h2>{user.name}</h2>
                                <h2>{user.job}</h2>
                                <h2>{user.city}</h2>
                                <div className='stars'>
                                    {stars.map((_, index) => {
                                        return (
                                        <FaStar
                                            key={index}
                                            size={24}
                                            color={(user.note) > index ? colorsStar.orange : colorsStar.grey}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            ))}
        </div>
    )
}

export default Batiment;