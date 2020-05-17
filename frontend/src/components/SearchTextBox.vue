<template>
    <div class="bg-white shadow-lg p-4 flex border-2 rounded-lg">
        <span class="w-auto flex justify-end items-center text-gray-500 p-2">
            <i class="material-icons text-3xl">search</i>
        </span>
        <input class="w-full rounded p-2 focus:none mx-2 border-b" type="text" placeholder="Try 'AWS'">
        <button class="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
            <p class="font-semibold text-xs">Search</p>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'SearchTextBox'
    }
</script>

<style scoped>

</style>