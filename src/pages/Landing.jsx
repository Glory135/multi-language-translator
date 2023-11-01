import { ArrowForward } from "@mui/icons-material"
import { Link } from "react-router-dom"
import randoGuy from '../assets/rando.jpeg'
import DeveloperCard from "../components/DeveloperCard"


const Landing = () => {
    return (
        <div className='landing-page'>
            <section className="hero">
                <div className="hero-text" data-aos='fade-left'>
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
                <div className="hero-img-container" data-aos='fade-right' />
            </section>
            <section className="aboutApp" >
                <div className="aboutApp-container">
                    <h2 className="aboutApp-head" data-aos='fade-right'>
                        <span>About The app</span>
                    </h2>
                    <div className="aboutApp-body" data-aos='fade-left'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, maiores dicta! Officiis, eveniet ipsam nihil saepe aliquam tempore quas tenetur labore asperiores vero consectetur obcaecati nisi cumque. Ratione, numquam eos. Laboriosam facilis veritatis deserunt enim dignissimos exercitationem blanditiis suscipit molestias quos corporis nesciunt reiciendis, aspernatur sit nobis tenetur porro quis cumque possimus inventore nemo minima dolores harum molestiae rerum. Iusto, ipsam recusandae repellendus alias adipisci voluptate quos maiores eos nostrum neque amet aperiam velit aspernatur at assumenda unde eum dolorem autem magnam dolor quis illo voluptas molestias! Perferendis rem alias similique, magnam debitis optio perspiciatis tempora illum eveniet accusamus. Aliquid.
                    </div>
                </div>
            </section>
            <section className="developers">
                <div className="developers-container">
                    <h3 className="developers-head" data-aos='fade-left'>
                        <span >
                            Meet Team Alpha
                        </span>
                    </h3>
                    <div className="developers-body" >
                        <DeveloperCard img={randoGuy} name='Adeyemi Glory' title='Frontend Web Developer' role='Developer' milestone='Alpa' />
                        <DeveloperCard img={randoGuy} name='Adeyemi Glory' title='Frontend Web Developer' role='Developer' milestone='Alpa' />
                        <DeveloperCard img={randoGuy} name='Adeyemi Glory' title='Frontend Web Developer' role='Developer' milestone='Alpa' />
                        <DeveloperCard img={randoGuy} name='Adeyemi Glory' title='Frontend Web Developer' role='Developer' milestone='Alpa' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing