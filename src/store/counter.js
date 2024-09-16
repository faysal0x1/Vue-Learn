import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    title: "hello world test",
  }),

  actions: {
    increaseCount(n) {
      this.count += n;
    },

    decreaseCount(n) {
      if (this.count <= 0) return;
      this.count -= n;
    },
  },
});
