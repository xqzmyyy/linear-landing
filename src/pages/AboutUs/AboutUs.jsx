import { useNavigate } from "react-router-dom";
import BlogPlates from "../../components/BlogPlates/BlogPlates";
import Layout from "../../components/Layout/Layout";
import "./AboutUs.css";
import { useCallback, useEffect, useState } from "react";
import { platesArr } from "../../data/posts";
import { Helmet } from "react-helmet";

const platesPerPage = 5;

const AboutUS = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const [next, setNext] = useState(platesPerPage);

    const handleMorePlates = useCallback(() => {
        setNext((prev) => prev + platesPerPage);
    }, []);

    return (
        <Layout>
            <Helmet>
                <title>Linear Blog</title>
            </Helmet>
            <div className="container">
                <div className="blog_page_main_cont">
                    <div className="title_blog_page">Linear Blog</div>
                    <div>
                        <div className="blog_plates_wrapper">
                            {platesArr?.slice(0, next)?.map((e, key) => {
                                return (
                                    <BlogPlates
                                        key={key}
                                        handlerClick={() => {
                                            navigate(`/blog/${key}`);
                                        }}
                                        img={e.img}
                                        title={e.title}
                                        preview={e.preview}
                                        date={e.date}
                                        readTime={e.readTime}
                                    />
                                );
                            })}
                        </div>
                        {next < platesArr?.length && (
                            <button
                                className="load_more_btn"
                                onClick={handleMorePlates}
                            >
                                Load more
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AboutUS
