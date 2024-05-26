import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout/Layout'
import { projectsArr } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { useEffect } from 'react'

import './Projects.styles.css'

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <Helmet>
                <title>Projects - LinearDev</title>
            </Helmet>
            <section className='projects-page-body'>
                <div className='projects-page-title'>You have to work hard and only then you will get results</div>
            </section>
            <section>
                {projectsArr.map((e, key) => {
                            return (
                                <ProjectCard
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
            </section>
        </Layout>
    )
}

export default Projects