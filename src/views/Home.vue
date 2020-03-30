<template>
  <div class="">
    <!-- Container -->
    <div class="flex bg-gray-100">
      <div
        class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:w-1/2 lg:max-w-full lg:py-24 lg:px-12"
      >
        <div class="xl:max-w-lg xl:ml-auto">
          <!-- Logo -->
          <img class="h-10" src="images/logo.svg" alt="" />

          <!-- Banner Image -->
          <images
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

    <div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <h2 class="text-xl text-gray-900">Popular destinations</h2>
      <p class="text-gray-600">
        A selection of great work-friendly cities with lots to see and explore.
      </p>
      <!-- Card Box -->
      <div class="flex flex-wrap mx-4">
        <!-- Cards Begin-->
        <div
          class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3"
          v-for="destination in popularDestinations"
          :key="destination"
        >
          <div
            class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden"
          >
            <img
              class="h-32 w-32 flex-shrink-0"
              :src="destination.imageUrl"
              :alt="destination.imageAlt"
            />
            <div class="px-6 py-4">
              <h3 class="text-lg font-semibold text-gray-800">
                {{ destination.city }}
              </h3>
              <p class="text-gray-600">
                ${{ destination.averagePrice }}/night average
              </p>
              <div class="mt-4">
                <a
                  href="#"
                  class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
                  >Explore {{ destination.propertyCount }} properties</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Cards End -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      popularDestinations: [
        {
          city: "Toronto",
          averagePrice: 120,
          propertyCount: 76,
          imageUrl: "/images/toronto.jpg",
          imageAlt: "Toronto skyline"
        },
        {
          city: "Malibu",
          averagePrice: 215,
          propertyCount: 43,
          imageUrl: "/images/malibu.jpg",
          imageAlt: "Cliff in Malibu"
        },
        {
          city: "Chicago",
          averagePrice: 130,
          propertyCount: 115,
          imageUrl: "/images/chicago.jpg",
          imageAlt: "Chicago skyline"
        },
        {
          city: "Seattle",
          averagePrice: 135,
          propertyCount: 63,
          imageUrl: "/images/seattle.jpg",
          imageAlt: "Seattle skyline"
        },
        {
          city: "Colorado",
          averagePrice: 85,
          propertyCount: 47,
          imageUrl: "/images/colorado.jpg",
          imageAlt: "Lake in Colorado"
        },
        {
          city: "Miami",
          averagePrice: 115,
          propertyCount: 86,
          imageUrl: "/images/miami.jpg",
          imageAlt: "Beach in Miami"
        }
      ]
    };
  }
};
</script>
