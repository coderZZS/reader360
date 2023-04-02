import { useState } from 'react'

export default (randomCount = 1): [number[], () => void] => {
    const initData = Array(randomCount).fill(0)
    const [randoms, setRandoms] = useState<number[]>(initData)

    function updateRandoms(times = randoms.length) {
        while (times) {
            setRandoms((state) => {
                state.slice()
                state[times - 1] = Math.random()
                return state
            })
            times -= 1
        }
    }

    return [randoms, updateRandoms]
}
