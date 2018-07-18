<template>
  <div class="wrapper">
    <div id="btn" @click="btn()">click me</div>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 0 auto;
  text-align: center;
}
#btn{
      margin: 50px auto;
      width: 100px;
      height: 40px;
      line-height: 40px;
      color: black;
      font-size: 16px;
      background:#ccc;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      z-index: 2222;
      text-align: center;
      text-align: -webkit-center;
    }
</style>

<script>
export default {
  mounted () {
    // this.$emit('hidden', false);
    this.$on('print', (str) => {
      console.log(str)
    })
},
methods:{
   btn(){
     this.$emit('show', true);
   }
}
}
</script>
