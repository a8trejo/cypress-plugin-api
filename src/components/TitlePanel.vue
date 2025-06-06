<template>
  <div data-cy="titlePanel">
    <div class="flex text-cy-gray rounded-sm bg-cy-blue-darkest py-1.5 border-slate-800 border mb-2 cy-force-visible-flex cy-flex-center">
     <p
        data-cy="method"
        class="mx-2 rounded-sm font-mono"
        :class="[methodColor(method), 'cy-force-visible-inline']"
      >
        {{ method }}
      </p>
      <!-- Replace input with span for better visibility -->
      <span
        data-cy="url"
        class="px-1 inline-block font-mono bg-cy-blue-darkest w-full outline-0 text-cy-gray-light cy-force-visible-inline"
      >
        {{ url }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { getState } from '../utils/getState';

  const props = defineProps({
    method: {
      default: '',
      type: String
    },
    url: {
      default: '',
      type: String
    }
  })

  const methodColor = (method: string) => {
    const methods = {
      'DELETE': 'text-cy-red',
      'POST': 'text-cy-green',
      'PUT': 'text-cy-green',
      'GET': 'text-cy-blue',
      'PATCH': 'text-cy-orange',
      'HEAD': 'text-cy-yellow'
    }
    return methods[method as keyof typeof methods]
  }

  onMounted(() => {
    // Use the same document reference that the plugin is using
    const { doc } = getState();
      
    const applyStyles = () => {
      // Explicitly target the URL element
      const urlElements = doc.querySelectorAll('[data-cy="url"]');
      urlElements.forEach(element => {
        // Apply styling using the cy-gray-light color from tailwind config
        element.classList.add('cy-force-visible-inline');
        element.classList.add('text-cy-gray-light');
        
        // Set text content for span element
        if (props.url) {
          element.textContent = props.url;
        }
      });
    };

    setTimeout(applyStyles, 100);
  });

</script>