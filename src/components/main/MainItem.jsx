import { useState } from 'react';

import cat from 'src/assets/img/cat.svg';
import './mainItem.scss';

const MainItem = ({ id, title, subtitle, hoverText, activeTaste, buyDescr, disabledText, disabledCard, taste, portions, descr, weight, buy }) => {

    const [active, setActive] = useState(false);
    const [hover, setHover] = useState(false);

    const activeTogle = (e) => {
        if (active) {
            setActive(false);
            e.preventDefault();
            setHover(false)
        } else {
            setActive(true);
            e.preventDefault();
        }
    }

    const activeHover = () => {
        if (active) {
            setHover(true)
        } else {
            setHover(false)
        }
    }

    return (
        <div className="mainItem" onMouseLeave={() => activeHover(true)}>
            <div className={
                active ? "active mainItem__wrapp" : "mainItem__wrapp" &&
                    disabledCard ? "disabledWrapp mainItem__wrapp" : "mainItem__wrapp"
            } onClick={(e) =>
                activeTogle(e, true)}>
                <div className={
                    active ? "activeCorner  mainItem__corner" : "mainItem__corner" &&
                        disabledCard ? "disabledCorner mainItem__corner" : "mainItem__corner"}></div>
                <div className={
                    hover ? "activeHoverText mainItem__subtitle" : "mainItem__subtitle" &&
                        disabledCard ? "disabledText mainItem__subtitle" : "mainItem__subtitle"}>{hover ? hoverText : subtitle}</div>
                <h1 className={disabledCard ? "disabledText mainItem__title" : "mainItem__title"}>{title}</h1>
                <div className={disabledCard ? "disabledText mainItem__taste" : "mainItem__taste"}>{taste}</div>
                <div className={disabledCard ? "disabledText mainItem__descr" : "mainItem__descr"}>{[portions, <br key={id} />, descr]}</div>
                <img src={cat} alt="cat" className={disabledCard ? "disabledImg mainItem__img" : "mainItem__img"} />
                <div className={
                    active ? "activeRound  mainItem__round" : "mainItem__round" &&
                        disabledCard ? "disabledRound mainItem__round" : "mainItem__round"}>
                    <span>{weight}</span>
                    <p>кг</p>
                </div>
            </div>
            <p className={disabledCard ? "disabledBuyDescr mainItem__buyDescr" : "mainItem__buyDescr"}>{
                active ? activeTaste : buyDescr &&
                    disabledCard ? disabledText : buyDescr
            } <a onClick={(e) => activeTogle(e, true)} href="!#">  {
                active ? null : buy &&
                    disabledCard ? null : buy
            }</a></p>
        </div>
    )
}

export default MainItem


