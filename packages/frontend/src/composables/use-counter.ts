import { computed, ComputedRef, Ref, ref } from 'vue'

import { meaningOfLife } from '@reeba/common'

interface UseCounter {
  count: Ref<number>
  increment: () => void
  decrement: () => void
  life: ComputedRef<number>
}

export const useCounter = (): UseCounter => {
  const count = ref(0)

  const increment = (): void => {
    count.value += 1
  }

  const decrement = (): void => {
    count.value -= 1
  }

  const life = computed(() => {
    return meaningOfLife
  })

  return {
    count,
    increment,
    decrement,
    life
  }
}
