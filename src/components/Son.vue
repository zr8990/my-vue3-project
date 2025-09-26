<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  title?: string
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Default Title',
  loading: false
})

const emit = defineEmits<{
  (e: 'change', value: string): void,
  (e: 'update', id: number): void
}>()

const count = ref(0)

const handleClick = () => {
  count.value++
}
</script>

<template>
  <div>
    <h1>{{ props.title }}</h1>
    <p v-if="props.loading">Loading...</p>
    <button @click="handleClick">
      Count: {{ count }}
    </button>
  </div>
</template>

<style scoped>
</style>