import './Branches.styles.css'

const Branches = ({dep, pos, sum, exp, fields}) => {
    return (
        <div className='branches-cont'>
            <h5 className='branch-dep'>{dep}</h5>
            {fields.map((field, index) => (
                <div key={index} className='branches-info-box'>
                    <h1 className='branch-pos'>{field.pos}</h1>
                    <h3>Summary</h3>
                    <p>{field.sum}</p>
                    <h3>Expertise</h3>
                    <p>{field.exp}</p>
                </div>
            ))}
        </div>
    )
}

export default Branches