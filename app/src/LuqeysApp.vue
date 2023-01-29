<template>
    <div>
        <ul>
            <h1>TO-Do list</h1>
            <p>napis co chces spravit</p>
            <li v-for="(dude, index) in characters" :key="index">
            <Dude title="-" :name="dude"/>
            <App />
            <!-- <AboutView />
            <HomeView />  -->
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
    import App from '@/App.vue'
    
    export default {
        components: {
            Dude,
            App,
            
        },
        data() {
            return {
                newDude: '',
                characters: [],
                
            }   
        },
    }

</script>

<style lang="scss" scoped>

</style>