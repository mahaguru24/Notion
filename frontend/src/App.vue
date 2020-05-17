<template>
  <div id="app" class="">
    <div class="container mx-auto p-4 py-10 md:p-10">
      <logo class="h-12 md:h-24 mx-auto"/>
      <search-text-box class="mt-6 md:max-w-4xl mx-auto" />
    </div>
  </div>

</template>

<script>

import SearchTextBox from './components/SearchTextBox'
import Logo from './components/Logo'
export default {
  name: 'App',
  components: {
    Logo,
    SearchTextBox
  }
}
</script>

<style>
</style>
