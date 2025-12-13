import React from 'react'
import Header from '../components/Header';
import options from '../data/usertab.js';
import { useParams, Navigate } from 'react-router-dom';
import '../css/User.css';
import Profile from '../images/artisant1.png';
import { FaStar } from 'react-icons/fa';
import { colorsStar, stars } from '../data/stars.js';

function User() {
    const { id } = useParams();
    const user = options.find(o => o.id === id)

    if (!user) 
        return <Navigate to="/404" replace />;
    return (
        <div className="page-card-user">
            <div className='top-card-user'>
                <div className='top-card-user'>
                    <img src={Profile} alt="Profile" />
                    <div className='info-user'> 
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
            <div className='middle-card-user'>
                <h2>A Propos</h2>
                <p>{user.desc}</p>
            </div>
            <div className='bottom-card-user'>
                <h2>Me contacter</h2>
                <form className='form-user'>
                    <input type="text" placeholder="Votre nom" required />
                    <input type="text" placeholder="Objet" required />
                    <textarea placeholder="Votre message" required></textarea>
                    <button type="submit">Envoyer</button>
                </form>
                
            </div>
        </div>
    )
}

export default User;