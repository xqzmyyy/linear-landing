import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout/Layout'
import './Contacts.styles.css'
import { branchesArr } from '../../data/branches'
import Branches from '../../components/Branches/Branches'

const Contacts = () => {
    return (
        <Layout>
            <Helmet>
                <title>Contacts - LinearDev</title>
            </Helmet>
            <section className='contacts-page-body'>
                <h2 className='contacts-page-title'>Contacts</h2>
                <div className='contacts-page-text'>
                    If you have any questions, problems with site, order, payment or if you want to cooperate - {" "}
                    <a
                        className="contacts-page-link"
                        href="#"
                        alt="contact us!"
                    >
                        contact us!
                    </a>
                </div>
                <div className="contacts-num">
                    Phone: +3809714263
                </div>
                <div className="contacts-num">
                    Adress: Grzyybowska 61A, 00-844 Warszawa, Poland
                </div>
                <div className="contacts-num">
                    E-mail: ceo@lineardev.net
                </div>
                <div className='contacts-page-sm-cont'>
                    <span>Our social media:</span>
                    <div className='contacts-page-sm-box'>
                        <a href='https://x.com/lineardev_ua' target='_blank'>Twitter</a>
                        <a href='https://www.youtube.com/channel/UCy0tsQ6MYojuVISG8C3JxkA' target='_blank'>YouTube</a>
                        <a href='https://www.linkedin.com/company/lineardev/about/' target='_blank'>LinkedIn</a>
                        <a href='https://www.instagram.com/lineardev.ua/' target='_blank'>Instagram</a>
                    </div>
                </div>
            </section>
            <section className='contacts-page-branch-sec'>
                <h2 className='contacts-page-branch-head'>Our Branches</h2>
                <div>
                {branchesArr.map(branch => (
                    <Branches key={branch.dep} dep={branch.dep} fields={branch.fields} />
                ))}
            </div>
            </section>
        </Layout>
    )
}

export default Contacts