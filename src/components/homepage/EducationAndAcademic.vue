<script setup>
import EducationIcon from "@/assets/educationIcon.svg"
import WorkingExperience from "@/assets/workinExperience.svg"
</script>

<template>
  <section class="mb-20" id="achievement">
    <div class="container">
      <div class="flex flex-col md:flex-row justify-center item-center gap-5">
        <div>
          <h1
            class="text-primary text-3xl text-center capitalize font-semibold my-20"
          >
            Education
          </h1>
          <div class="flex flex-col justify-center items-center gap-5">
            <div
              class="max-w-sm p-6 text-center md:text-left hover:shadow-md transition-all"
            >
              <img
                :src="EducationIcon"
                alt=""
                class="w-10 h-10 mb-2 inline-block md:flex"
              />

              <h5
                class="mb-2 text-2xl font-semibold tracking-tight text-primary dark:text-white"
              >
                Bsc. Computer Science
              </h5>

              <p class="mb-2 font-normal text-gray-600">
                Kwara state university | 2017 - 2022
              </p>
              <p class="mb-3 font-normal text-gray-400">
                P.M.B 1530, 23431, Malete, Kwara State, Nigeria.
              </p>
            </div>
            <div
              class="max-w-sm p-6 text-center md:text-left hover:shadow-md transition-all"
            >
              <img
                :src="EducationIcon"
                alt=""
                class="w-10 h-10 mb-2 inline-block md:flex"
              />

              <h5
                class="mb-2 text-2xl font-semibold tracking-tight text-primary dark:text-white"
              >
                Bsc. Computer Science
              </h5>

              <p class="mb-2 font-normal text-gray-600">
                Kwara state university | 2017 - 2022
              </p>
              <p class="mb-3 font-normal text-gray-400">
                P.M.B 1530, 23431, Malete, Kwara State, Nigeria.
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center gap-5">
            <div
              class="max-w-sm p-6 text-center md:text-left hover:shadow-md transition-all"
            >
              <img
                :src="EducationIcon"
                alt=""
                class="w-10 h-10 mb-2 inline-block md:flex"
              />

              <h5
                class="mb-2 text-2xl font-semibold tracking-tight text-primary dark:text-white"
              >
                Bsc. Computer Science
              </h5>

              <p class="mb-2 font-normal text-gray-600">
                Kwara state university | 2017 - 2022
              </p>
              <p class="mb-3 font-normal text-gray-400">
                P.M.B 1530, 23431, Malete, Kwara State, Nigeria.
              </p>
            </div>
          </div>
        </div>
        <!-- border -->
        <div
          class="hidden md:flex border-r-4 border-r-primary rounded-md"
        ></div>
        <!-- end border -->
        <div>
          <h1
            class="text-primary text-3xl text-center capitalize font-semibold my-20"
          >
            Experience
          </h1>
          <div class="flex flex-col justify-center items-center gap-5">
            <div
              class="max-w-sm p-6 text-center md:text-left hover:shadow-md transition-all"
            >
              <img
                :src="WorkingExperience"
                alt=""
                class="w-10 h-10 mb-2 inline-block md:flex"
              />

              <h5
                class="mb-2 text-2xl font-semibold tracking-tight text-primary dark:text-white"
              >
                Backend Developer
              </h5>

              <p class="mb-2 font-normal text-gray-600">
                Stanforte Edge | September 2020 - July 2022
              </p>
              <p class="mb-3 font-normal text-gray-400">
                Update, maintain, and publish content using a custom content
                management system API, maintained the projects using Git and
                GitHub and various other software tools.
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center gap-5">
            <div
              class="max-w-sm p-6 text-center md:text-left hover:shadow-md transition-all"
            >
              <img
                :src="WorkingExperience"
                alt=""
                class="w-10 h-10 mb-2 inline-block md:flex"
              />

              <h5
                class="mb-2 text-2xl font-semibold tracking-tight text-primary dark:text-white"
              >
                Full stack Developer
              </h5>

              <p class="mb-2 font-normal text-gray-600">
                Project enable Africa | August 2019 - May · 2020
              </p>
              <p class="mb-3 font-normal text-gray-400">
                Developed and maintain backend API for company official website,
                deploy backend software to Heroku, used Google Cloud Storage for
                static files, collaborate with frontend developers and project
                manager to execute strategists, designers, and creators'
                visions.
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center gap-5">
            <div
              class="max-w-sm p-6 text-center md:text-left hover:shadow-md transition-all"
            >
              <img
                :src="WorkingExperience"
                alt=""
                class="w-10 h-10 mb-2 inline-block md:flex"
              />

              <h5
                class="mb-2 text-2xl font-semibold tracking-tight text-primary dark:text-white"
              >
                Junior Backend Developer
              </h5>

              <p class="mb-2 font-normal text-gray-600">
                EDGD Media | Feb 2018 - Jun 2019
              </p>
              <p class="mb-3 font-normal text-gray-400">
                Update, maintain, and publish content using a custom content
                management system API, maintained the projects using Git and
                GitHub and various other software tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
