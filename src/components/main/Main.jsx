import MainItem from './MainItem';
import './main.scss';

const MainLayout = () => {

    const data = {
        'cards': [
            {
                "id": 1,
                "title": 'Нямушка',
                'subtitle': 'Сказочное заморское яство',
                "taste": 'С фуа-гра',
                'portions': '10 порций',
                'descr': 'мышь в подарок',
                "weight": '0,5',
                "buyDescr": "чего сидишь? Порадуй котэ,",
                "hoverText": "Котэ не одобряет?",
                "descrDish": "Чего сидишь? Порадуй котэ",
                "activeDish": "Печень утки разварная с артишоками.",
                "disabledText": "Печалька, с фуа-гра закончился.",
                "buy": "купить."
            },
            {
                "id": 2,
                "title": 'Нямушка',
                'subtitle': 'Сказочное заморское яство',
                "taste": 'С рыбой',
                'portions': '40 порций',
                'descr': '2 мыши в подарок',
                "weight": 2,
                "hoverText": "Котэ не одобряет?",
                "descrDish": "Чего сидишь? Порадуй котэ",
                "activeDish": "Головы щучьи с чесноком да свежайшая сёмгушка.",
                "disabledText": "Печалька, с рыбой закончился.",
                "buy": "купить."
            },
            {
                "id": 3,
                "title": 'Нямушка',
                'subtitle': 'Сказочное заморское яство',
                "taste": 'С курой',
                'portions': '100 порций',
                'descr': '5 мышей в подaрок заказчик доволен',
                "weight": ' 5',
                "hoverText": "Котэ не одобряет?",
                "descrDish": "Чего сидишь? Порадуй котэ",
                "activeDish": "Филе из цыплят с трюфелями в бульоне.",
                "disabledText": "Печалька, с курой закончился.",
                "buy": "купить."
            }
        ]
    }

    const render = (data) => {
        return (
            data.cards.map(({ id, title, subtitle, hoverText, activeDish, descrDish, disabledText, taste, portions, descr, weight, buy }) => {
                return <MainItem
                    key={id}
                    id={id}
                    title={title}
                    subtitle={subtitle}
                    hoverText={hoverText}
                    activeDish={activeDish}
                    descrDish={descrDish}
                    taste={taste}
                    disabledText={disabledText}
                    portions={portions}
                    descr={descr}
                    weight={weight}
                    buy={buy}
                />
            })
        )
    }

    const elements = render(data)

    return (
        <section className="main">
            <div className="main__wrapper">
                <h2 className="main__title">Ты сегодня покормил кота?</h2>
                {elements}
            </div>
        </section>

    )
}

export default MainLayout