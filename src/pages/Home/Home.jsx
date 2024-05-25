import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout/Layout'
import './Home.styles.css'
import HomeCard from '../../components/HomeCard/HomeCard';
import ContactForm from '../../components/ContactForm/ContactForm';

const Home = () => {
    return (
        <Layout>
            <Helmet>
                <title>Home - LinearDev</title>
            </Helmet>
            <section className='container'>
                <div className='first-sec-cont'>
                    <div className='first-sec-text-box'>
                        <span className='first-sec-text-title'>This is <h1>LINEAR</h1></span>
                        <span className='first-sec-text-desc'>Хороший дизайн виден сразу. Отличный<br/>дизайн незаметен - Джо Сопрано»</span>
                    </div>
                    <div className='first-sec-car-box'>
                        <img src='/public/Car.png' alt='Linear Car'/>
                    </div>
                </div>
            </section>
            <section className='container'>
            <video
                    className="video-bg"
                    autoPlay="autoplay"
                    loop="loop"
                    muted="muted"
                >
                    <source src="/public/bg_video.mp4" type="video/mp4"></source>
                </video>
                <div className='snd-sec-text-cont'>
                    <span className='snd-sec-text-title'>Мечты или реальность?</span>
                    <span className='snd-sec-text-subtitle'>Члены нашей команды, постигшие тоноксти изъяны веб-индустрии, осуществят ваши мечты в реальность.</span>
                </div>
                <div className='snd-sec-card-cont'>
                    <HomeCard 
                        title={'Linear.js'}
                        text={'Client-Side Serverless JavaScript Framework'}
                    />
                    <HomeCard 
                        title={'New awesome method of developing'}
                        text={'We creeated amazing site fast and easy'}
                    />
                    <HomeCard 
                        title={'New awesome method of developing'}
                        text={'We creeated amazing site fast and easy'}
                    />
                </div>
            </section>
            <section className='container'>
                <div className='thrd-sec-cont'>
                    <span className='thrd-sec-title'>Trusted by 1000s of Australian buisinesses over the last 16 years</span>
                    <p className='thrd-sec-text'>
                        Webprofits is one of the largest inde pendent digital
                        agencies in Australia. Launched in 2006, we have helped
                        thousands of Australian businesses drive growth through
                        digital marketing. We have a team of 80+ performance
                        marketers with specialists in strategy, creative, paid
                        media, SEO, content, copywriting, design, development
                        and project management - everything you need to execute
                        a high-impact digital marketing campaign.
                    </p>
                    <div className='thrd-sec-contact-box'>
                        <span>Contact us</span>
                        <div className='arrow-bot-cont'><img src='/public/icons/vector.png' alt='contact'/></div>
                    </div>
                </div>
            </section>
            <section className='container'>
                <h2 className='frth-sec-title'>Contact Us</h2>
                <div className='form-cont-home-page'>
                    <ContactForm/>
                </div>
            </section>
        </Layout>
    )
}

export default Home