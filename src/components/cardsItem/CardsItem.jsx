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
        <div className="cardsItem" key={id}>
            <div className="cardsItem__wrapp">
                <div className="cardsItem__wrappCorner" onMouseLeave={() => activeHover(true)}>
                    <div className={
                        active ? "cardsItem__corner_active cardsItem__corner" : "cardsItem__corner"
                            &&
                            disabledCard ? "cardsItem__corner_disabled cardsItem__corner" : "cardsItem__corner"
                    } onClick={(e) => activeTogle(e, true)}></div>
                    <div className={
                        active ? "cardsItem__rectangle_active cardsItem__rectangle" : "cardsItem__rectangle"
                            &&
                            disabledCard ? "cardsItem__rectangle_disabled cardsItem__rectangle" : "cardsItem__rectangle"
                    } onClick={(e) => activeTogle(e, true)}> <h2 className={
                        hover ? "cardsItem__subtitle_hover cardsItem__subtitle" : "cardsItem__subtitle"
                            &&
                            disabledCard ? "cardsItem__subtitle_disabled cardsItem__subtitle" : "cardsItem__subtitle"
                    } >{hover ? hoverText : subtitle}</h2></div>
                </div>
                <div className="cardsItem__wrappCards" onMouseLeave={() => activeHover(true)}>
                    <div className={
                        active ? "cardsItem__card_active cardsItem__card" : "cardsItem__card"
                            &&
                            disabledCard ? "cardsItem__card_disabled cardsItem__card" : "cardsItem__card"
                    } onClick={(e) => activeTogle(e, true)}>
                        <h3 className={disabledCard ? "cardsItem__title_disabled cardsItem__title" : "cardsItem__title"}>{title}</h3>
                        <p className={disabledCard ? "cardsItem__taste_disabled cardsItem__taste" : "cardsItem__taste"}>{taste}</p>
                        <div className="cardsItem__portionsWrapp">
                            <p className={disabledCard ? "cardsItem__portions_disabled cardsItem__portions" : "cardsItem__portions"}>{portions}</p> &nbsp;
                            <p className={disabledCard ? "cardsItem__portionsDescr_disabled cardsItem__portionsDescr" : "cardsItem__portionsDescr"}>{portionsDescr}</p>
                        </div>
                        <div className={disabledCard ? "cardsItem__giftWrapp_disabled cardsItem__giftWrapp" : "cardsItem__giftWrapp"}>
                            <div className="cardsItem__gift"> {gift === '' ? null : gift}
                                {gift === '' ? null : `\u00A0`}
                            </div>
                            <p className="cardsItem__giftDescr">{giftDescr}</p>
                        </div>
                        <p className={disabledCard ? "cardsItem__giftDescrOptions_disabled cardsItem__giftDescrOptions" : "cardsItem__giftDescrOptions"}>{giftDescrOptions} </p>
                        <img src={cat} alt="cat" className={disabledCard ? "cardsItem__img_disabled cardsItem__img" : "cardsItem__img"} />
                        <div className={
                            active ? "cardsItem__round_active  cardsItem__round" : "cardsItem__round"
                                &&
                                disabledCard ? "cardsItem__round_disabled cardsItem__round" : "cardsItem__round"}>
                            <div className="cardsItem__weight">{weight}</div>
                            <div className="cardsItem__kg">кг</div>
                        </div>
                    </div>
                </div>
                <div className="cardsItem__wrappBuyDescr">
                    <p className={disabledCard ? "cardsItem__buyDescr_disabled cardsItem__buyDescr_disabled" : "cardsItem__buyDescr"}>{
                        active ? activeTaste : buyDescr
                            &&
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


