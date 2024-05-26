import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout/Layout'
import { useEffect } from 'react';

import './AboutUs.styles.css'

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <Helmet>
                <title>About us - LinearDev</title>
            </Helmet>
            <section className='about-body'>
                <h1 className='about-page-title'>What is LinearDev?</h1>
                <h3 className='about-page-subtitle'>About</h3>
                <p>
                    Welcome to <span className='about-text-highlight'>LinearDev</span>, a leading IT company specializing 
                    in blockchain technology. We offer a range of services to help businesses and organizations 
                    leverage the power of blockchain to improve efficiency, security, and transparency.<br/><br/>
                    Our team of expert developers and consultants have a wealth of experience in building and 
                    deploying blockchain solutions across a range of industries. Whether you're looking to create 
                    a new blockchain application from scratch, or you want to integrate blockchain technology into 
                    an existing system, we have the skills and knowledge to help you succeed.<br/><br/>
                    Some of the services we offer include:
                </p>
                <ul>
                    <li>
                        Blockchain development: We can help you build custom blockchain applications and smart 
                        contracts to meet the unique needs of your business.
                    </li>
                    <li>
                        Blockchain consulting: Our team can provide guidance and support on everything from 
                        choosing the right blockchain platform to developing a solid strategy for implementation.
                    </li>
                    <li>
                        Blockchain training: We offer a range of training courses and workshops to help you and 
                        your team get up to speed on blockchain technology and how to use it effectively.
                    </li>
                </ul>
                <p>
                    If you're interested in learning more about how we can help your business or organization 
                    leverage the power of blockchain, don't hesitate to get in touch. We look forward to working with you.
                </p>
                <h3 className='about-page-subtitle'>Our directions and aspirations</h3>
                <p>
                    Our company specializes in the development of web3 products, platforms, and frameworks. 
                    We leverage the latest technologies such as React, Gatsby, Meteor, Node.js, and REST API 
                    to deliver top-quality solutions to our clients.<br/><br/>
                    Our team of experienced developers is dedicated to staying up-to-date with the latest 
                    industry trends and best practices to ensure that we are always providing the best possible 
                    service to our clients.<br/><br/>
                    Whether you are looking to create a new web platform from scratch or to upgrade an existing one, 
                    we have the expertise and knowledge to get the job done right. We take pride in our work and are 
                    committed to delivering high-quality, scalable solutions that meet the needs of our clients.<br/><br/>
                    Thank you for considering us for your web development needs. We look forward to working with you and 
                    helping you achieve your business goals.<br/>
                </p>
                <h3 className='about-page-subtitle'>We take care about everything</h3>
                <p>
                    In addition to our expertise in web development technologies, we also have a strong background 
                    in devops and are well-versed in the latest tools and practices in this field. We believe that a 
                    focus on devops is essential for building and maintaining high-quality, reliable software.<br/><br/>
                    Some of the devops tools and technologies that we frequently use include Docker, Kubernetes, Ansible, 
                    Terraform, and Jenkins. We also have experience with monitoring and logging tools such as New Relic, 
                    Splunk, and ELK stack.<br/><br/>
                    By integrating devops best practices into our workflow, we are able to deliver software that is scalable, 
                    maintainable, and easy to deploy. This not only benefits our clients but also allows us to work more 
                    efficiently and effectively as a team.<br/>
                </p>
                <h3 className='about-page-subtitle'>This people make magic</h3>
                <p>
                    Our team is a group of highly skilled and dedicated professionals who are passionate about what they do. 
                    They take pride in their work and are committed to delivering the highest quality solutions to our 
                    clients.<br/><br/>
                    Not only are they experts in their field, but they are also great team players who are always willing 
                    to go the extra mile to ensure that our clients are satisfied. They are innovative, proactive, and always 
                    looking for ways to improve and enhance the products and services that we offer.<br/><br/>
                    We believe that our team is one of our greatest assets, and we are extremely fortunate to have such a 
                    talented and dedicated group of individuals working with us. We are confident that with their expertise 
                    and commitment, we will be able to achieve great things and deliver the best possible results to our clients.
                </p>
            </section>
        </Layout>
    )
}

export default AboutUs