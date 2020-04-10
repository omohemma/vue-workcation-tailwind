<template>
  <div class="sm:relative">
    <button
      class="block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
    >
      <img
        class="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
        alt="Your avatar"
      />
    </button>

    <div class="sm:absolute sm:right-0 w-48 mt-2 bg-white rounded-lg py-2 shadow-xl">
      <a href="#" class="block px-4 py-2 hover:bg-indigo-500 hover:text-white">Account Settings</a>
      <a href="#" class="block px-4 py-2 hover:bg-indigo-500 hover:text-white">Support</a>
      <a href="#" class="block px-4 py-2 hover:bg-indigo-500 hover:text-white">Sign Out</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account Dropdown"
};
</script>
