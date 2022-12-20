<script setup>
import linkedInWhiteIcon from "@/assets/linkedInWhiteIcon.svg"
import gitHubWhiteIcon from "@/assets/gitHubWhiteIcon.svg"
import mailWhiteIcon from "@/assets/mailWhiteIcon.svg"
import phoneIcon from "@/assets/phoneIcon.svg"
import AboutImg from "@/assets/about-design-img.svg"
</script>

<template>
  <section class="mb-20 space-y-5" id="aboutMe">
    <h1
      class="text-primary text-3xl text-center capitalize font-semibold my-10"
      data-test-title
    >
      About me
    </h1>
    <div class="bg-primary">
      <div class="container">
        <div class="dark:bg-black rounded-md">
          <div
            class="gap-10 items-center py-8 mx-auto max-w-screen-xl xl:gap-16 flex flex-col-reverse lg:flex-row"
          >
            <div class="mt-4 md:mt-0 text-center md:text-left">
              <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-50 dark:text-gray-50"
              >
                Hi, I’m Owonikoko Daniel. Nice to meet you.
              </h2>
              <p
                class="mb-6 font-light text-gray-50 md:text-lg dark:text-gray-400"
              >
                Since beginning my journey as a freelance designer nearly 3
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </p>
              <div
                class="flex items-center justify-center md:justify-start space-x-5"
              >
                <div class="flex flex-col gap-8">
                  <a
                    href="#"
                    class="flex justify-start items-center gap-4 flex-col md:flex-row"
                  >
                    <img :src="mailWhiteIcon" alt="" />
                    <p class="text-gray-50">owonikokoolaoluwa@gmail.com</p>
                  </a>
                  <a
                    href="#"
                    class="flex justify-start items-center gap-4 flex-col md:flex-row"
                  >
                    <img :src="linkedInWhiteIcon" alt="" />
                    <p class="text-gray-50">
                      https://linkedIn.com/owonikoko-olaoluwa
                    </p>
                  </a>
                  <a
                    href="#"
                    class="flex justify-start items-center gap-4 flex-col md:flex-row"
                  >
                    <img :src="gitHubWhiteIcon" alt="" />
                    <p class="text-gray-50">
                      htpps://www.github.com/kokoserver
                    </p>
                  </a>
                  <a
                    href="#"
                    class="flex justify-start items-center gap-4 flex-col md:flex-row"
                  >
                    <img :src="phoneIcon" alt="" />
                    <p class="text-gray-50">+234-907-113-3023</p>
                  </a>
                </div>
              </div>
            </div>
            <img
              class="md:w-96 lg:w-full"
              :src="AboutImg"
              alt="dashboard image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
