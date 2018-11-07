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
  height: 600px;
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
    background: url("../assets/mine.jpg");
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
