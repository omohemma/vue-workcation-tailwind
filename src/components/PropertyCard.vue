<template>
  <div class="bg-white rounded-lg overflow-hidden border shadow-lg">
    <img :src="property.imageUrl" alt="property.imageAlt" />

    <div class="p-6">
      <h4>{{ property.title }}</h4>
      <div>{{ property.beds }} beds &bull; {{ property.baths }} baths</div>
      <div>
        {{ property.formattedPrice }} /
        <i class="fa fa-wikipedia-w" aria-hidden="true"></i>
      </div>
      <div>
        {{ property.rating }}/ 5 Stars (based on
        {{ property.reviewCount }} reviews)
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
