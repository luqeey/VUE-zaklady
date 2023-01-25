<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <p>
      Edit <code>hfajhfscnsncwwd</code> to test this webpage. 
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ["message"],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<style lang="scss" scoped>

$bg-color: blue;

p {
  code {
    color: red;
    background: $bg-color;
    padding: 7px;
    border-radius: 30px;
  }
}

</style>


