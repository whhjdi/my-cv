
<template>
  <div class="contact">
    <h2 class="title">留言</h2>
    <p class="desc">有什么想说的就写在这里吧！我看到会第一时间回复的</p>
    <textarea class="text" v-model="msg.content"></textarea>
    <div class="formInput">
      <input type="text" placeholder="你的昵称" class="msg" v-model="msg.name">
      <input type="text" placeholder="你的邮箱" class="msg" v-model="msg.email">
      <input type="text" placeholder="你的主页" class="msg" v-model="msg.blog">
    </div>
    <button class="btn" @click="handleSubmit">提交</button>
  </div>
</template>
<script>
/* eslint-disable */

  import ZToast from '../components/ZToast.vue' 
  export default {
    name: "contact",
    data() {
      return {
        msg: {
          content: "",
          name: "",
          email: "",
          blog: ""
        }
      };
    },
    methods: {
      handleSubmit(e) {
        const msg = this.msg;
        this.save(msg)
      },
      save(object) {
        if (object.name !== "" && object.content !== "") {
          var X = AV.Object.extend("Message");
          var x = new X();
          return x.save(object).then(() => {
          this.$toast("留言成功", {
            position: "middle",
            closeButton: {
              text: "ok",
              callback(toast) {
                toast.close();
              }
            },
            autoClose: false
          });
        });;
        } else {
          this.$toast("留言失败", {
            position: "middle",
            closeButton: {
              text: "ok",
              callback(toast) {
                toast.close();
              }
            },
            color: "red",
            autoClose: false
          });
        }
      }
    },
    mounted() {
    }
  };
</script>

<style lang="scss" scoped>
  .contact {
    margin: 0 auto;
    margin-top:80px;
    padding: 60px 20px;
    background: #ff7381;
    .title {
      margin-bottom: 20px;
    }
    .desc {
      margin-bottom: 20px;
    }
    .text {
      border: 2px solid transparent;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      width: 80%;
      height: 200px;
    }
    .formInput {
      width: 80%;
      margin: 10px auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .msg {
        outline: none;
        border: 1px solid #fff;
        height: 40px;
        padding: 0 20px;
        width:30%;
        margin-bottom:10px;
      }
    }
    .btn {
      width: 100px;
      height: 50px;
      border-radius: 25px;
      outline: none;
      border: 4px solid #fff;
      background: #40c4ff;
      margin-top: 30px;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      transition: all 0.3s;
      &:hover {
        background: #ffce49;
        border: 4px solid #000;
        color: #000;
      }
    }
  }
</style>
