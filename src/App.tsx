import { useState } from 'react'
import './App.css'
import { products } from './data/products'

const kbju = [
  { id: 'kcal', name: 'Калории', value: 0 },
  { id: 'protein', name: 'Белок', value: 0 },
  { id: 'fat', name: 'Жиры', value: 0 },
  { id: 'carbs', name: 'Углеводы', value: 0 }
]

function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('male')
  const [activity, setActivity] = useState('1.2')

  return (
    <div className="app">
      <header className="header">
        <h1>КБЖУ-трекер</h1>
        <p className='date'>18 октября</p>
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
        <section className='calc'>
          <h2>Моя норма</h2>
          <div className='field'>
            <label htmlFor='weight'>Вес, кг</label>
            <input
              id='weight'
              type='number'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className='field'>
            <label htmlFor='height'>Рост, см</label>
            <input
              id='height'
              type='number'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className='field'>
            <label htmlFor='age'>Возрат</label>
            <input
              id='age'
              type='number'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className='field'>
            <label htmlFor='gender'>Пол</label>
            <select
              id='gender'
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value='male'>Мужской</option>
              <option value='female'>Женский</option>
            </select>
          </div>

          <div className='field'>
            <label htmlFor='activity'>Ваша активность</label>
            <select
              id="activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value='1.2'>Минимальная(Сидячий образ жизни)</option>
              <option value='1.375'>Низкая</option>
              <option value='1.55'>Средняя</option>
              <option value='1.725'>Высокая</option>
              <option value='1.9'>Очень высокая</option>
            </select>
          </div>

        </section>
        <h2>Приёмы пищи</h2>
        <ul className='products' role="list">
          {products.map((product) => (
            <li className='product' role="listitem" key={product.id}>
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