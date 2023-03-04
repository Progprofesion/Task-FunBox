import { useState } from 'react';

import useToggles from 'src/hooks/useToggles';
import cat from 'src/assets/img/cat.svg';
import './cardsItem.scss';

const CardsItem = ({ id, title, subtitle, hoverText, activeTaste, buyDescr, disBuyDescr, disabledCard, taste, portions, portionsDescr, gift, giftDescr, giftDescrOptions, weight, buy }) => {

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
                        <div className="cardsItem__portionsWrapp">
                            <p className="cardsItem__portions">{portions}</p> &nbsp;
                            <p className="cardsItem__portionsDescr">{portionsDescr}</p>
                        </div>
                        <div className="cardsItem__giftWrapp">
                            <div className="cardsItem__gift"> {gift === '' ? null : gift}
                                {gift === '' ? null : `\u00A0`}
                            </div>
                            <p className="cardsItem__giftDescr">{giftDescr}</p>

                        </div>
                        <p className="cardsItem__giftDescrOptions">{giftDescrOptions} </p>
                        <img src={cat} alt="" className="cardsItem__img" />
                        <div className="cardsItem__round">
                            <div className="cardsItem__weight">{weight}</div>
                            <div className="cardsItem__kg">кг</div>
                        </div>
                    </div>
                </div>
                <div className="cardsItem__wrappBuyDescr">
                    <p className="cardsItem__buyDescr">{buyDescr}</p> &nbsp;
                    <a href="!#" className="cardsItem__buy">{buy}</a>
                </div>
            </div>
        </div>
    )
}

export default CardsItem


