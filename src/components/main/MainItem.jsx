import { useState } from 'react';

import cat from 'src/assets/img/cat.svg';
import './mainItem.scss';

const MainItem = ({ id, title, subtitle, hoverText, activeDish, descrDish, disabledText, taste, portions, descr, weight, buy }) => {

    const [active, setActive] = useState(false);
    const [hover, setHover] = useState(false);
    const [disabled, setDisabled] = useState(true)

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
        !disabled ? <div className="mainItem" onMouseLeave={() => activeHover(true)}>
            <div className={
                active ? "active mainItem__wrapp" : "mainItem__wrapp"} onClick={(e) =>
                    activeTogle(e, true)}>
                <div className={
                    active ? "activeCorner  mainItem__corner" : "mainItem__corner"}>
                </div>
                <div className={
                    hover ? "activeHoverText mainItem__subtitle" : "mainItem__subtitle"}>{
                        hover ? hoverText : subtitle}
                </div>
                <h1 className="mainItem__title">{title}</h1>
                <div className="mainItem__taste">{taste}</div>
                <div className="mainItem__descr">{[portions, <br key={id} />, descr]}</div>
                <img src={cat} alt="cat" className="mainItem__img" />
                <div className={
                    active ? "activeRound  mainItem__round" : "mainItem__round"}>
                    <span>{weight}</span>
                    <p>кг</p>
                </div>
            </div>
            <p className="mainItem__buyDescr">{
                active ? activeDish : descrDish} <a onClick={(e) => activeTogle(e, true)} href="!#">  {active ? null : buy}</a></p>
        </div>
            //  Можно написать и без рендера отдельных карточек disabled, но код будет плохо читаем.
            :
            <div className="mainItem">
                <div className="disabledWrapp mainItem__wrapp">
                    <div className="disabledCorner mainItem__corner"></div>
                    <div className="disabledText mainItem__subtitle">{subtitle}</div>
                    <h1 className="disabledText mainItem__title">{title}</h1>
                    <div className="disabledText mainItem__taste">{taste}</div>
                    <div className="disabledText mainItem__descr">{[portions, <br key={id} />, descr]}</div>
                    <img src={cat} alt="cat" className="disabledImg mainItem__img" />
                    <div className="disabledRound mainItem__round">
                        <span>{weight}</span>
                        <p>кг</p>
                    </div>
                </div>
                <p className="disabledBuyDescr mainItem__buyDescr">{disabledText} <a onClick={(e) => activeTogle(e, true)} href="!#"> </a></p>
            </div>

    )
}

export default MainItem


