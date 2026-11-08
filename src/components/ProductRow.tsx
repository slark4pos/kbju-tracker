import type { Product } from "../types"
import { useState } from "react"

type Props = {
  onAdd: (product: Product, grams: number) => void
  product: Product
}

export function ProductRow({ product, onAdd }: Props) {
  const [grams, setGrams] = useState('')

  return (
    <li className='product'>
      <span>{product.name}</span>
      <span>{product.kcal} ккал</span>
      <input value={grams} onChange={(e) => setGrams(e.target.value)} />
      <button onClick={() => onAdd(product, Number(grams))}>
        Добавить
      </button>
    </li>
  )
}
