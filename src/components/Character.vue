<template>
    <div v-bind:id="uuid">
        <div id="character_image"><img v-bind:src="img"></div>
        <div id="character_text">
            <div id="name">{{name}}</div>
            <div id="title">{{title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Character",
        props: ['uuid', 'img', 'name', 'title'],
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>