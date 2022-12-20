<script setup>
import WebIcon from "@/assets/webIcon.svg"
import gitHubWhiteIcon from "@/assets/gitHubWhiteIcon.svg"
</script>

<template>
  <section class="mb-20" id="portfolio">
    <h1
      class="text-primary hidden md:block text-3xl text-center capitalize font-semibold my-20"
    >
      portfolio
    </h1>
    <div class="bg-primary w-full">
      <div class="container space-y-10">
        <h1
          class="text-gray-50 text-3xl text-center capitalize font-semibold pt-20 md:hidden"
        >
          portfolio
        </h1>
        <div class="flex justify-center items-center px-2 md:px-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:p-10">
            <div
              class="flex flex-col items-center bg-primary border border-gray-600 rounded-lg shadow-md md:flex-row md:max-w-xl"
            >
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-[12rem] md:w-[10rem] md:rounded-none md:rounded-l-lg"
                src="https://images.unsplash.com/photo-1671128752323-2ec169c9785a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div
                class="flex flex-col justify-between gap-2 p-4 leading-normal"
              >
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-50 text-center md:text-left"
                >
                  Noteworthy technology acquisitions 2021
                </h5>
                <div
                  class="flex items-center justify-center md:justify-start space-x-5"
                >
                  <a href="#">
                    <img :src="gitHubWhiteIcon" alt="" />
                  </a>
                  <a href="#">
                    <img :src="WebIcon" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div
              class="flex flex-col items-center bg-primary border border-gray-600 rounded-lg shadow-md md:flex-row md:max-w-xl"
            >
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-[12rem] md:w-[10rem] md:rounded-none md:rounded-l-lg"
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div
                class="flex flex-col justify-between gap-2 p-4 leading-normal"
              >
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-50 text-center md:text-left"
                >
                  Noteworthy technology acquisitions 2021
                </h5>
                <div
                  class="flex items-center justify-center md:justify-start space-x-5"
                >
                  <a href="#">
                    <img :src="gitHubWhiteIcon" alt="" />
                  </a>
                  <a href="#">
                    <img :src="WebIcon" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col items-center bg-primary border border-gray-600 rounded-lg shadow-md md:flex-row md:max-w-xl"
            >
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-[12rem] md:w-[10rem] md:rounded-none md:rounded-l-lg"
                src="https://images.unsplash.com/photo-1670843837936-1e10a67239c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                alt=""
              />
              <div
                class="flex flex-col justify-between gap-2 p-4 leading-normal"
              >
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-50 text-center md:text-left"
                >
                  Noteworthy technology acquisitions 2021
                </h5>
                <div
                  class="flex items-center justify-center md:justify-start space-x-5"
                >
                  <a href="#">
                    <img :src="gitHubWhiteIcon" alt="" />
                  </a>
                  <a href="#">
                    <img :src="WebIcon" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col items-center bg-primary border border-gray-600 rounded-lg shadow-md md:flex-row md:max-w-xl"
            >
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-[12rem] md:w-[10rem] md:rounded-none md:rounded-l-lg"
                src="https://images.unsplash.com/photo-1671158024777-a36280bbf4ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                alt=""
              />
              <div
                class="flex flex-col justify-between gap-2 p-4 leading-normal"
              >
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-50 text-center md:text-left"
                >
                  Noteworthy technology acquisitions 2021
                </h5>
                <div
                  class="flex items-center justify-center md:justify-start space-x-5"
                >
                  <a href="#">
                    <img :src="gitHubWhiteIcon" alt="" />
                  </a>
                  <a href="#">
                    <img :src="WebIcon" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
