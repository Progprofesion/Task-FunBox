import CardsItem from '../cardsItem/CardsItem';
import './cards.scss';

const Cards = () => {

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
                "buyDescr": "Чего сидишь? Порадуй котэ,",
                "hoverText": "Котэ не одобряет?",
                "descrTaste": "Чего сидишь? Порадуй котэ",
                "activeTaste": "Печень утки разварная с артишоками.",
                "disBuyDescr": "Печалька, с фуа-гра закончился.",
                "disabledCard": false,
                "buy": "купи."
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
                "buyDescr": "Чего сидишь? Порадуй котэ,",
                "activeTaste": "Головы щучьи с чесноком да свежайшая сёмгушка.",
                "disBuyDescr": "Печалька, с рыбой закончился.",
                "disabledCard": false,
                "buy": "купи."
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
                "buyDescr": "Чего сидишь? Порадуй котэ,",
                "activeTaste": "Филе из цыплят с трюфелями в бульоне.",
                "disBuyDescr": "Печалька, с курой закончился.",
                "disabledCard": true,
                "buy": "купи."
            }
        ]
    }

    const render = (data) => {
        return (
            data.cards.map(({ id, title, subtitle, hoverText, activeTaste, buyDescr, disBuyDescr, disabledCard, taste, portions, descr, weight, buy }) => {
                return <CardsItem
                    key={id}
                    id={id}
                    title={title}
                    subtitle={subtitle}
                    hoverText={hoverText}
                    activeTaste={activeTaste}
                    buyDescr={buyDescr}
                    taste={taste}
                    disBuyDescr={disBuyDescr}
                    disabledCard={disabledCard}
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

export default Cards