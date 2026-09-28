import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>КБЖУ-трекер</h1>
        <p className='date'>26 сентября</p>
      </header>

      <section className='totals'>
        <div className='total'>
          <span className='total-value'>0 </span>
          <span className='total-label'>Ккал</span>
        </div>
        <div className='total'>
          <span className='total-value'>0 </span>
          <span className='total-label'>Белки</span>
        </div>
        <div className='total'>
          <span className='total-value'>0 </span>
          <span className='total-label'>Жиры</span>
        </div>
        <div className='total'>
          <span className='total-value'>0 </span>
          <span className='total-label'>Углеводы</span>
        </div>
      </section>

      <main className='meals'>
        <h2>Приёмы пищи</h2>
        <div className='empty'></div>
      </main>

      <footer className='add'>
        <button className="add">Добавить продукт</button>.
      </footer>
    </div>
  )
}
export default App