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
        <div className="cardsItem" onMouseLeave={() => activeHover(true)}>
            <div className={
                //  Переключения стиля карточек
                active ? "active cardsItem__wrapp" : "cardsItem__wrapp" &&
                    disabledCard ? "disabledWrapp cardsItem__wrapp" : "cardsItem__wrapp"
            } onClick={(e) => activeTogle(e, true)}>
                <div className={
                    active ? "activeCorner  cardsItem__corner" : "mainItem__corner" &&
                        disabledCard ? "disabledCorner cardsItem__corner" : "cardsItem__corner"}></div>
                <div className={
                    hover ? "activeHoverText cardsItem__subtitle" : "cardsItem__subtitle" &&
                        disabledCard ? "disabledText cardsItem__subtitle" : "cardsItem__subtitle"}>{hover ? hoverText : subtitle}</div>
                <h1 className={disabledCard ? "disabledText cardsItem__title" : "cardsItem__title"}>{title}</h1>
                <div className={disabledCard ? "disabledText cardsItem__taste" : "cardsItem__taste"}>{taste}</div>
                <div className={disabledCard ? "disabledText cardsItem__descr" : "cardsItem__descr"}>{[portions, <br key={id} />, descr]}</div>
                <img src={cat} alt="cat" className={disabledCard ? "disabledImg cardsItem__img" : "cardsItem__img"} />
                <div className={
                    active ? "activeRound  cardsItem__round" : "cardsItem__round" &&
                        disabledCard ? "disabledRound cardsItem__round" : "cardsItem__round"}>
                    <span>{weight}</span>
                    <p>кг</p>
                </div>
            </div>
            <p className={disabledCard ? "disabledBuyDescr cardsItem__buyDescr" : "cardsItem__buyDescr"}>{
                active ? activeTaste : buyDescr &&
                    disabledCard ? disBuyDescr : buyDescr
            } <a onClick={(e) => activeTogle(e, true)} href="!#">  {
                active ? null : buy &&
                    disabledCard ? null : buy
            }</a></p>
        </div>
    )
}

export default CardsItem


