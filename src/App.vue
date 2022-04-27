<template>
  <div class="h-screen flex flex-col bg-cyan-light">
    <Header class="flex-shrink-0">

    </Header>
    <div class="flex-grow container mx-auto max-w-6xl mt-10">
      <div class="flex items-center justify-center space-x-2 text-5xl font-medium">
        <FaIcon :icon="['fab', 'linux']"/>
        <div>Hello Flisol 2022</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import {defineComponent} from "vue";

export default defineComponent({
  name: 'App',
  components: { Header }
})
</script>