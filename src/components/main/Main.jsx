import MainItem from './MainItem';
import './main.scss';

const MainLayout = () => {

    const data = {
        'cards': [
            {
                "id": 1,
                "title": 'Нямушка',
                'subtitle': 'Сказочное заморское яство',
                "composite": 'С фуа-гра',
                'portions': '10 порций',
                'descr': 'мышь в подарок',
                "weight": '0,5',
                "buyDescr": "чего сидишь? Порадуй котэ,",
                "hoverText": "Котэ не одобряет?"
            },
            {
                "id": 2,
                "title": 'Нямушка',
                'subtitle': 'Сказочное заморское яство',
                "composite": 'С рыбой',
                'portions': '40 порций',
                'descr': '2 мыши в подарок',
                "weight": 2,
                "hoverText": "Котэ не одобряет?"
            },
            {
                "id": 3,
                "title": 'Нямушка',
                'subtitle': 'Сказочное заморское яство',
                "composite": 'С курой',
                'portions': '100 порций',
                'descr': '5 мышей в подaрок заказчик доволен',
                "weight": ' 5',
                "hoverText": "Котэ не одобряет?"
            }
        ]
    }

    const render = (data) => {
        return (
            data.cards.map(({ id, title, subtitle, hoverText, composite, portions, descr, weight }) => {
                return <MainItem
                    key={id}
                    id={id}
                    title={title}
                    subtitle={subtitle}
                    hoverText={hoverText}
                    composite={composite}
                    portions={portions}
                    descr={descr}
                    weight={weight}
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