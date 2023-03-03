import { useState } from 'react';

import useToggles from 'src/hooks/useToggles';
import cat from 'src/assets/img/cat.svg';
import './cardsItem.scss';

const CardsItem = ({ id, title, subtitle, hoverText, activeTaste, buyDescr, disBuyDescr, disabledCard, taste, portions, descr, weight, buy }) => {

    //  Переключения стиля карточек
    const [active, setActive] = useState(false);
    const [hover, setHover] = useState(false);

    const { activeTogle, activeHover } = useToggles(active, setActive, setHover);


    return (
        <div className="cardsItem">
            <div className="cardsItem__wrapp">
                <div className="cardsItem__wrappCorner">
                    <div className="cardsItem__corner"></div>
                    <div className="cardsItem__rectangle"> <h2>Сказочное заморское яство</h2></div>
                </div>
                <div className="cardsItem__wrappCards">
                    <div className="cardsItem__card">
                        <h3 className="cardsItem__title">{title}</h3>
                        <p className="cardsItem__taste">{taste}</p>
                        <p className="cardsItem__portions">{portions}</p>
                        <p className="cardsItem__descr">{descr}</p>
                        <img src={cat} alt="" className="cardsItem__img" />
                        <div className="cardsItem__round">
                            <div className="cardsItem__weight">{weight}</div>
                            <div className="cardsItem__kg">кг</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsItem


