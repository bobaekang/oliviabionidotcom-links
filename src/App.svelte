<script>
  import router from 'page'
  import Home from './pages/Home.svelte'
  import Affiliates from './pages/Affiliates.svelte'

  let page
  router('/', () => (page = Home))
  router('/affiliates', () => (page = Affiliates))
  router.start()
</script>

<main>
  <svelte:component this={page} />
</main>
