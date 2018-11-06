<template>
  <div class="nav-bar">
    <div class="logo">沐雪</div>
    <div class="list-wrapper">
      <ul class='nav-list clearfix'>
        <li><a href="">首页</a></li>
        <li><a href="">个人档</a></li>
        <li><a href="">作品集</a></li>
        <li><a href="">博客</a></li>
        <li><a href="">留言</a></li>
      </ul>
    </div>
    <div class="nav-icon" @click="handleList">
      <transition name="change" >
      <span v-if='showDropDown' class="deleteX" key='deleteX'></span>
      <span  v-else class="drop" key="drop"></span>
      </transition>
    </div>

    <transition name='fade'>
      <div class="drop-down" v-if="showDropDown">
        <ul class='drop-down-list'>
          <li><a href="">首页</a></li>
          <li><a href="">个人档</a></li>
          <li><a href="">作品集</a></li>
          <li><a href="">博客</a></li>
          <li><a href="">留言</a></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  components: {},
  data() {
    return {
      showDropDown: false
    };
  },
  methods: {
    handleList() {
      this.showDropDown = !this.showDropDown;
    }
  }
};
</script>
<style lang="scss" scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active {
  transform: translateY(0%);
  opacity: 1;
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-150%);
}
.change-enter-active {
  transform: scale(1);
  transition: all 0.3s ease;
}
.change-leave-active {
  transform: scale(0);
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.change-enter,
.change-leave-to {
  transform: scale(0);
}
.nav-bar {
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  background: #00040a;
  .logo {
    margin-left: 40px;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
  }
  .nav-list {
    list-style: none;
    margin-right: 30px;
    li {
      padding: 10px;
      float: left;
      a {
        text-decoration: none;
        display: block;
        color: #fff;
        text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
        text-transform: uppercase;
        letter-spacing: 6px;
        font-weight: 900;
        font-size: 14px;
      }
    }
  }
}
.nav-icon {
  display: none;
}
.drop-down {
  display: none;
  position: fixed;
  top: 80px;
  width: 100%;
  background: #ff5a79;
  .drop-down-list {
    padding: 20px;
    li {
      padding: 10px;
      a {
        color: #fff;
        font-weight: bold;
      }
    }
  }
}
@media (max-width: 768px) {
  .list-wrapper {
    display: none;
  }
  .drop-down {
    display: block;
  }
  .nav-icon {
    display: block;
    margin-right: 20px;
    position: relative;
    width: 80px;
    height: 80px;
    text-align: center;
    .drop {
      display: block;
      position: absolute;
      top: 39px;
      left: 18px;
      right: 18px;
      height: 3px;
      background: #ff5a79;
      border-radius: 50px;
      cursor: pointer;
      &::before {
        display: block;
        position: absolute;
        width: 100%;
        height: 3px;
        top: -14px;
        border-radius: 50px;
        background-color: #ff5a79;
        content: "";
      }
      &::after {
        display: block;
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -14px;
        border-radius: 50px;
        background-color: #ff5a79;
        content: "";
      }
    }
  }
}
.deleteX {
  &::before {
    right: 10px;
    display: block;
    position: absolute;
    width: 80%;
    height: 3px;
    top: 39px;
    border-radius: 50px;
    background-color: #ff5a79;
    content: "";
    transform: rotate(-45deg);
  }
  &::after {
    right: 10px;
    display: block;
    bottom: 0;
    position: absolute;
    width: 80%;
    height: 3px;
    top: 39px;
    border-radius: 50px;
    background-color: #ff5a79;
    content: "";
    transform: rotate(45deg);
  }
}
.clearfix {
  content: "";
  display: block;
  clear: both;
}
</style>
