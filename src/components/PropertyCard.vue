<template>
  <div>
    <!-- overflow-hidden make images wrap with div container -->

    <!-- IE 11 Hack -->
    <!-- <div
      class="h-48 bg-cover bg-center"
      :style="{ backgroundImage: `url('${property.imageUrl}')` }"
    ></div>-->

    <!-- Maintain aspect ratio of image across 
    different screens by using absolute positioning

    -> Wrap image into a parent div and 
    make it relative to its paarent and then make the image 
    occupy full height.
    
    -->

    <div class="bg-red-500 relative pb-5/6">
      <img
        class="absolute h-full w-full object-cover rounded-lg shadow-md"
        :src="property.imageUrl"
        :alt="property.imageAlt"
      />
    </div>

    <!-- Overlap card on image
    using negative margin
    -->
    <div class="relative px-4 -mt-12">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="flex items-baseline">
          <!-- 
          badge could be -> bg-teal-500 text-white 
          yet it competes with the main focus of the 
          card which is Property Title
          -->
          <span
            class="inline-block bg-teal-200 text-teal-800 px-2 rounded-full text-xs uppercase font-semibold tracking-wide"
          >New</span>
          <div
            class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide"
          >{{ property.beds }} beds &bull; {{ property.baths }} baths</div>
        </div>

        <h4 class="mt-1 font-semibold text-lg leading-tight truncate">{{ property.title }}</h4>

        <div class="mt-1">
          {{ property.formattedPrice }}
          <span class="text-gray-600 text-sm">/ wk</span>
        </div>
        <div class="mt-2 flex items-center">
          <!-- SVG -->
          <svg
            v-for="i in 5"
            :key="i"
            class="h-4 w-4 fill-current"
            :class="i <= property.rating ? 'text-teal-500' : 'text-gray-300'"
            viewBox="0 0 24 24"
          >
            <path
              d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
            />
          </svg>
          <span class="text-gray-600 text-sm ml-2">{{ property.reviewCount }} reviews</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Property Card",
  props: {
    property: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped></style>
