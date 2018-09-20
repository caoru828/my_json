<template>
  <div class="wrapper">
    <div
      class="text"
      @click="hasText()"
    >click me</div>
  <div
    class="btn"
    @click="btn()"
  >click me
    </div>

    </div>
</template>

<style scoped>
.wrapper {
  margin: 0 auto;
  text-align: center;
  margin: 40px auto;
}
.btn,
.text {
  margin: 0 auto;
  width: 100px;
  height: 40px;
  line-height: 40px;
  color: black;
  font-size: 16px;
  background: #ccc;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 2222;
  text-align: center;
  text-align: -webkit-center;
}
.text {
  margin: 5px auto;
}
</style>
<script>
export default {
  mounted () {
    this.$on('print', (str) => {
      console.log(str)
    })
  },
  methods: {
    btn () {
      // 这里第二个参数传的是 提示框所要展示内容，不传默认显示info-text里边的内容
      this.$emit('show');
      // this.$emit('hidden');
    },
    hasText () {
      let showString = 'show函数里 边传了参数'
      // 这里第二个参数传的是 提示框所要展示内容，不传默认显示info-text里边的内容
      this.$emit('show', showString);
      // this.$emit('hidden');
    }
  }
}
</script>
