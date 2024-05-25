import './ProjectCard.styles.css'

const ProjectCard = ({
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
    return (
        <div className="pr-card" onClick={projectsNav}>
            <div className="pr-card-img">
                <img src={img} alt={altimg} />
            </div>
            <div className="pr-card-info-box">
                <div className="pr-card-name">{name}</div>
                <div className="pr-card-desc">{desc}</div>
                <div className="pr-card-platform">
                    {ios && (
                        <img
                            src="/icons/apple.svg"
                            alt="apple"
                            style={{ marginRight: "10px" }}
                        />
                    )}
                    {android && (
                        <img
                            src="/icons/android.svg"
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
                            src="/icons/web.svg"
                            alt="web"
                            style={{ marginRight: "10px" }}
                        />
                    )}
                    {image && <img src="/icons/image.svg" alt="image" />}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard