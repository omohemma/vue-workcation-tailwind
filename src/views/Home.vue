<template>
  <div class="">
    <!-- Container -->
    <div class="flex bg-gray-100">
      <div
        class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:w-1/2 lg:max-w-full lg:py-24 lg:px-12"
      >
        <div class="xl:max-w-lg xl:ml-auto">
          <!-- Logo -->
          <img class="h-10" src="images/download.svg" alt="" />

          <!-- Banner Image -->
          <img
            class="mt-6 rounded-lg shadow-xl  sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden "
            src="images/beach-work.jpg"
            alt=""
          />

          <!-- Heading -->
          <h1
            class="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-3xl lg:text-2xl xl:text-2xl"
          >
            You can work from anywhere.
            <br class="hidden lg:inline" /><span class="text-indigo-500"
              >Take advantage of it.</span
            >
          </h1>

          <!-- Paragraph/Subheading -->

          <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl text-xl">
            Workcation helps you find work-friendly rentals in beautiful
            loactions so you can enjoy some nice weather even whne you are not
            on vacation
          </p>

          <!-- Call To Action -->
          <div class="mt-4 sm:mt-6">
            <a href="#" class=" btn btn-indigo shadow-lg sm:text-base "
              >Book your escape</a
            >
            <a href="#" class="btn  btn-gray sm:text-base ">Learn more</a>
          </div>
        </div>
      </div>

      <div class="hidden lg:block lg:w-1/2 lg:relative">
        <!-- Banner Image -->
        <img
          class="absolute inset-0 w-full h-full object-cover object-center"
          src="images/beach-work.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
