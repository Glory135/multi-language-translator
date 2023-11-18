import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import gloryimg from '../assets/profileimgs/glory.png';
import praiseimg from '../assets/profileimgs/praise.jpg';
import veraimg from '../assets/profileimgs/vera.jpg';
import charlesimg from '../assets/profileimgs/charles.jpg';
import DeveloperCard from '../components/DeveloperCard';

const Landing = () => {
	return (
		<div className='landing-page'>
			<section className='hero'>
				<div className='hero-text' data-aos='fade-left'>
					<h1>Translate From Any Language</h1>
					<p>
						Say goodbye to communication hurdles and embrace a world
						where language is no longer a barrier. Effortlessly
						speak to a diverse audience by translating from a
						language of your choosing to multiple
						languages in real time.
					</p>
					<div className='btn-container'>
						<Link className='Link' to='/translatetext'>
							<button className='btn big'>
								Get Started
								<ArrowForward />
							</button>
						</Link>
					</div>
				</div>
				<div className='hero-img-container' data-aos='fade-right' />
			</section>
			<section className='aboutApp'>
				<div className='aboutApp-container'>
					<h2 className='aboutApp-head' data-aos='fade-right'>
						<span>About The app</span>
					</h2>
					<div className='aboutApp-body' data-aos='fade-left'>
						MultiTranslate is an efficient user friendly tool that
						can translate seamlessly into multiple languages
						concurrently. So Whether you're connecting with friends,
						engaging in global business, or navigating diverse
						communities, Multilingual ensures your message is
						understood by everyone.
					</div>
				</div>
			</section>
			<section className='developers'>
				<div className='developers-container'>
					<h3 className='developers-head' data-aos='fade-left'>
						<span>Meet Team Alpha</span>
					</h3>
					<div className='developers-body'>
						<DeveloperCard
							img={praiseimg}
							name='Praise Olawoore'
							role=' Project Manager'
							milestone='Beta'
							github='https://github.com/praistarr'
							mlsa='https://mvp.microsoft.com/en-US/studentambassadors/profile/7ef0ee6e-de25-4f40-8d49-d2bd929804ef'
							linkedin='http://linkedin.com/in/praiseolawoore/'
						/>
						<DeveloperCard
							img={veraimg}
							name='Magbuwe Vera'
							role='Technical writer and researcher'
							milestone='Alpa'
							github='https://github.com/veratinous'
							mlsa='https://mvp.microsoft.com/en-US/studentambassadors/profile/e6eaa8cf-44e1-4885-ba1d-2f1f5ad78c28'
							linkedin='https://www.linkedin.com/in/vera-magbuwe-b60a4423b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
						/>
						<DeveloperCard
							img={charlesimg}
							name='Charles Edeki'
							role='Backend Developer'
							milestone='Alpa'
							github='https://github.com/CharlesEdeki'
							mlsa='https://mvp.microsoft.com/en-US/studentambassadors/profile/403fa414-e188-4966-890a-f817973c60d0'
							linkedin='https://www.linkedin.com/in/charles-edeki-364a0120a'
						/>
						<DeveloperCard
							img={gloryimg}
							name='Adeyemi Glory'
							role='Frontend Developer'
							milestone='Alpa'
							github='https://github.com/Glory135'
							mlsa='https://mvp.microsoft.com/en-US/studentambassadors/profile/3400548d-5279-47ff-8260-fa6b744dbbc9'
							linkedin='http://linkedin.com/in/glory135'
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Landing;
