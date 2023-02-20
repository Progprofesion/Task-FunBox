import Cards from '../cards/Cards';

import './app.scss';

const App = () => {

    return (
        <section className='app'>
            <div className="shadow">
                <div className="container">
                    <Cards />
                </div>
            </div>
        </section>
    )
}

export default App