import React, { useState, useCallback, useEffect } from 'react';
import Card from './Card';
import update from 'immutability-helper';
import {connect} from 'react-redux';
// import homes from '../../json/game-of-thrones';

const style = {
    width: 400,
}




const Container = (props) => {

    const house =props.match.params.homename;

    const home =props.homes.filter((el)=>{return el.name == house});
    const peoples =home[0].people;



    {
        const [cards, setCards] = useState(peoples);

        useEffect(() => {
            setCards(peoples);
        },[house]);



        const moveCard = useCallback(
            (dragIndex, hoverIndex) => {
                const dragCard = cards[dragIndex]
                setCards(
                    update(cards, {
                        $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
                    }),
                )
            },
            [cards],
        )
        const renderCard = (card, index) => {
            return (
                <Card
                    key={index}
                    index={index}
                    id={card.id}
                    text={card.name}
                    moveCard={moveCard}
                    description={card.description}
                    house ={house}
                />
            )
        }

        return (

            <div className="w-100">
                <h2 className="text-danger text-center">Peoples in House</h2>
                <h2 className="text-danger text-center">{house}</h2>
                <div style={style} id="block">{cards.map((card, i) => renderCard(card, i))}</div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        homes: state.get('houses'),

    };
};
export default connect(mapStateToProps)(Container)
