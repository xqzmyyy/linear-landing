import { useEffect, useRef } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Layout from "../../components/Layout/Layout";
import MainPagePlates from "../../components/MainPagePlates/MainPagePlates";
import "./Main.css";
import { Helmet } from "react-helmet";

const Main = () => {
    const contactRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout contactRef={contactRef}>
            <Helmet>
                <title>LinearDev</title>
            </Helmet>
            <section className="container">
                <div className="section_one">
                    <div className="text_cont_section_one">
                        <div className="text_cont_title">
                            This is<span className="linear">LINEAR</span>
                        </div>
                        <div className="text_cont_desc">
                            Хороший дизайн виден сразу. Отличный дизайн
                            незаметен - «Джо сопрано»
                        </div>
                    </div>
                    <div className="image_car_container">
                        <img
                            className="image_car"
                            // style={{ width: "650px", height: "450px" }}
                            src="/img/Car.png"
                            alt="Car image."
                        />
                    </div>
                </div>
            </section>
            <section className="container">
                <video
                    className="video_bg_section_two"
                    autoPlay="autoplay"
                    loop="loop"
                    muted="muted"
                >
                    <source src="/img/bg_video.mp4" type="video/mp4"></source>
                </video>
                <div className="section_two">
                    <div className="text_cont_section_two">
                        <div className="title_section_two">
                            МЕЧТА ИЛИ РЕАЛЬНОСТЬ?
                        </div>
                        <div className="desc_section_two">
                            Члены нашей команды постигшие тонкости и изъяны
                            веб-индустрии, осуществят ваши мечты в реальность.
                        </div>
                    </div>
                    <div className="plates_section_two">
                        <MainPagePlates
                            title={"Linear.js"}
                            description={
                                "Client-Side Serverless JavaScript framework"
                            }
                        />
                        <MainPagePlates
                            title={"New awensome method of developing"}
                            description={
                                "We created amasing site fast and easy"
                            }
                        />
                        <MainPagePlates
                            title={"New awensome method of developing"}
                            description={
                                "We created amasing site fast and easy"
                            }
                        />
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="text_cont_section_three">
                    <div className="title_section_three">
                        Trusted by 1000s of Australian buisinesses over the last
                        16 years
                    </div>
                    <div className="desc_section_three">
                        Webprofits is one of the largest inde pendent digital
                        agencies in Australia. Launched in 2006, we have helped
                        thousands of Australian businesses drive growth through
                        digital marketing. We have a team of 80+ performance
                        marketers with specialists in strategy, creative, paid
                        media, SEO, content, copywriting, design, development
                        and project management - everything you need to execute
                        a high-impact digital marketing campaign.
                    </div>
                    <div className="contactus_cont_mainpage">
                        <div className="contactus_title_mainpage">
                            Contact Us
                        </div>
                        <img src="/img/Vector.png" className="vector_img"></img>
                    </div>
                </div>
            </section>
            <section className="container">
                <ContactForm contactRef={contactRef} />
            </section>
        </Layout>
    );
};

export default Main;
