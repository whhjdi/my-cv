import ZToast from "./ZToast.vue";
let currentToast;
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, options) {
      if (currentToast) {
        currentToast.close();
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: options,
        onClose() {
          currentToast = null;
        }
      });
    };
  }
};

function createToast({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(ZToast);
  let toast = new Constructor({
    propsData
  });
  toast.$slots.default = [message];
  toast.$mount();
  toast.$on("close", onClose);
  document.body.appendChild(toast.$el);
  return toast;
}
