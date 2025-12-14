import React from 'react'
import {useState, useMemo } from 'react'
import options from '../data/usertab.js';
import '../css/Accueil.css';
import First from '../images/trophee.png';
import Second from '../images/deuxieme.png';
import Third from '../images/troisieme.png';
import { Link } from 'react-router-dom';
import Test from '../images/img_test.png';
import { FaStar } from 'react-icons/fa';
import { colorsStar, stars } from '../data/stars.js';
import chooseMenu from '../images/menuchoice.png';
import chooseArtisan from '../images/chooseartisant.png';
import sendMessage from '../images/sendmsg.png';


function Accueil(){
  const Rank = useMemo(() => {
    const sortedOptions = [...options].sort((a, b) => b.note - a.note);
    return sortedOptions.slice(0, 3);
  }, []);

  const colors = ['#FFD700', '#C0C0C0', '#cd7f32'];
  return (
    <div>
      <div className='rank'>
        {Rank.map((user, index) => (
          <Link to={`/user/${user.id}`} key={user.id}><div key={user.id} className={`card ${index===0 ? 'first' : index===1 ? 'second' : 'third'}`}>
            {index === 0 && <img src={First} alt="First place" />}
            {index === 1 && <img src={Second} alt="Second place" />}
            {index === 2 && <img src={Third} alt="Third place" />}
            <h2>{user.name}</h2>
            {stars.map((_, index) => {
              return (
                <FaStar
                    key={index}
                    size={24}
                    color={(user.note) > index ? colorsStar.orange : colorsStar.grey}
                  />
                )
            })}
            <h4 style={{color: colors[index]}}>Ville: {user.city}</h4>
            <h4 style={{color: colors[index]}}>Métier: {user.job}</h4>
          </div></Link>
        ))}
      </div>
      <section className='explain'>
        <h1>Comment trouver mon artisan ?</h1>
        <ul>
          <li><h3>Choisir la catégorie d’artisanat dans le menu</h3></li>
          <img src={chooseMenu} alt="Choisir la catégorie d’artisanat dans le menu" />
          <li><h3>Choisir un artisan</h3></li>
          <img src={chooseArtisan} alt="Choisir un artisan" />
          <li><h3>Le contacter via le formulaire de contact</h3></li>
          <img src={sendMessage} alt="Le contacter via le formulaire de contact" />
          <li className='answer'>Une réponse sera apportée sous 48h</li>
        </ul>
      </section>
    </div>
  )
}

export default Accueil