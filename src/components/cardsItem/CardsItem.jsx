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
                <div className="cardsItem__wrappCorner" onMouseLeave={() => activeHover(true)}>
                    <div className={
                        active ? "activeCorner cardsItem__corner" : "cardsItem__corner"
                            &&
                            disabledCard ? "disabledCorner cardsItem__corner" : "cardsItem__corner"
                    } onClick={(e) => activeTogle(e, true)}></div>
                    <div className={
                        active ? "activeRectangle cardsItem__rectangle" : "cardsItem__rectangle"
                            &&
                            disabledCard ? "disabledRectangle cardsItem__rectangle" : "cardsItem__rectangle"
                    } onClick={(e) => activeTogle(e, true)}> <h2 className={hover ? "activeHoverText cardsItem__subtitle" : "cardsItem__subtitle"
                        &&
                        disabledCard ? "disabledText cardsItem__subtitle" : "cardsItem__subtitle"
                    } >{hover ? hoverText : subtitle}</h2></div>
                </div>
                <div className="cardsItem__wrappCards" onMouseLeave={() => activeHover(true)}>
                    <div className={
                        active ? "activeCard cardsItem__card" : "cardsItem__card"
                            &&
                            disabledCard ? "disabledWrapp cardsItem__card" : "cardsItem__card"
                    } onClick={(e) => activeTogle(e, true)}>
                        <h3 className={disabledCard ? "disabledText cardsItem__title" : "cardsItem__title"}>{title}</h3>
                        <p className={disabledCard ? "disabledText cardsItem__taste" : "cardsItem__taste"}>{taste}</p>
                        <div className="cardsItem__portionsWrapp">
                            <p className={disabledCard ? "disabledText cardsItem__portions" : "cardsItem__portions"}>{portions}</p> &nbsp;
                            <p className={disabledCard ? "disabledText cardsItem__portionsDescr" : "cardsItem__portionsDescr"}>{portionsDescr}</p>
                        </div>
                        <div className={disabledCard ? "disabledText cardsItem__giftWrapp" : "cardsItem__giftWrapp"}>
                            <div className="cardsItem__gift"> {gift === '' ? null : gift}
                                {gift === '' ? null : `\u00A0`}
                            </div>
                            <p className="cardsItem__giftDescr">{giftDescr}</p>

                        </div>
                        <p className={disabledCard ? "disabledText cardsItem__giftDescrOptions" : "cardsItem__giftDescrOptions"}>{giftDescrOptions} </p>
                        <img src={cat} alt="cat" className={disabledCard ? "disabledImg cardsItem__img" : "cardsItem__img"} />
                        <div className={
                            active ? "activeRound  cardsItem__round" : "cardsItem__round" &&
                                disabledCard ? "disabledRound cardsItem__round" : "cardsItem__round"}>
                            <div className="cardsItem__weight">{weight}</div>
                            <div className="cardsItem__kg">кг</div>
                        </div>
                    </div>
                </div>
                <div className="cardsItem__wrappBuyDescr">
                    <p className={disabledCard ? "disabledBuyDescr cardsItem__buyDescr" : "cardsItem__buyDescr"}>{
                        active ? activeTaste : buyDescr &&
                            disabledCard ? disBuyDescr : buyDescr
                    }</p> &nbsp;
                    <a onClick={(e) => activeTogle(e, true)} href="!#">  {
                        active ? null : buy
                            &&
                            disabledCard ? null : buy
                    }</a>
                </div>
            </div>
        </div>
    )
}

export default CardsItem


