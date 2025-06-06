<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    v-if="dataFormatted"
    class="bg-cy-blue-darker cy-force-visible"
    :data-cy="selector"
  >
    <pre
      class="hljs overflow-scroll no-scrollbar cy-force-visible"
      v-html="dataFormatted" 
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';

defineProps({
  selector: {
    type: String
  },
  dataFormatted: { 
    default: '',
    type: String
  }
});

// Force the component to be visible when mounted
onMounted(() => {
  // Make sure the code block is visible
  setTimeout(() => {
    const codeBlocks = document.querySelectorAll('pre.hljs');
    codeBlocks.forEach(block => block.classList.add('cy-force-visible'));
  }, 50);
});
</script>