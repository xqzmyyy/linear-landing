import './HomeCard.styles.css'

const HomeCard = ({title, text}) => {
    return (
        <div className='text-card'>
            <span className='text-card-title'>{title}</span>
            <span className='text-card-text'>{text}</span>
        </div>
    )
}

export default HomeCard