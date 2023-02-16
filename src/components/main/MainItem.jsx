import cat from 'src/assets/img/cat.svg';
import './mainItem.scss';

const MainItem = ({ id, title, subtitle, composite, portions, descr, weight }) => {
    // console.log(id)
    return (
        <div className="mainItem">
            <div className="mainItem__wrapp">
                <div className="mainItem__corner"></div>
                <div className="mainItem__subtitle">{subtitle}</div>
                <h1 className="mainItem__title">{title}</h1>
                <div className="mainItem__composite">{composite}</div>
                <div className="mainItem__descr">{[portions, <br key={id} />, descr]}</div>
                <img src={cat} alt="cat" className="mainItem__img" />
                <div className="mainItem__round">
                    <span>{weight}</span>
                    <p>кг</p>
                </div>
            </div>
            <p className="mainItem__buyDescr">Чего сидишь? Порадуй котэ, <a href="!#">  купи.</a></p>
        </div>

    )
}

export default MainItem


