<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    v-if="dataFormatted"
    class="bg-cy-blue-darker" style="display: block !important; visibility: visible !important; opacity: 1 !important;"
    :data-cy="selector"
  >
    <pre
      class="hljs overflow-scroll no-scrollbar" style="display: block !important; visibility: visible !important; opacity: 1 !important;"
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
    codeBlocks.forEach(block => block.setAttribute('style', 'display: block !important; visibility: visible !important; opacity: 1 !important;'));
  }, 50);
});
</script>