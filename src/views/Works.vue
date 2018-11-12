<template>
  <div class="works-wrapper">
    <h2>作品集</h2>
    <p>不知不觉写了好多前端的东西了，把自己觉得完成度比较高的项目放在这里收藏起来</p>
    <div class="works">
      <div class="item" v-for="(item,index) in list" :key="index">
        <div class="top" :class="[item.color]">
          <h3>{{item.name}}</h3>
        </div>
        <div class="desc">
          <h3>{{item.title}}</h3>
          <h4>详情：</h4>
          <ul>
            <li v-for="(des,index) in item.desc" :key="index">{{des}}</li>
          </ul>
        </div>
        <div class="bottom" :style="{backgroundImage:'url(' + item.pic + ')'}">
        </div>
        <div class="home-button">
          <a :href="item.url" class="btn">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-star"></use>
            </svg>
            源码</a>
          <a :href="item.preview" class="btn">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jiangbei-"></use>
            </svg>
            预览</a>
        </div>
      </div>
      <div class="item">
        <div class="top" :class="extra.color">
          <h3>{{extra.name}}</h3>
        </div>
        <div class="desc">
          <h3>其他项目和Demo的集合</h3>
          <ul>
            <li v-for=" item in extra.desc" :key="item.name">
              <a :href="item.url">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  data: function() {
    return {
      extra: {
        name: "其他",
        url: "https://github.com/whhjdi",
        color: "yellow",
        preview: "https://github.com/whhjdi",
        title: "其他项目和Demo的集合",
        desc: [
          {
            name: "小米商城（vue）",
            url: "https://github.com/whhjdi/mi-vue"
          },
          {
            name: "简书（react）",
            url: "https://github.com/whhjdi/jianshu-react"
          },
          {
            name: "CNode社区（vue）",
            url: "https://github.com/whhjdi/vue-cnode"
          },
          {
            name: "个人网站（vue）",
            url: "https://github.com/whhjdi/my-cv"
          },
          {
            name: "可爱的喵",
            url: "https://github.com/whhjdi/make-a-miao"
          }
        ]
      },
      list: [
        {
          name: "在线简历编辑器",
          url: "https://github.com/whhjdi/vue-resumeEdit",
          color: "black",
          preview: "https://wanghandi.top/vue-resumeEdit/dist/#/",
          pic:
            "https://muxue-image-1254040602.cos.ap-beijing.myqcloud.com/resume.jpg?q-sign-algorithm=sha1&q-ak=AKID7cC7kKbvYDTp9ytiAJS6WBhdNqeE5dMj&q-sign-time=1542003109;1542004909&q-key-time=1542003109;1542004909&q-header-list=&q-url-param-list=&q-signature=8b38cd5ccf35448ae328accba74c42b45443642f&x-cos-security-token=364c18c5d17b43e1f02f903adeda85e7359c1f1110001&response-content-disposition=attachment",
          title:
            "这是一个在线简历编辑器，可以让你方便快捷的构建自己简历，让面试更加分。",
          desc: [
            "使用vue-cli脚手架构建项目,使用vue-router,ES6,Scss",
            "使用Element-ui的部分组件和功能美化页面和前端表单验证",
            "使用阿里图标库(icon-font),使用vue-particles展现背景动态效果",
            "使用LeanCloud作为后台数据库,实现登陆,注册以及用户信息的保存"
          ]
        },
        {
          name: "自用Vue组件",
          url: "https://github.com/whhjdi/ZUI",
          color: "red",
          preview: "https://wanghandi.top/ZUI/dist/#/",
          pic:
            "https://muxue-image-1254040602.cos.ap-beijing.myqcloud.com/myui.png?q-sign-algorithm=sha1&q-ak=AKIDqAGVO05I8xe5ugPegkRoEMQFaghbNZAr&q-sign-time=1542003297;1542005097&q-key-time=1542003297;1542005097&q-header-list=&q-url-param-list=&q-signature=d4254105f824502a3e07e23ca67e61bc3f94b949&x-cos-security-token=4c872529e586a2e787e0f2a6e82140799d6cc80a10001&response-content-disposition=attachment",
          title:
            "这是一个简单的Vue组件的集合，初步实现了tabs,toast,button,input等基础组件，并用在了自己的网站上。",
          desc: [
            "使用vue-cli3脚手架构建项目,这个项目让我了解了Vue的更多特性，加深了对ES6的理解。",
            "添加6种主题色，简洁却不单调，清新有活力。",
            "细小的动画在不经意间体现细节之美。",
            "借鉴参考ElementUI，iView等框架的实现，感谢他们，更多组件持续更新ing。"
          ]
        },
        {
          name: "涂鸦画板",
          url: "https://github.com/whhjdi/canvas-demo",
          preview: "https://wanghandi.top/canvas-demo/",
          color: "purple",
          pic:
            "https://muxue-image-1254040602.cos.ap-beijing.myqcloud.com/canvas.png?q-sign-algorithm=sha1&q-ak=AKIDXXuRsdNEFg4rHWawV1zOUPEEvAORQXJe&q-sign-time=1542003396;1542005196&q-key-time=1542003396;1542005196&q-header-list=&q-url-param-list=&q-signature=014434761333d471ec8c55f7b530afd92ddaf5d4&x-cos-security-token=055e0818abf0e4acdc083093c51e55470b6df91210001&response-content-disposition=attachment",
          title: "这是一个用Canvas实现的画板，功能丰富，超好的用户体验。",
          desc: [
            "本项目使用HTMl5的input新增color类型实现了自定义背景色和画笔颜色。",
            "使用Canvas和JS实现了笔刷选择橡皮擦以及保存清空等功能。",
            "由于某些原因移动端兼容不好，很遗憾。"
          ]
        },
        {
          name: "键盘导航",
          url: "https://github.com/whhjdi/nav-demo",
          color: "default",
          preview: "https://wanghandi.top/nav-demo/index.html",
          pic:
            "https://muxue-image-1254040602.cos.ap-beijing.myqcloud.com/nav1.png?q-sign-algorithm=sha1&q-ak=AKIDQ00oHO1ha8raHG9MqrvTBqo21WJdF3vs&q-sign-time=1542003435;1542005235&q-key-time=1542003435;1542005235&q-header-list=&q-url-param-list=&q-signature=9afbfaee9559b8403f3a6598719ad9088a213d16&x-cos-security-token=6efd0835b26bd3b60be4a61914d12d9c033adf8310001&response-content-disposition=attachment",
          title:
            "这是一个在线导航，把url和按键绑定，个人最喜欢的，虽然简单但是真的喜欢。",
          desc: [
            "使用原生JS实现，通过事件绑定实现基本的功能。",
            "使用LocalStorage存储背景信息，实现换肤功能。"
          ]
        },
        {
          name: "豆瓣搜索",
          url: "https://github.com/whhjdi/douban-demo",
          color: "green",
          preview: "https://wanghandi.top/douban-demo/",
          pic:
            "https://muxue-image-1254040602.cos.ap-beijing.myqcloud.com/douban.png?q-sign-algorithm=sha1&q-ak=AKID3qKzjpfQqbeg462W1bdPSscxzgcdiIM3&q-sign-time=1542003468;1542005268&q-key-time=1542003468;1542005268&q-header-list=&q-url-param-list=&q-signature=01b6edaf9b88d288ac815830d79434817336d8ec&x-cos-security-token=ed5c0c83a8e7d5660e72ca3f5a91d13cfbdbaa8710001&response-content-disposition=attachment",
          title:
            "这是一个使用豆瓣API实现的搜索项目，样式没设计好，不太好看，但基本功能没问题。",
          desc: [
            "本项目使用jQuery和BootStrape实现基本的功能和样式。",
            "使用豆瓣开放API，Ajax请求数据，渲染并展示搜索结果。",
            "不但可以搜电影，还可以搜音乐和图书，使用flex布局,兼容pc和移动端。"
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../components/z.scss";
.works-wrapper {
  margin-top: 80px;
  padding: 50px 20px;
  background: #fdd0ad;
  > h2 {
    margin: 10px 0;
  }
  .works {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      width: 500px;
      position: relative;
      margin-bottom: 40px;
      overflow: hidden;
      border-radius: 10px;
      &:last-child {
        height: 450px;
        .desc {
          a {
            display: block;
            margin: 10px;
            color: inherit;
            font-weight: bold;
            &:hover {
              color: #ff5a79;
            }
          }
        }
      }
      &:hover {
        box-shadow: 0 10px 20px 0 rgba(168, 182, 191, 0.6);
        .home-button {
          background: #d8e3e7;
        }
      }
      .top {
        /* background: #ff7381; */
        height: 80px;
        padding: 22px;
        color: #fff;
      }
      .desc {
        background: #d8e3e7;
        width: 100%;
        min-height: 370px;
        padding: 30px;
        text-align: left;
        & > h3 {
          margin: 10px;
        }
        & > ul {
          padding: 1em 2em;
        }
      }
      .bottom {
        position: absolute;
        top: 80px;
        left: 0;
        right: 0;
        /* background: url("../assets/resume.jpg"); */
        background-repeat: no-repeat;
        background-size: 100%;
        transition: all 0.3s;
        width: 100%;
        min-height: 370px;
        display: inline-block;
        background-position: 50% 50%;
        @media (max-width: 600px) {
          &.bottom {
            background: #000 !important;
            opacity: 0.8;
            height: 100%;
          }
        }
        &:hover {
          background-size: 110%;
          opacity: 0;
        }
      }
      .home-button {
        display: block;
        padding: 1em 0;
        transition: all 0.5s ease-in-out;
        font-size: 14px;
        .btn {
          display: inline-block;
          cursor: pointer;
          border-radius: 4px;
          font-weight: 600;
          padding: 0.5em 1em;
          transition: none;
          margin: 0.25em 10px;
          background: #ff5a79;
          color: #fff;
          box-shadow: 0 3px #f3002e;
          position: relative;
          &:hover {
            top: 2px;
            box-shadow: 0 2px #f3002e;
          }
          .icon {
            margin-right: 2px;
          }
        }
      }
    }
    @media (max-width: 768px) {
      .item {
        width: 90%;
      }
    }
  }
}
</style>
