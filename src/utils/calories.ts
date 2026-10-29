

type NormInput = {
    weight: number
    height: number
    age: number
    gender: string
    activity: number
}

export function calculateNorm(input: NormInput): number {
    const genderShift = input.gender === 'male' ? 5 : -161
    const bmr = 10 * input.weight + 6.25 * input.height - 5 * input.age + genderShift
    
    return Math.round(bmr * input.activity)
}

