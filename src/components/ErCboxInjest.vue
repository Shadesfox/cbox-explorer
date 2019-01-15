<template>
    <div>
        Cbox export string:<br>
        <textarea name="cbox" v-model="er_cbox"></textarea><br>
        <button v-on:click.stop="importCbox()">Convert</button>
    </div>
</template>

<script>
    export default {
        name: "ErCboxInjest",
        data () {
            return {
                er_cbox : null
            }
        },
        methods: {
            importCbox: function () {
                this.$store.dispatch('convertErToCbox', this.er_cbox).then(() => {
                    this.$router.push({path: './cbox'})
                })
            }
        }
    }
</script>

<style scoped>

</style>