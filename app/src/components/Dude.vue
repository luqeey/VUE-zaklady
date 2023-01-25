<template>
    <div>
        <article>
            this is my name 
            <span>{{ title }}</span>
        </article>
    </div>
</template>

<script>
    export default { 
        props: ['title'],
    }
</script>

<style lang="scss" scoped>

</style>