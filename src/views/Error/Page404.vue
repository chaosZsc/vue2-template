<template>
  <div :class="$s.Root">
    <div :class="$s.Wrap">
      <img :class="$s.Error" src="@/assets/images/404.png" alt="404" />
      <img :class="[$s.Cloud, $s.Left]" src="@/assets/images/404_cloud.png" alt="404_cloud" />
      <img :class="[$s.Cloud, $s.Mid]" src="@/assets/images/404_cloud.png" alt="404_cloud" />
      <img :class="[$s.Cloud, $s.Right]" src="@/assets/images/404_cloud.png" alt="404_cloud" />
    </div>

    <div :class="$s.Wrap">
      <p :class="[$s.Para, $s.Title]">很抱歉</p>
      <p :class="[$s.Para, $s.Info]">您所访问的页面不存在！</p>
      <p :class="[$s.Para, $s.Info]">请仔细检查您输入的网址是否正确。</p>
      <a href="">返回首页</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404',

  data() {
    return {};
  },

  methods: {},

  mounted() {},
};
</script>

<style lang="scss" module="$s">
.Root {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 1200px;
  height: 100%;
}

.Wrap {
  width: 600px;
  position: relative;
  a {
    display: block;
    width: 100px;
    background-color: #1482f0;
    border-radius: 100px;
    opacity: 0;
    cursor: pointer;
    font-size: 14px;
    line-height: 36px;
    color: #ffffff;
    text-align: center;
    text-decoration: none;
    animation-name: slideUp;
    animation-duration: 0.5s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
  }
}

.Error {
  width: 100%;
  height: auto;
}

.Cloud {
  position: absolute;
  opacity: 0;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  &.Left {
    width: 80px;
    top: 17px;
    left: 220px;
    animation-name: cloudLeft;
    animation-delay: 1s;
  }

  &.Mid {
    width: 46px;
    top: 10px;
    left: 420px;
    animation-name: cloudMid;
    animation-delay: 1.2s;
  }

  &.Right {
    width: 62px;
    top: 100px;
    left: 500px;
    animation-name: cloudRight;
    animation-delay: 1s;
  }
}

.Para {
  opacity: 0;
  animation-name: slideUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  &.Title {
    font-size: 32px;
    font-weight: bold;
    line-height: 40px;
    color: #1482f0;
  }

  &.Info {
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
    color: #222222;
    animation-delay: 0.2s;
  }
}

@keyframes cloudLeft {
  0% {
    top: 17px;
    left: 220px;
    opacity: 0;
  }
  20% {
    top: 33px;
    left: 188px;
    opacity: 1;
  }
  80% {
    top: 81px;
    left: 92px;
    opacity: 1;
  }
  100% {
    top: 97px;
    left: 60px;
    opacity: 0;
  }
}

@keyframes cloudMid {
  0% {
    top: 10px;
    left: 420px;
    opacity: 0;
  }
  20% {
    top: 40px;
    left: 360px;
    opacity: 1;
  }
  70% {
    top: 130px;
    left: 180px;
    opacity: 1;
  }
  100% {
    top: 160px;
    left: 120px;
    opacity: 0;
  }
}

@keyframes cloudRight {
  0% {
    top: 100px;
    left: 500px;
    opacity: 0;
  }
  20% {
    top: 120px;
    left: 460px;
    opacity: 1;
  }
  80% {
    top: 180px;
    left: 340px;
    opacity: 1;
  }
  100% {
    top: 200px;
    left: 300px;
    opacity: 0;
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(60px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
