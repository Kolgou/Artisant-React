import { useState, useMemo, useEffect } from 'react';
import '../css/Header.css';
import Logo from '../images/image-artisant-wbg.png';
import Loupe from '../images/loupe.png';
import Burger from '../images/menu.png';
import Croix from '../images/croix.png';
import { Link, useLocation } from 'react-router-dom';
import options from '../data/usertab.js';

function Header() {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const location = useLocation();
  
  const choiceMenu = () => {
    setMenu(v => !v);
  }

  useEffect(() => {
    setOpen(false);
    setMenu(false);
  }, [location.pathname]);

  const filteredOptions = useMemo(() => {
    const q = search.trim().toLowerCase();
    return !q ? options : options.filter(option => option.name.toLowerCase().includes(q) 
      || option.job.toLowerCase().includes(q) || option.city.toLowerCase().includes(q))}, [search])
  return (
    <div className="header">
      <Link to="/" className={close ? 'close' : ''}><img src={Logo} alt="Artisant Logo" /></Link>
      <div className="h-menu">
        <div className={`search-bar ${menu ? 'active' : ''}`}>
          <input 
            type="text"
            value={search}
            style={{ padding: 8, width: "20rem", height: 20}}
            onChange={e => setSearch(e.target.value)} 
            placeholder="Recherchez un artisant" />
            <ul>
              {filteredOptions.map(option => (
                <Link to={`/user/${option.id}`} key={option.id}><li>{option.name}</li></Link>
              ))}
            </ul>
        </div>
        <div className={`links ${open ? 'active' : ''}`}>
          <Link to="/batiment">Batiment</Link>
          <Link to="/services">Services</Link>
          <Link to="/fabrication">Fabrication</Link>
          <Link to="/alimentation">Alimentation</Link>
        </div>
      </div>
      <div className='logo-menu'>
        <button className="burger-btn" onClick={() => setOpen(v => !v)} aria-expanded={open}>
          {open ? (
            <img className="close" src={Croix} alt="Close" />
          ) : (
            <img className="burger" src={Burger} alt="Menu" />
          )}
        </button>
        <button className="burger-btn" onClick={choiceMenu}>
          <img className='loupe' src={Loupe} alt="Search" />
        </button>
      </div>
    </div>
  )
}

export default Header;