<template>
  <div class="z-toast" ref="toast" :class="[position,color]">
    <div class="animation">
      <div class="message">
        <slot v-if="enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span v-if="closeButton" class="close" @click="handleButton">
        {{closeButton.text}}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ZToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoPlayDelay: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback(toast) {
            toast.close();
          }
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      validator(value) {
        return ["top", "middle", "bottom"].includes(value);
      }
    },
    color: {
      type: String,
      default: "default"
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoPlayDelay * 1000);
    }
    this.setHeight();
  },
  methods: {
    setHeight() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },
    close() {
      this.$el.remove(), this.$emit("close");
      this.$destroy();
    },
    handleButton() {
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
      this.close();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./z.scss";
.z-toast {
  border-radius: 4px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.top {
    top: 0;
    .animation {
      animation: slide-up 300ms;
    }
  }
  &.middle {
    top: 40%;
    transform: translate(-50%, -50%);
    .animation {
      animation: fade-in 300ms;
    }
  }
  &.bottom {
    bottom: 0;
    .animation {
      animation: slide-down 300ms;
    }
  }
}
.animation {
  color: white;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 12px;
  > .message {
    padding: 8px 12px 8px 0;
  }
  > .line {
    height: 100%;
    border-left: 2px solid #eeeeee;
  }
  > .close {
    padding-left: 12px;
    line-height: 32px;
    cursor: pointer;
    flex-shrink: 0;
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
