import { useState } from 'react';

import cat from 'src/assets/img/cat.svg';
import './mainItem.scss';

const MainItem = ({ id, title, subtitle, hoverText, composite, portions, descr, weight }) => {

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

    const activeHover = (e) => {
        if (active) {
            setHover(true)
        } else {
            setHover(false)
        }

    }

    return (
        <div className="mainItem" onMouseLeave={(e) => activeHover(e, true)}>
            <div className={active ? "active mainItem__wrapp" : "mainItem__wrapp"} onClick={(e) => {
                activeTogle(e, true)
            }}>
                <div className={active ? "activeCorner  mainItem__corner" : "mainItem__corner"}></div>
                <div className="mainItem__subtitle">{hover ? hoverText : subtitle}</div>
                <h1 className="mainItem__title">{title}</h1>
                <div className="mainItem__composite">{composite}</div>
                <div className="mainItem__descr">{[portions, <br key={id} />, descr]}</div>
                <img src={cat} alt="cat" className="mainItem__img" />
                <div className={active ? "activeRound  mainItem__round" : "mainItem__round"}>
                    <span>{weight}</span>
                    <p>кг</p>
                </div>
            </div>
            <p className="mainItem__buyDescr">Чего сидишь? Порадуй котэ, <a onClick={(e) => activeTogle(e, true)} href="!#">  купи.</a></p>
        </div>

    )
}

export default MainItem


