# DatetimePicker 时间选择

### 介绍

时间选择组件通常与 [弹出层](#/popup) 组件配合使用

### 引入

在`app.json`或`index.json`中引入组件，默认为`ES6`版本，`ES5`引入方式参见[快速上手](#/quickstart)

```json
"usingComponents": {
  "van-datetime-picker": "path/to/vant-weapp/dist/datetime-picker/index"
}
```


## 代码演示

### 选择完整时间

`value` 为时间戳

```html
<van-datetime-picker
  type="datetime"
  value="{{ currentDate }}"
  min-date="{{ minDate }}"
  max-date="{{ maxDate }}"
  bind:input="onInput"
/>
```

```javascript
Page({
  data: {
    minHour: 10,
    maxHour: 20,
    minDate: new Date().getTime(),
    maxDate: new Date(2019, 10, 1).getTime(),
    currentDate: new Date().getTime()
  },

  onInput(event) {
    this.setData({
      currentDate: event.detail.value
    });
  }
});
```

### 选择日期（年月日）

`value` 为时间戳，通过传入 `formatter` 函数对选项文字进行处理

```html
<van-datetime-picker
  type="date"
  value="{{ currentDate }}"
  bind:input="onInput"
  min-date="{{ minDate }}"
  formatter="{{ formatter }}"
/>
```

```js
Page({
  data: {
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    }
  },

  onInput(event) {
    this.setData({
      currentDate: event.detail.value
    });
  }
});
```

### 选择日期（年月）

`value` 为时间戳

```html
<van-datetime-picker
  type="year-month"
  value="{{ currentDate }}"
  min-date="{{ minDate }}"
  bind:input="onInput"
/>
```

```js
Page({
  data: {
    currentDate: new Date().getTime(),
    minDate: new Date().getTime()
  },

  onInput(event) {
    this.setData({
      currentDate: event.detail.value
    });
  }
});
```

### 选择时间

`value` 为字符串

```html
<van-datetime-picker
  type="time"
  value="{{ currentDate }}"
  min-hour="{{ minHour }}"
  max-hour="{{ maxHour }}"
  bind:input="onInput"
/>
```

```js
Page({
  data: {
    currentDate: '12:00',
    minHour: 9,
    maxHour: 23
  },

  onInput(event) {
    this.setData({
      currentDate: event.detail.value
    });
  }
});
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|------|
| value | 当前选中值 | `String | Number` | - |
| type | 类型，可选值为 `date` `time` `year-month` <br> <strong>不建议动态修改</strong> | `String` | `datetime` |
| min-date | 可选的最小时间，精确到分钟 | `Number` | 十年前 |
| max-date | 可选的最大时间，精确到分钟 | `Number` | 十年后 |
| min-hour | 可选的最小小时，针对 time 类型 | `Number` | `0` |
| max-hour | 可选的最大小时，针对 time 类型 | `Number` | `23` |
| min-minute | 可选的最小分钟，针对 time 类型 | `Number` | `0` |
| max-minute | 可选的最大分钟，针对 time 类型 | `Number` | `59` |
| formatter | 选项格式化函数 | `(type, value) => value` | - |
| title | 顶部栏标题 | `String` | `''` |
| show-toolbar | 是否显示顶部栏 | `Boolean` | `false` |
| loading | 是否显示加载状态 | `Boolean` | `false` |
| item-height | 选项高度 | `Number` | `44` |
| confirm-button-text | 确认按钮文字 | `String` | `确认` |
| cancel-button-text | 取消按钮文字 | `String` | `取消` |
| visible-item-count | 可见的选项个数 | `Number` | `5` |

### Events

| 事件名称 | 说明 | 回调参数 |
|------|------|------|
| input | 当值变化时触发的事件 | 当前 value |
| change | 当值变化时触发的事件 | 组件实例 |
| confirm | 点击完成按钮时触发的事件 | 当前 value |
| cancel | 点击取消按钮时触发的事件 | - |

### change事件

在`change`事件中，可以获取到组件实例，对组件进行相应的更新等操作：

| 函数 | 说明 |
|------|------|
| getColumnValue(index) | 获取对应列中选中的值 |
| setColumnValue(index, value) | 设置对应列中选中的值 |
| getColumnValues(index) | 获取对应列中所有的备选值 |
| setColumnValues(index, values) | 设置对应列中所有的备选值 |
| getValues() | 获取所有列中被选中的值，返回一个数组 |
| setValues(values) | `values`为一个数组，设置所有列中被选中的值 |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| active-class | 选中项样式类 |
| toolbar-class | 顶部栏样式类 |
| column-class | 列样式类 |
