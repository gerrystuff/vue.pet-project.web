<template>
  <div id="app">
    <div id="nav">
      <b-button to="/" variant="info" class="my-1">Favorites</b-button>
    </div>
    <router-view/>
    <notifications/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
