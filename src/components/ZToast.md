# ZToast 组件

## 使用指南

本组件实现了 toast 提示的功能，可以更换不同主题色，实现了呼出位置的选项，支持自动关闭以及自动关闭时间设置，右半部支持回调，支持 html 的语法（需要手动开启）

### 安装

```javascript
import plugin from "./components/ZToast/plugin";
Vue.use(plugin);
```

### 配置选项

```javascript
this.$toast("你想使用的message", {
  position: "middle", //middle,top,bottom
  closeButton: {
    text: "ok", //左侧关闭按钮
    //关闭按钮的回调
    callback(toast) {
      toast.close();
    }
  },
  autoClose: false, //自动关闭
  autoCloseDelay: 10, //关闭时间（单位s）
  color: "black", //toast颜色
  enableHtml: "false" //是否支持写html
});
```

### 使用示例

```html
<z-button @click="showToastA">顶部弹出</z-button>
```

```javascript
methods:{
  showToastA() {
    this.$toast("我是默认的toast组件", {
      position: "top",
      closeButton: {
        text: "ok",
        callback(toast) {
          toast.close();
        }
      },
      autoClose: false
    });
  },
}
```
