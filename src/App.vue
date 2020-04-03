<template>
  <div>
    <Navigation />
    <div id="app" class="antialiased text-gray-900">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  name: "app",
  components: {
    Navigation
  }
};
</script>
