<template>
    <div>
        <ul>
            <li v-for="(dude, index) in characters" :key="index">
            <Dude title="JA som lukas" />
            </li>
        </ul>

<form @submit.prevent="characters.push(newDude)" class="add-new">
    <input v-model="newDude" type="text">
</form>

<p class="preview">
    {{ newDude }}
</p>

</div>
</template>

<script>
    import Dude from  './components/Dude.vue'
    export default {
        components: {
            Dude,
        },
        data() {
            return {
                newDude: '',
                characters: ['Jake the dog', 'Finn the human', 'Marceline the vampire'],
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>