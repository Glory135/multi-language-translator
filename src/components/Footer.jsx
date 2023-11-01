import { ArrowUpward } from '@mui/icons-material'
import logo from '../assets/logo-main2.svg'

const Footer = () => {
    return (
        <footer >
            <div className="footer-container">
                <div className="footer-first-con">
                <div className='footer-first'>
                    <img src={logo} alt="" />
                </div>
                <div className='footer-sec'>
                    <a  href='#topBar' title='Back To Top'>
                        <ArrowUpward />
                    </a>
                </div>
            </div>
            <div className="footer-second-con">
                &copy; All right reserved 2023
            </div>
            </div>
        </footer>
    )
}

export default Footer