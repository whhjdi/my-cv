<template>
  <div class="home">
    <h1>沐雪</h1>
    <h2>一个前端的小房子</h2>
    <div class="home-button">
      <a href="https://github.com/whhjdi" class="btn" >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-star"></use>
        </svg>
        Github</a>
      <a href="https://wanghandi.top" class="btn">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiangbei-"></use>
        </svg>
        MyBlog</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
<style lang="scss" scoped>
.home {
  /* background: linear-gradient(135deg, #00060e 0%, #000a22 50%, #001338 100%); */
  margin-top: 80px;
  padding: 140px 30px;
  background: #ffdd67;
  height: 620px;
  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }
  .home-button {
    margin-top: 60px;
    display: block;
    .btn {
      display: inline-block;
      cursor: pointer;
      border-radius: 4px;
      font-weight: 600;
      padding: 0.75em 1em;
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
</style>
