# Layout 布局

### 引入

在`app.json`或`index.json`中引入组件，默认为`ES6`版本，`ES5`引入方式参见[快速上手](#/quickstart)

```json
"usingComponents": {
  "van-row": "path/to/vant-weapp/dist/row/index",
  "van-col": "path/to/vant-weapp/dist/col/index"
}
```

## 代码演示

### 基本用法

Layout 组件提供了`24列栅格`，通过在`Col`上添加`span`属性设置列所占的宽度百分比
此外，添加`offset`属性可以设置列的偏移宽度，计算方式与 span 相同

```html
<van-row>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
</van-row>

<van-row>
  <van-col span="4">span: 4</van-col>
  <van-col span="10" offset="4">offset: 4, span: 10</van-col>
</van-row>

<van-row>
  <van-col offset="12" span="12">offset: 12, span: 12</van-col>
</van-row>
```

### 设置列元素间距

通过`gutter`属性可以设置列元素之间的间距，默认间距为 0

```html
<van-row gutter="20">
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
</van-row>
```

### Row API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| gutter | 列元素之间的间距（单位为px） | `String | Number` | - |

### Col API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| span | 列元素宽度 | `String | Number` | - |
| offset | 列元素偏移距离 | `String | Number` | - |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
