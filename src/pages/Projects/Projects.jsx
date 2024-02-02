import { Helmet } from "react-helmet";
import Layout from "../../components/Layout/Layout";
import "./Projects.css";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { projectsArr } from "../../data/projects";

const ProjectsSection = ({
    projectsNav,
    name,
    desc,
    img,
    altimg,
    android,
    ios,
    web,
    image,
}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pr_box" onClick={projectsNav}>
            <div className="pr_img">
                <img src={img} alt={altimg} />
            </div>
            <div className="pr_info_block">
                <div className="pr_name">{name}</div>
                <div className="pr_desc">{desc}</div>
                <div className="pr_platform">
                    {ios && (
                        <img
                            src="/img/apple.svg"
                            alt="apple"
                            style={{ marginRight: "10px" }}
                        />
                    )}
                    {android && (
                        <img
                            src="/img/android.svg"
                            alt="android"
                            style={{
                                marginRight: "10px",
                                width: "25px",
                                height: "25px",
                            }}
                        />
                    )}
                    {web && (
                        <img
                            src="/img/web.svg"
                            alt="web"
                            style={{ marginRight: "10px" }}
                        />
                    )}
                    {image && <img src="/img/image.svg" alt="image" />}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    // const navigate = useNavigate();

    return (
        <Layout>
            <Helmet>
                <title>Projects | LinearDev</title>
            </Helmet>
            <div className="container">
                <div className="projects_page">
                    <div className="title_projects_page">
                        You have to work hard and only then you will get results
                    </div>
                    <div className="projects_container">
                        {projectsArr.map((e, key) => {
                            return (
                                <ProjectsSection
                                    key={key}
                                    // projectsNav={() => {
                                    //     navigate(`/projects/${key}`);
                                    // }}
                                    img={e.img}
                                    altimg={e.altimg}
                                    name={e.name}
                                    desc={e.desc}
                                    android={e.android}
                                    ios={e.ios}
                                    web={e.web}
                                    image={e.image}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Projects;
