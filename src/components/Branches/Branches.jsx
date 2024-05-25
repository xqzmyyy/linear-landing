import './Branches.styles.css'

const Branches = ({dep, pos, sum, exp}) => {
    return (
        <div>
            <h5>{dep}</h5>
            <div>
                <span>{pos}</span>
                <span>Summary</span>
                <p>{sum}</p>
                <span>Expertise</span>
                <p>{exp}</p>
            </div>
        </div>
    )
}

export default Branches