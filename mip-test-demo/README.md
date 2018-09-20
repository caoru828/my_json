# `mip-test`

模拟 mip-toast 测试组件，模拟抛出事件

| 标题     | 内容 |
| -------- | ---- |
| 类型     |
| 支持布局 |
| 所需脚本 |

## 说明

向 toast 组件抛出事件
抛出事件 show 或 hidden 事件 eg: this.$emit('show') eg: this.$emit('hidden')
静态传参数：直接在 toast 组件里 info-text 后边加字符串 eg: this.$emit('show')
动态传参数：抛出 show 事件可以传参数，传的参数就是想要显示的参数 eg: this.$emit('show', showString)

## 示例

```
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
      // 静态传参数：这里第二个参数传的是 提示框所要展示内容，不传默认显示info-text里边的内容
      this.$emit('show');
      // this.$emit('hidden');
    },
    hasText () {
      let showString = 'show函数里 边传了参数'
      // 动态传参数：这里第二个参数传的是 提示框所要展示内容，不传默认显示info-text里边的内容
      this.$emit('show', showString);
      // this.$emit('hidden');
    }
  }
}
</script>
```

示例说明

## 属性

this.$emit('show', showString); 动态传参数，第二个参数可以是字符串也可以是变量
