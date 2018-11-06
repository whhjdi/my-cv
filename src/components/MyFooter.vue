<template>
  <div class="my-footer">
    <div class="wrapper">
      <a href="">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-chuxu"></use>
        </svg>
        <span>微信</span>
      </a>
      <a href="">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wenzhang"></use>
        </svg>
        <span>邮箱</span>
      </a>
      <a href="">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-kafei"></use>
        </svg>
        <span>微博</span>
      </a>
    </div>
    <div class="desc"> 版权声明

      2017-2018 © 沐雪

      Powered by GitPages</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.my-footer {
  background: #a78674;
  padding: 40px;
  color: #fff;
  .wrapper {
    text-align: left;
    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: bold;
      .icon {
        width: 3em;
        height: 3em;
        padding: 5px;
        margin-right: 10px;
      }
      > span {
        display: block;
        width: 100px;
        padding-bottom: 13px;
      }
    }
  }
  .desc {
    margin-top: 20px;
    font-weight: bold;
  }
}
</style>
