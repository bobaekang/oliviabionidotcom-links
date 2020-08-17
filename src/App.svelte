<script>
  import router from 'page'
  import Home from './pages/Home.svelte'
  import Affiliates from './pages/Affiliates.svelte'

  let page
  router('/', () => (page = Home))
  router('/affiliates', () => (page = Affiliates))
  router.start()
</script>

<style>
  main {
    background-color: #c27ba0;
  }
</style>

<main class="min-h-screen">
  <div class="max-w-screen-sm m-auto p-4 lg:pt-20">
    <svelte:component this={page} />
  </div>
</main>
