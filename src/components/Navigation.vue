<template>
  <header class="bg-gray-900 sm:flex sm:justify-between items-center sm:py-3 sm:px-4">
    <div class="flex items-end justify-between py-3 px-4 sm:p-0">
      <div>
        <img class="h-8" src="../../public/images/logo-inverted.svg" alt />
      </div>
      <div>
        <button
          type="button"
          class="block text-gray-500 hover:text-white focus:text-white focus:outline-none sm:hidden"
          @click="isActive"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpened === true"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              fill-rule="evenodd"
              v-else
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="px-2 pt-2 pb-4 sm:block sm:flex sm:p-0"
      :class="isOpened === true ? 'block' : 'hidden'"
    >
      <a
        href="#"
        class="block text-white font-semibold py-1 px-2 rounded hover:bg-gray-800"
      >List your property</a>
      <a
        href="#"
        class="mt-1 block text-white font-semibold py-1 px-2 rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
      >Trips</a>
      <a
        href="#"
        class="mt-1 block text-white font-semibold py-1 px-2 rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
      >Messages</a>

      <AccountDropdown class="sm:ml-6" />>
    </div>
  </header>
</template>

<script>
import AccountDropdown from "@/components/AccountDropdown.vue";
export default {
  name: "Components Preview",
  components: {
    AccountDropdown
  },
  data() {
    return {
      isOpened: false
    };
  },
  methods: {
    isActive() {
      this.isOpened = !this.isOpened;
    }
  }
};
</script>

<style lang="scss" scoped></style>
