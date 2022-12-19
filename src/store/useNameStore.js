import { defineStore } from "pinia"

export const useNameStore = defineStore("messageStore", {
  state() {
    return {
      message: "what's the name of the greeting",
    }
  },
  actions: {
    setName() {
      this.message = "Yes you completed the whole basics"
    },
  },
  getters: {
    initialMessage() {
      return this.message
    },
  },
})
