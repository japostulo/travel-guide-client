<template>
    <nav class="bg-white">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button class="inline-flex items-center justify-center p-2 rounded-md text-blue-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-8 w-auto" src="../../src/assets/travel-brand.png" alt="Workflow">
          <img class="hidden lg:block" src="../../src/assets/travel-guide-brand.png" alt="Workflow">
        </div>

        <div class="hidden sm:flex sm:ml-6 flex items-center">
          <div class="flex space-x-4">
            <router-link to="/Home" class="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-900">Home</router-link>
            <router-link to="/myTravel" class="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-900">Minhas Viagens</router-link>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

        <!-- Profile dropdown -->
        <div class="ml-3 relative" @click="toggle = !toggle">
          <div>
            <button class="bg-blue-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white" id="user-menu" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </button>
          </div>
          <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
          <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" v-if="toggle" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <a tag="a" class="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-100" role="menuitem" @click="logout">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
  <div class="hidden">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <router-link to="/Home" class="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-900">Home</router-link>
      <router-link to="/myTravel" class="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-900">Minhas Viagens</router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    data() {
        return {
            toggle: false,
        }
    },
    methods:{
      logout() {
        
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          this.$router.push('/login')
      }
    }
}
</script>

<style>

</style>