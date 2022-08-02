import create from 'zustand'
import { persist } from 'zustand/middleware'

interface BearState {
  bears: number
  increase: () => void
}

const useBearStore = create(
  persist<BearState>(set => ({
    bears: 0,
    increase: () => set(state => ({ bears: state.bears + 1 })),
  }),
  {
    name: 'bear-storage',
    getStorage: () => localStorage,
  }),
)

export const Zustand = () => {
  return (
    <>
      <BearCounter />
      <Controls />
    </>
  )
}

function BearCounter() {
  const bears = useBearStore(state => state.bears)
  return <h1>{bears} around here ...</h1>
}

function Controls() {
  const increasePopulation = useBearStore(state => state.increase)
  return <button onClick={increasePopulation}>one up</button>
}
