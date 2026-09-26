import './App.css'

function App() {
  return (
    <div className="app">
        <header className="header"></header>
        <h1>КБЖУ-трекер</h1>
        <p className='date'></p> 25 сентября
      
      <section className='totals'></section>
        <div className='total'></div>
          <span className='total-value'></span> 0
          <span className='total-label'></span> Ккал
        <div className='total'></div> Белки
        <div className='total'></div> Жиры
        <div className='total'></div> Углеводы

      <main className='meals'></main>
        <h2>Приёмы пищи</h2>
        <div className='empty'></div>
        
      <footer className='add'>Добавить продукт</footer>
      
    </div>
  )
}
export default App