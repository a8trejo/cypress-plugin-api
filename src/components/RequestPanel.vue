<template>
  <div
    data-cy="requestPanel"
    class="col-span-1 cy-force-visible"
  >
    <Title
      :method="item?.method"
      :url="item?.url"
    />
    <input
      :id="'query' + index"
      type="radio" 
      class="hidden invisible" 
      :name="'req' + index" 
      data-cy="showQuery"
      :checked="item?.query.body && !item?.requestBody.body"
    >
    <label 
      v-show="item?.query.body" 
      class="pr-3 pl-1 cursor-pointer text-cy-gray select-none"
      :for="'query' + index"
    >
      Query
    </label>
    <input
      :id="'requestHeaders' + index"
      type="radio" 
      class="hidden invisible" 
      :name="'req' + index" 
      data-cy="showRequestHeaders"
      :checked="item?.requestHeaders.body && !item?.requestBody.body && !item?.query.body && !item?.auth.body"
    >
    <label 
      v-show="item?.requestHeaders.body" 
      class="pr-4 pl-1 cursor-pointer text-cy-gray select-none"
      :for="'requestHeaders' + index"
    >
      Headers
    </label>
    <input
      :id="'auth' + index" 
      type="radio" 
      class="hidden invisible" 
      :name="'req' + index" 
      data-cy="showAuth"
      :checked="item?.auth.body && !item?.requestBody.body && !item?.query.body"
    >
    <label 
      v-show="item?.auth.body" 
      class="pr-3 pl-1 cursor-pointer text-cy-gray select-none"
      :for="'auth' + index"
    >
      Auth
    </label>
    <input
      :id="'requestBody' + index"
      type="radio" 
      class="hidden invisible" 
      :name="'req' + index" 
      data-cy="showRequestBody"
      :checked="item?.requestBody.body || (!item?.auth.body && !item?.requestHeaders.body && !item?.query.body)"
    >
    <label 
      v-show="item?.requestBody.body || (!item?.auth.body && !item?.requestHeaders.body && !item?.query.body)" 
      class="pr-3 pl-1 cursor-pointer text-cy-gray select-none"
      :for="'requestBody' + index"
    >
      Body
    </label>
      
    <CodeBlock 
      :data-formatted="item?.auth.formatted" 
      selector="auth"
    />
    <CodeBlock 
      :data-formatted="item?.query.formatted" 
      selector="query"
    />
    <CodeBlock
      :data-formatted="item?.requestHeaders.formatted"
      selector="requestHeaders"
    />
    <CodeBlock
      :data-formatted="item?.requestBody.formatted"
      selector="requestBody"
    />
  </div>
</template>
<script setup lang="ts">
import Title from "./TitlePanel.vue";
import CodeBlock from "./CodeBlock.vue";

defineProps({
  item: {
    type: Object
  },
  index: {
    type: [Number, String]
  }
});

// Force the component to be visible when mounted
import { onMounted } from 'vue';

onMounted(() => {
  // Make sure all CodeBlock components are visible
  setTimeout(() => {
    const panel = document.querySelector('[data-cy="requestPanel"]');
    if (panel) panel.classList.add('cy-force-visible');
  }, 50);
});

</script>