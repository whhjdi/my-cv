<template>
  <div class="nav-bar">
    <a class="logo" href="">沐雪</a>
    <div class="list-wrapper">
      <ul class='nav-list clearfix'>
        <router-link v-for="(item,index) in list" :to="item.to" tag="li" :key="item.name" active-class="active" @click="selected=index">
          <a >{{item.name}}</a>
        </router-link>
      </ul>
    </div>
    <div class="nav-icon" @click="handleList">
      <transition name="change">
        <span v-if='showDropDown' class="deleteX" key='deleteX'></span>
        <span v-else class="drop" key="drop"></span>
      </transition>
    </div>
    <transition name='fade'>
      <div class="drop-down" v-if="showDropDown">
        <ul class='drop-down-list'>
          <li v-for="item in list" :key="item.name" @click="showDropDown=false">
            <router-link :to="item.to">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </transition>
    <div class="to-top" @click="scrollToTop" v-show="showScrollToTop">
      <svg class="icon top" aria-hidden="true">
        <use xlink:href="#icon-cat-copy"></use>
      </svg>
      <p>回到顶部</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  components: {},
  data() {
    return {
      showDropDown: false,
      showScrollToTop: false,
      selected: 0,
      list: [
        { name: "首页", to: "home", className: "home" },
        { name: "个人档", to: "profile", className: "profile" },
        { name: "作品集", to: "works", className: "works" },
        { name: "博客", to: "blog", className: "blog" },
        { name: "留言", to: "message", className: "message" }
      ]
    };
  },
  methods: {
    handleList() {
      this.showDropDown = !this.showDropDown;
    },
    scrollToTop() {
      document.documentElement.scrollTop -= 10;
      if (document.documentElement.scrollTop > 0) {
        var timer = setTimeout(() => {
          this.scrollToTop();
        });
      } else {
        clearTimeout(timer);
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        this.showScrollToTop = true;
      } else {
        this.showScrollToTop = false;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
ul,
ol {
  list-style: none;
}
.nav-bar {
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
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
  .list-wrapper {
    .nav-list {
      list-style: none;
      margin-right: 30px;
      li {
        padding: 10px;
        float: left;
        color: #fff;
        &.active {
          color: #ff5a79;
        }
        a {
          text-decoration: none;
          display: block;
          color: inherit;
          text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
          text-transform: uppercase;
          letter-spacing: 6px;
          font-weight: 900;
          font-size: 14px;
          transition: all 0.3s;
          &:hover {
            color: #ff5a79;
          }
        }
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
        &:hover {
          color: #2d323b;
        }
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
.fade-enter-active {
  transform: translateY(0%);
  opacity: 1;
  transition: all 0.3s;
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
.to-top {
  position: fixed;
  bottom: 80px;
  right: 20px;
  /* border: 1px solid #ddd; */
  padding: 5px 10px;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  .top {
    width: 4em;
    height: 4em;
  }
}
</style>
