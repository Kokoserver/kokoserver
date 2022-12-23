<script setup>
import EducationIcon from "@/assets/educationIcon.svg"
import WorkingExperience from "@/assets/workinExperience.svg"
import AboutImg from "@/assets/about-design-img.svg"
import linkedInWhiteIcon from "@/assets/linkedInWhiteIcon.svg"
import gitHubWhiteIcon from "@/assets/gitHubWhiteIcon.svg"
import mailWhiteIcon from "@/assets/mailWhiteIcon.svg"
import phoneIcon from "@/assets/phoneIcon.svg"
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
            class="gap-5 md:gap-10 md:py-8 mx-auto max-w-screen-xl xl:gap-16 flex flex-col-reverse lg:flex-row py-5"
          >
            <div class="mt-4 md:mt-0 text-center md:text-left w-full md:w-1/2">
              <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-50 dark:text-gray-50"
              >
                Hi There
              </h2>
              <p
                class="mb-6 font-light text-gray-50 md:text-lg dark:text-gray-400"
              >
                I am a BSE graduate skilled in software debugging, design, and
                testing. I'm a strong team player who is able to quickly learn
                and apply new technologies.
              </p>
              <p
                class="mb-6 font-light text-gray-50 md:text-lg dark:text-gray-400"
              >
                Since beginning my journey as a software engineer nearly 4 years
                ago, I have collaborated with talented people to create digital
                products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my skills one problem at a time.
              </p>

              <!-- start contact icons -->
              <div class="hidden md:block">
                <div
                  class="flex items-center justify-center md:justify-start space-x-5"
                >
                  <div class="flex flex-col gap-8">
                    <a
                      href="mailto:owonikokoolaoluwa@hotmail.com"
                      class="flex justify-start items-center gap-4 flex-row"
                    >
                      <img :src="mailWhiteIcon" alt="" />
                      <p class="text-gray-50">owonikokoolaoluwa@hotmail.com</p>
                    </a>
                    <a
                      href="https://linkedIn.com/owonikoko-olaoluwa"
                      class="flex justify-start items-center gap-4 flex-row"
                    >
                      <img :src="linkedInWhiteIcon" alt="" />
                      <p class="text-gray-50">
                        https://linkedIn.com/owonikoko-olaoluwa
                      </p>
                    </a>
                    <a
                      href="https://www.github.com/kokoserver"
                      class="flex justify-start items-center gap-4 flex-row"
                    >
                      <img :src="gitHubWhiteIcon" alt="" />
                      <p class="text-gray-50">
                        https://www.github.com/kokoserver
                      </p>
                    </a>
                    <a
                      href="#"
                      class="flex justify-start items-center gap-4 flex-row"
                    >
                      <img :src="phoneIcon" alt="" />
                      <p class="text-gray-50">+234-907-113-3023</p>
                    </a>
                  </div>
                </div>
              </div>
              <!-- end contact icons-->

              <!-- collapse start here -->

              <div
                id="accordion-collapse"
                data-accordion="collapse"
                class="md:hidden block"
              >
                <div class="py-3 flex items-center flex-col md:block">
                  <div class="flex items-center gap-3">
                    <h2 id="accordion-collapse-heading-1">
                      <button
                        type="button"
                        class="acc_button"
                        data-accordion-target="#accordion-collapse-body-1"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-1"
                      >
                        <span>Education</span>
                        <svg
                          data-accordion-icon
                          class="w-6 h-6 rotate-180 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </h2>
                    <h2 id="accordion-open-heading-2">
                      <button
                        type="button"
                        class="acc_button"
                        data-accordion-target="#accordion-open-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-open-body-2"
                      >
                        <span class="flex items-center gap-2">Experience</span>
                        <svg
                          data-accordion-icon
                          class="w-6 h-6 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </h2>
                  </div>
                  <div>
                    <div
                      id="accordion-collapse-body-1"
                      class="hidden"
                      aria-labelledby="accordion-collapse-heading-1"
                    >
                      <div
                        class="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 w-96"
                      >
                        <div class="flex flex-col items-center gap-5">
                          <div
                            class="max-w-sm p-6 text-center md:text-left hover:shadow-md transition-all bg-gray-50"
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
                            class="max-w-sm p-6 text-center md:text-left hover:shadow-md transition-all bg-gray-50"
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
                            class="max-w-sm p-6 text-center md:text-left hover:shadow-md transition-all bg-gray-50"
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
                    </div>
                    <div
                      id="accordion-open-body-2"
                      class="hidden"
                      aria-labelledby="accordion-open-heading-2"
                    >
                      <div
                        class="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 w-96"
                      >
                        <div class="flex flex-col items-center gap-5">
                          <div
                            class="flex flex-col justify-center items-center gap-5"
                          >
                            <div
                              class="max-w-sm p-6 text-center md:text-left hover:shadow-md transition-all bg-gray-50"
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
                                Update, maintain, and publish content using a
                                custom content management system API, maintained
                                the projects using Git and GitHub and various
                                other software tools.
                              </p>
                            </div>
                          </div>
                          <div
                            class="flex flex-col justify-center items-center gap-5"
                          >
                            <div
                              class="max-w-sm p-6 text-center md:text-left hover:shadow-md transition-all bg-gray-50"
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
                                Developed and maintain backend API for company
                                official website, deploy backend software to
                                Heroku, used Google Cloud Storage for static
                                files, collaborate with frontend developers and
                                project manager to execute strategists,
                                designers, and creators' visions.
                              </p>
                            </div>
                          </div>
                          <div
                            class="flex flex-col justify-center items-center gap-5"
                          >
                            <div
                              class="max-w-sm p-6 text-center md:text-left hover:shadow-md transition-all bg-gray-50"
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
                                Update, maintain, and publish content using a
                                custom content management system API, maintained
                                the projects using Git and GitHub and various
                                other software tools.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- collapse ends here -->
            </div>
            <div class="w-full md:w-1/2">
              <img
                class="md:w-96 lg:w-[35rem]"
                :src="AboutImg"
                alt="dashboard image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
