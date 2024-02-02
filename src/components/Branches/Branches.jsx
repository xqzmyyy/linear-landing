import { memo, useState } from "react";
import "./Branches.css";

const InfoSection = memo(({ title, summ, expert }) => {
    return (
        <div>
            <div className="branches_info">
                <div className="branch_title">{title}</div>
                <div className="branch_description">
                    <div className="branch_desc_subtitle">Summary</div>
                    <div className="branch_subdesc">{summ}</div>
                </div>
                <div className="branch_description">
                    <div className="branch_desc_subtitle">Expertise</div>
                    <div className="branch_subdesc">{expert}</div>
                </div>
            </div>
        </div>
    );
});

const Branches = () => {
    const [branch, setBranch] = useState("dev");

    return (
        <div>
            <div className="buttons_showdepartment_cont">
                <button
                    className={`button_showdepartment ${
                        branch === "dev" ? `active` : ``
                    }`}
                    onClick={() => setBranch("dev")}
                >
                    Development
                </button>
                <button
                    className={`button_showdepartment ${
                        branch === "des" ? `active` : ``
                    }`}
                    onClick={() => setBranch("des")}
                >
                    Design
                </button>
                <button
                    className={`button_showdepartment ${
                        branch === "mark" ? `active` : ``
                    }`}
                    onClick={() => setBranch("mark")}
                >
                    Marketing
                </button>
            </div>
            {/* <div className="mobile_list_dep">
                <select
                    onChange={(e) => setBranch(e.target.value)}
                    value={branch}
                >
                    <option value={"dev"}>Development</option>
                    <option value={"des"}>Design</option>
                    <option value={"mark"}>Marketing</option>
                </select>
            </div> */}
            <div>
                {branch === "dev" && (
                    <div className="branches_cont">
                        <div className="branches_department">Development</div>
                        <InfoSection
                            title={"React.js Engineer"}
                            summ={
                                "Front-end developer with a focus on React.js, specializing in creating user-friendly and interactive web applications."
                            }
                            expert={
                                "Proficient in React.js, JavaScript, HTML, CSS, and various frameworks, building responsive and performant web applications."
                            }
                        />
                        <InfoSection
                            title={"Lil DevOps"}
                            summ={
                                "Seasoned DevOps leader with extensive experience managing and optimizing cloud infrastructure and application deployments."
                            }
                            expert={
                                "Masterfully orchestrate cloud environments, utilizing AWS, Azure, or GCP, to achieve seamless application delivery and continuous improvement."
                            }
                        />
                    </div>
                )}
                {branch === "des" && (
                    <div className="branches_cont">
                        <div className="branches_department">Design</div>
                        <InfoSection
                            title={"UI/UX Designer"}
                            summ={
                                "Creative and experienced UI/UX &amp; Branding Designer with a passion for crafting user-centric and visually appealing designs that enhance brand identity."
                            }
                            expert={
                                "Expert in utilizing Figma, Adobe Creative Suite, and UI/UX design principles to create intuitive, consistent, and aesthetically pleasing user interfaces and branding experiences."
                            }
                        />
                    </div>
                )}
                {branch === "mark" && (
                    <div className="branches_cont">
                        <div className="branches_department">Marketing</div>
                        <InfoSection
                            title={"Marketer"}
                            summ={
                                "I always very welcome an opportunity to create Web Solutiona and a unique User Experience with custom, well-designed, and user-friendly interfaces that help people reach their goals fast."
                            }
                            expert={
                                "Developing Web applications with React.js, Node.js, PHP  Creating UX and Layouts, styling UI Components, and working with API Developeing OpenAPI-based Back-ends. Implementing automated test sets for the user interfaceand backend quality assurance purposes. Enabling Quiality Gates approach. Wrining Unit tests & Performing code clean up routines."
                            }
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Branches;
