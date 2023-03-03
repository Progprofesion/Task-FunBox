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
                'portions': 10,
                'portionsDescr': 'порций',
                'gift': '',
                'giftDescr': 'мышь в подарок',
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
                'portions': 40,
                'portionsDescr': 'порций',
                'gift': 2,
                'giftDescr': 'мыши в подарок',
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
                'portions': 100,
                'portionsDescr': 'порций',
                'gift': 5,
                'giftDescr': 'мышей в подaрок заказчик доволен',
                "weight": 5,
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
            data.cards.map(({ id, title, subtitle, hoverText, activeTaste, buyDescr, disBuyDescr, disabledCard, taste, portions, portionsDescr, gift, giftDescr, weight, buy }) => {
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
                    portionsDescr={portionsDescr}
                    gift={gift}
                    giftDescr={giftDescr}
                    weight={weight}
                    buy={buy}
                />
            })
        )
    }

    const elements = render(data)

    return (
        <section className="cards">
            <div className="cards__mainWrapp">
                <h1 className="cards__title">Ты сегодня покормил кота?</h1>
                <div className="cards__wrapper">
                    {elements}
                </div>
            </div>
        </section>

    )
}

export default Cards