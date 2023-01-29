<template>
    <div>
        <h1>Ahojky</h1>
        <article>
            {{ name }}
            <span>{{ title }}</span>
        </article>
    </div>
    <App />
    <Dude />
    <!-- <AboutView />
    <HomeView /> -->
</template>

<script>
    export default { 
        props: {
            title: {
                type: String,
                default: "nieco sem napisalo random",
            },
            name: {
                type: String,
                default: "blbecek",
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>