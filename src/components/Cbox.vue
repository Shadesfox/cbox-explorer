<template>
    <div id="character display">
        <div><Character v-for="character in display_box" v-bind:key="character.uuid" v-bind="character"></Character></div>
        <div id="nav">
            <button v-on:click="changeIndex(-5)">Back</button>
            <button v-on:click="changeIndex(5)">Forward</button>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Character from '@/components/Character'
    export default {
        name: "Cbox",
        data () {
            return {
                display_index: null,
                display_box: [],
                first_char: null
            }
        },
        computed: mapGetters([
            'characterList',
            'characterListSlice',
            'characterListSize'
        ]),
        mounted() {
            this.display_index = 0
        },
        watch: {
            display_index: function(new_index) {
                console.log('Updating index')
                this.display_box = this.characterListSlice(new_index, new_index+5)
                this.first_char = this.display_box[0]
            }
        },
        components: {
            Character
        },
        methods: {
            changeIndex: function(delta) {
                let new_index = this.display_index + delta
                if (new_index < 0) {
                    new_index = 0
                }
                if (new_index >= this.characterListSize) {
                    new_index = this.characterListSize - delta
                }
                this.display_index = new_index
            }
        }
    }
</script>

<style scoped>

</style>