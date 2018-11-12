<template>
  <div class="profile" name='profile'>
    <div class="pic"></div>
    <div class="introduce">
      <h2>个人档</h2>
      <p>95后前端程序员。</p>
      <p>吃不胖的死肥宅（不肥）。</p>
      <p>不会爬电线杆的电气专业毕业生。</p>
      <p>乐观的前端狗，一进商场就分不清东西南北。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile"
};
</script>

<style lang="scss" scoped>
.profile {
  background: #28bbff;
  height: 620px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 100px 20px;
  margin-top: 80px;
  color: #fff;
  .pic {
    width: 200px;
    height: 200px;
    margin: 20px 40px;
    border: 4px solid #fff;
    border-radius: 50%;
    background: url("https://muxue-image-1254040602.cos.ap-beijing.myqcloud.com/mine.jpg?q-sign-algorithm=sha1&q-ak=AKID2TIjlcfhS4E0K25ejH5t5RnAE8GxkQUT&q-sign-time=1542003555;1542005355&q-key-time=1542003555;1542005355&q-header-list=&q-url-param-list=&q-signature=0332c41ffd2b28f3761206c2f3856168aacbf3e8&x-cos-security-token=8479c00b877d23948b7015cb847f3e6004db482e10001&response-content-disposition=attachment");
    background-repeat: no-repeat;
    background-size: 200px 200px;
  }
  .introduce {
    width: 400px;
    text-align: center;
    h2 {
      margin-bottom: 20px;
    }
    p {
      font-weight: 900;
    }
  }
}
</style>
