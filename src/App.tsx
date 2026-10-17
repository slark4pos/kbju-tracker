
import './App.css'

// useState на будущее когда будем уже полноценно влиять на value
const kbju = ([
  {id: 'kcal', name: 'Калории', value: 0},
  {id: 'protein', name: 'Белок', value: 0},
  {id: 'fat', name: 'Жиры', value: 0},
  {id: 'carbs', name: 'Углеводы', value: 0}
])

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
        <div className='empty'>Тут пока пусто</div>
      </main>

      <footer>
        <button className="add">Добавить продукт</button>
      </footer>
    </div>
  )
}
export default App