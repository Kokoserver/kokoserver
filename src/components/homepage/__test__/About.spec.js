import { mount } from "@vue/test-utils"
import About from "@/components/homepage/AboutMe.vue"
import { it, describe } from "vitest"

describe("my about", async () => {
  const aboutMe = mount(About).attributes("data-test-title").match("About Me")
})
