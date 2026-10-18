import './App.css'
import { products } from './data/products'

const kbju = [
  { id: 'kcal', name: 'Калории', value: 0 },
  { id: 'protein', name: 'Белок', value: 0 },
  { id: 'fat', name: 'Жиры', value: 0 },
  { id: 'carbs', name: 'Углеводы', value: 0 }
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>КБЖУ-трекер</h1>
        <p className='date'>26 сентября</p>
      </header>

      <section className='totals'>
        {kbju.map((item) => (
          <div className='total' key={item.id}>
            <span className='total-value'>{item.value}</span>
            <span className='total-label'>{item.name}</span>
          </div>
        ))}
      </section>

      <main className='meals'>
        <h2>Приёмы пищи</h2>
        <ul className='products'>
          {products.map((product) => (
            <li className='product' key={product.id}>
              <span>{product.name}</span>
              <span>{product.kcal} ккал</span>
            </li>
          ))}
        </ul>
      </main>

      <footer>
        <button className="add">Добавить продукт</button>
      </footer>
    </div>
  )
}
export default App