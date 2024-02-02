import { useParams } from "react-router-dom";
import { projectsArr } from "../../data/projects";
import Layout from "../Layout/Layout";

import "./ProjectsInfo.css";

const ProjectsInfo = () => {
    const { id } = useParams();

    return (
        <Layout>
            <div className="container">
                <div className="pr_info_section">
                    <div>{projectsArr[id].name}</div>
                    <div className="pr_info_fulldesc">
                        {projectsArr[id].fulldesc}
                    </div>
                    <div>Introduction</div>
                    <div className="pr_info_intro">{projectsArr[id].intro}</div>
                    <div>Problem</div>
                    <div>{projectsArr[id].prob}</div>
                    <div>Solution</div>
                    <div>Benefits</div>
                    <div>Conclusion</div>
                </div>
            </div>
        </Layout>
    );
};

export default ProjectsInfo;
