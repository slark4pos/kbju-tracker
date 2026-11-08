import type { Product } from "../types"
import { useState } from "react"

type Props = {
  onAdd: (product: Product, grams: number) => void
  product: Product
}


export function ProductRow({ product, onAdd }: Props) {
  const [grams, setGrams] = useState('')

  function handleAdd() {
    const value = Number(grams)

    if (value > 0) {

      onAdd(product, value)
    }
  }

  return (
    <li className='product'>
      <span>{product.name}</span>
      <span>{product.kcal} ккал</span>
      <input
        type='number'
        min='0'
        aria-label={`Граммы, ${product.name}`}
        value={grams}
        onChange={(e) => setGrams(e.target.value)}
      />
      <button onClick={handleAdd}>
        Добавить
      </button>
    </li>
  )
}
