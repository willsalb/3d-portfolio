import Reactm, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import { logo } from '../assets';

const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);


  return (
    //Special utily class, provides the px6 
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2'
          onClick={() => {
            //Acompanha onde estamos na página
            setActive("");
            //Sobe para o topo da página
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[18px] font-bold cursor-pointer flex object-contain'>Willams Souza &nbsp;<span>- Backend PHP</span></p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              //Verificando se a lista está ativa
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18] font-medium cursor-pointer`}
              
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" 
            className='w-[32px] h-[32px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          {/* se não tiver alternado vai ser mostrado hidden, else vai mostrar flex(vai mostrar o menu)*/}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-4 min-w-[140]
          z-10 rounded-2xl mt-0`}>
              <ul className='list-none flex justify-end items-start flex-col gap-3'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    //Verificando se a lista está ativa
                    className={`${
                      active === nav.title ? 'text-white' : 'text-secondary'
                    } font-poppins font-normal cursor-pointer text-[16px]`}
                    
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
          </ul>
          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar