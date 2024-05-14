<template>
  <div id="app">
    <m-card imgSrc="logo.png" summary="这是一个自定义组件">
      <template v-slot:footer>
        <div class="footer">
          <div class="left">哈哈哈哈</div>
          <div class="right">嘿嘿嘿嘿</div>
        </div>
      </template>
    </m-card>

  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
