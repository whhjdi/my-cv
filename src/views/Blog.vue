<template>
  <div class="blog">
    <h2>关于我的博客</h2>
    <div class="content">
      <p>用hexo搭建的静态博客，累计文章数量48篇,对我学习前端有很大的帮助。</p>
      <p>文章记录了前端多数的基础内容，包括HTML，CSS,ES6,TypeScript,vue,react,排序算法，虚拟DOM等等。</p>
    </div>
    <div class="skills">
      <h3 class="title">Skills</h3>
      <ul>
        <li>
          熟练掌握HTML(5)和常用CSS(3)，具有
          <span class="highlight">像素级</span> 还原设计稿的能力。具有
          <span class="highlight">平均水准之上</span> 的审美，追求设计的优雅。
        </li>
        <li>
          熟练掌握原生Javascript，掌握重要概念如：
          <span class="highlight">原型</span>，
          <span class="highlight">闭包</span>，
          <span class="highlight">作用域链</span>，
          <span class="highlight">面向对象</span>等。熟练使用
          <span class="highlight">ES6及ES7</span> 部分新特性。
        </li>
        <li>
          熟悉Vue框架的使用，<span class="highlight">理解重要概念</span>如：生命周期，组件通信，虚拟DOM等，熟悉组件化的开发方式。
        </li>
        <li>
          熟练使用媒体查询开发响应式页面，使用rem,vw/vh等适配方案进行移动端适配
        </li>
        <li>了解<span class="highlight">HTTP协议</span>及浏览器渲染原理，了解基本的前端 <span class="highlight">性能优化策略</span>。</li>
      </ul>
    </div>
    <a href="http://wanghandi.top/" class="btn" target="_blank">
      点我
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-icon-test"></use>
      </svg>
      穿越</a>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.blog {
  margin-top: 80px;
  background: #02b49c;
  min-height: 600px;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  font-weight: bold;
  h2 {
    margin: 40px 100px;
  }
  .content {
    margin: 0 auto;
    max-width: 600px;
  }
  .skills {
    margin: 60px auto;
    /* min-width: 300px; */
    max-width: 600px;
    text-align: left;
    .title {
      text-align: center;
      margin-bottom: 30px;
    }
  }
  .btn {
    display: inline-block;
    color: inherit;
    height: 60px;
    border-radius: 10px;
    background: #fff;
    border: 4px solid #324655;
    color: #000;
    margin: 10px auto;
    line-height: 16px;
    font-size: 16px;
    font-weight: bold;
    padding: 18px;
    transition: all 0.3s;
    &:hover {
      background: #9a83da;
      color: #fff;
      border: 4px solid #fff;
    }
  }
}
.highlight {
  color: #ffce49;
  font-weight: 900;
}
</style>
