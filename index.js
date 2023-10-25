const { ref } = Vue;
const app = Vue.createApp({
  setup() {
    const message = ref("Hello vue!");
    const info = ref([
      {
        label: "Username",
        type: "text",
        value: "",
        iconPath: "./img/icons/user.svg",
      },
      {
        label: "Password",
        type: "password",
        value: "",
        iconPath: "./img/icons/password.svg",
      },
    ]);
    const lgButtons = [
      { name: "google", iconPath: "./img/icons/google.svg" },
      { name: "facebook", iconPath: "./img/icons/facebook.svg" },
    ];
    return {
      message,
      lgButtons,
      info,
    };
  },
});
app.component("AppInput", {
  props: ["type", "label", "value", "icon"],
  template: `
  <div>
    <span v-if="value.length == 0"><img :src="icon"/></span>
    <input :value="value" :type="type" :name="label" :id="label" :placeholder="label"></input>
  </div>
  `,
});
app.mount("#app");
