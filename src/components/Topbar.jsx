import logo from '../assets/logo-main.svg'
import logosm from '../assets/logo-main-sm.svg'
import TranslateIcon from '@mui/icons-material/Translate';
import { Link } from 'react-router-dom';
import { SignLanguage } from '@mui/icons-material';

const Topbar = () => {
    return (
        <div className='top'>
            <div className="logo-container">
                <Link className='Link' to={'/'}>
                    <img className='logo' src={logo} alt="logo" />
                    <img className='logosm' src={logosm} alt="small-logo" />
                </Link>
            </div>
            <nav className="nav">
                <ul>
                    <Link className='Link' to={'/translatetext'}>
                    <li> <TranslateIcon className='linkSign' /> Translate Text</li>
                    </Link>
                    {/* <Link className='Link' to={'/translatetext'}>
                    <li> <SignLanguage className='linkSign' /> Sign Language</li>
                    </Link> */}
                </ul>
            </nav>
        </div>
    )
}

export default Topbar