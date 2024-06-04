import './Card.scss'
const card = ({card}) => {
    return (
        <>
            <li className='card-item'>
                {
                    card.image && 
                    <img className='card-cover' src={card.image} />
                        
                    
                }
                {card.title}
            </li>
        </>
    );
};

export default card;