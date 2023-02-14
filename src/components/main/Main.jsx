import './main.scss';

const Main = () => {
    return (
        <section className="main">
            <h1 className="main__title">Ты сегодня покормил кота?</h1>
            <div className="main__item">
                <div className="main__item-title">
                    <p>Сказочное заморское яство</p>
                    <h2>Нямушка</h2>
                    <p>с фуа-гра</p>
                    <p>10 порций</p>
                    <p>мышь в подарок</p>
                </div>
                <img src="src/assets/cat.webP" alt="" className="cat" />
            </div>
            <div className="main__item">
                <div className="main__item-title">
                    <p>Сказочное заморское яство</p>
                    <h2>Нямушка</h2>
                    <p>с рыбой</p>
                    <p>40 порций</p>
                    <p>2 мыши в подарок</p>
                </div>
                <img src="" alt="" className="cat" />
            </div>
            <div className="main__item">
                <div className="main__item-title">
                    <p>Сказочное заморское яство</p>
                    <h2>Нямушка</h2>
                    <p>с курой</p>
                    <p>100 порций</p>
                    <p>5 мышей в подарок</p>
                    <p>Заказчик доволен</p>
                </div>
                <img src="" alt="" className="cat" />
            </div>
        </section>
    )
}

export default Main


