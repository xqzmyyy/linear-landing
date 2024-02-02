import { useParams } from "react-router-dom";
import "./BlogPage.css";
import { platesArr } from "../../data/posts";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout/Layout";

const BlogPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();

    console.log(platesArr[id]);

    return (
        <Layout>
            <Helmet>
                <title>{platesArr[id].title} | LinearDev</title>
            </Helmet>
            <div className="container">
                <div className="blog_page_cont">
                    <div className="blog_page_title">{platesArr[id].title}</div>
                    <div className="blog_page_date_time">
                        <div>{platesArr[id].date}</div>
                        <img className="time_img" src="/img/time-logo.svg" />
                        <div>{platesArr[id].readTime}</div>
                    </div>
                    <div className="blog_page_img">
                        <img
                            style={{ width: "50%" }}
                            src={platesArr[id].img}
                            alt=""
                        />
                    </div>
                    <div className="blog_page_text">
                        {platesArr[id].preview}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BlogPage;
