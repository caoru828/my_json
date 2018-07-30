# mip-city-selection 城市选择组件

mip-city-selection 分组选择组件，可用于城市分组，英文名分组，颜色分组等。

标题|内容
----|----
类型|通用
支持布局|responsive,fixed-height,fill,container,fixed
所需脚本|https://c.mipcdn.com/static/v2/mip-city-selection/mip-city-selection.js | https://c.mipcdn.com/static/v1/mip-fixed/mip-fixed.js |
https://c.mipcdn.com/static/v1/mip-mustache/mip-mustache.js | https://c.mipcdn.com/static/v1/mip-mustache/mip-mustache.js |

## 示例

### 基本用法
1、本地数据

按照如下示例配置城市数据。



```html
// <mip-test id="cityTest"></mip-test> 测试组件，模拟接收事件
<mip-group-selection class="mip-hidden" on="citySelected:cityTest.print">
    <!-- 在 application/json 中配置全部xx城市 -->
    <script type="application/json">
    {"list": [
        {   "key" :"热门",
            "cities": [
                { "city": "北京", "pinyin": "beijing", "code": "1"},
                { "city": "上海", "pinyin": "shanghai", "code": "2"},
        },{ "key" :"A",
            "cities": [
                { "city": "澳门", "pinyin": "aomen", "code": "7"},
                { "city": "安庆", "pinyin": "anqing", "code": "8"},
        },{ "key" :"B",
            "cities": [
                { "city": "宝清", "pinyin": "baoqing", "code": "10"},
        },{
            "key":"C",
            "cities": [
                { "city": "重庆", "pinyin": "chongqing", "code": "13"},
        },{
            "key":"D",
            "cities": [
                { "city": "大庆", "pinyin": "daqing", "code": "16"},
        },{
            "key":"E",
            "cities": [
                { "city": "鄂尔多斯", "pinyin": "eerduosi", "code": "19"},
        },{
            "key":"F",
            "cities": [
                { "city": "阜阳", "pinyin": "fuyang", "code": "21"},
        },{
            "key":"G",
            "cities": [
                { "city": "广州", "pinyin": "guangzhou", "code": "24"},
        }
    ]}
    </script>
</mip-group-selection>

<!--侧边栏布局依赖mip-fixed组件提供样式-->
<script src="https://c.mipcdn.com/static/v1/mip-fixed/mip-fixed.js"></script>
```


2、异步传入数据

按照如下示例配置城市数据。

[notice]`data-src`属于前后端交互请求。由于 MIP-Cache 为 HTTPs 环境，`data-src` 要求支持 HTTPs.

```html
// <mip-test id="cityTest"></mip-test> 测试组件，模拟接收事件
<mip-group-selection class="mip-hidden" data-src="https://xxx/cities.json"  on="citySelected:cityTest.print">
    <!--存在 data-src 时，本地数据配置不生效-->
</mip-group-selection>


<!--侧边栏布局依赖mip-fixed组件提供样式-->
<script src="https://c.mipcdn.com/static/v1/mip-fixed/mip-fixed.js"></script>
```



## 抛出事件

### ready

每次触发抛事件后，抛出`mip-group-selection`的`citySelected`事件，并传json数据  

格式 如    { "city": "鄂尔多斯", "pinyin": "eerduosi", "code": "19"}


组件间通信请看文档 https://www.mipengine.org/doc/3-widget/6-help/3-mip-normal.html



## 属性说明
### data-src
说明：用于指向远程数据地址，异步加载并渲染。指明`data-src`后，配置在`<script type="application/json">`本地的数据不再生效。
使用限制：异步加载数据属于前后端交互请求。由于 MIP-Cache 为 HTTPs 环境，`data-src` 要求支持 HTTPs.


## 注意事项
- mip-group-selection 分组选择组件依赖`mip-fixed`，`mip-mustache`，必须引用对应的 javascript 脚本。