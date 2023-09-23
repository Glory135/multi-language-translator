import logo from '../assets/logo-main.svg'
import logosm from '../assets/logo-main-sm.svg'
import TranslateIcon from '@mui/icons-material/Translate';

const Topbar = () => {
    return (
        <div className='top'>
            <div className="logo-container">
                <img className='logo' src={logo} alt="logo" />
                <img className='logosm' src={logosm} alt="small-logo" />
            </div>
            <nav className="nav">
                <ul>
                    <li> <TranslateIcon className='linkSign' /> Translate Text</li>
                </ul>
            </nav>
        </div>
    )
}

export default Topbar