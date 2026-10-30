import { useState } from 'react'
import './App.css'
import { products } from './data/products'
import { calculateNorm } from './utils/calories'
import type { DiaryEntry, Product } from './types'


function App() {

  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('male')
  const [activity, setActivity] = useState('1.2')
  const [query, setQuery] = useState('')
  const [diary, setDiary] = useState<DiaryEntry[]>([])

  function addProduct(product: Product) {
    const entry: DiaryEntry = {
      id: crypto.randomUUID(),
      product: product,
      grams: 100
    }
    setDiary([...diary, entry])
  }

  const isFilled = weight !== '' && height !== '' && age !== ''

  const norm = isFilled ? calculateNorm({
    weight: Number(weight),
    height: Number(height),
    age: Number(age),
    gender: gender,
    activity: Number(activity)
  }) : null

  const foundProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  )

  const totalKcal = diary.reduce((sum, entry) => sum + entry.product.kcal * entry.grams / 100, 0)
  const totalProtein = diary.reduce((sum, entry) => sum + entry.product.protein * entry.grams / 100, 0)
  const totalFat = diary.reduce((sum, entry) => sum + entry.product.fat * entry.grams / 100, 0)
  const totalCarbs = diary.reduce((sum, entry) => sum + entry.product.carbs * entry.grams / 100, 0)

  const kbju = [
  { id: 'kcal', name: 'Калории', value: Math.round(totalKcal) },
  { id: 'protein', name: 'Белок', value: Math.round(totalProtein) },
  { id: 'fat', name: 'Жиры', value: Math.round(totalFat) },
  { id: 'carbs', name: 'Углеводы', value: Math.round(totalCarbs) }
]

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
          <h2>Мои данные</h2>
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
            <label htmlFor='age'>Возраст</label>
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

          {isFilled
            ? <p>Ваша норма: {norm} ккал</p>
            : <p className='hint'>Заполните вес, рост и возраст</p>}

        </section>
        <h2>Приёмы пищи</h2>
        <ul className='field' role='list'>
          {diary.map((entry) => (
            <li className='product' key={entry.id}>
              <span>{entry.product.name}</span>
              <span>{entry.grams}</span>
              <span>{Math.round(entry.product.kcal * entry.grams / 100)}</span>
            </li>
          ))}
        </ul>
        
        {diary.length === 0 && <p className='empty'>Пока ничего не добавлено</p>}

        <h2>Продукты</h2>
        <div className='field'>
          <label htmlFor='search'>Поиск</label>
          <input
            id='search'
            type='search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <ul className='products' role="list">
          {foundProducts.map((product) => (
            <li className='product' role="listitem" key={product.id}>
              <button onClick={() => addProduct(product)}>+ 100 г</button>
              <span>{product.name}</span>
              <span>{product.kcal} ккал</span>
            </li>
          ))}
        </ul>

        {foundProducts.length === 0 && <p className='empty'>Ничего не найдено</p>}

      </main>

      <footer>
        <button className="add">Добавить продукт</button>
      </footer>
    </div>
  )
}
export default App