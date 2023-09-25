import { ArrowForward } from "@mui/icons-material"
import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <div className='landing-page'>
            <div className="hero">
                <div className="hero-text">
                    <h1>Translate From Any Language</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos sed nostrum veniam! Corporis totam consequatur doloremque nemo nihil voluptatibus enim.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut autem, consequatur sit, molestiae impedit deleniti tempore eligendi blanditiis illum alias odio necessitatibus cupiditate! Nesciunt delectus fuga velit sint ex cupiditate.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eaque.
                    </p>
                    <div className="btn-container">
                        <Link className='Link' to='/translatetext'>
                            <button className="btn big">
                                Get Started
                                <ArrowForward />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="hero-img-container" />
            </div>
        </div>
    )
}

export default Landing