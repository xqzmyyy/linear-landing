import { useEffect } from "react";
import Branches from "../../components/Branches/Branches";
import Layout from "../../components/Layout/Layout";
import "./GetLinear.css";
import { Helmet } from "react-helmet";

const GetLinear = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <Helmet>
                <title>Contacts | LinearDev</title>
            </Helmet>
            <section className="container">
                <div className="contacts_main_container">
                    <div className="contacts_cont">
                        <div className="section_title">Contacts</div>
                        <div className="contacts_desription">
                            If you have any questions, problems with site,
                            order, payment or if you want to cooperate -{" "}
                            <a
                                className="contacts_cont_link"
                                href=""
                                alt="contact us!"
                            >
                                contact us!
                            </a>
                        </div>
                        <div className="contacts_num">
                            Phone: 000-000-00-01 / 000-000-00-02 / 000-000-00-03
                        </div>
                        <div className="contacts_num">
                            E-mail: lineardev@gmail.com
                        </div>
                    </div>
                    <div className="contacts_social_media_cont">
                        <div className="contacts_sm_title">
                            Our social media:
                        </div>
                        <div className="contacts_sm_links">
                            <a
                                className="contacts_cont_link"
                                href="https://twitter.com/lineardev_ua"
                                target="_blank"
                            >
                                Twitter
                            </a>
                            <a
                                className="contacts_cont_link"
                                href="https://www.youtube.com/channel/UCy0tsQ6MYojuVISG8C3JxkA"
                                target="_blank"
                            >
                                YouTube
                            </a>
                            <a
                                className="contacts_cont_link"
                                href="https://www.linkedin.com/company/lineardev/about/"
                                target="_blank"
                            >
                                LinkedIn
                            </a>
                            <a
                                className="contacts_cont_link"
                                href="https://www.instagram.com/lineardev.ua/"
                                target="_blank"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="section_title">Our branches</div>
                <Branches></Branches>
            </section>
        </Layout>
    );
};

export default GetLinear;
