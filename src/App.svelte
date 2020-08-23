<script>
  import router from 'page'
  import Home from './pages/Home.svelte'
  import Affiliates from './pages/Affiliates.svelte'

  let page, path
  router('/', () => ([page, path] = [Home, '/']))
  router('/affiliates', () => ([page, path] = [Affiliates, '/affiliates']))
  router('*', () => router.redirect('/'))
  router.start()

  $: description =
    path === '/affiliates'
      ? 'Enjoy discounts on products I use and love with my affiliate links! 😍 Support my work on Buy Me A Coffee. ☕️'
      : "Links to Olivia's podcasts, social, website, and more! 😍 Support my work on Buy Me A Coffee. ☕️"
</script>

<style>
  main {
    background-color: #c27ba0;
  }
</style>

<svelte:head>
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta property="og:title" content="Links | Olivia Bioni Wellness" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://links.oliviabioni.com/" />
  <meta
    property="og:image"
    content="https://links.oliviabioni.com/assets/avatar.jpg" />
</svelte:head>

<main class="min-h-screen">
  <div class="max-w-screen-sm m-auto p-4 lg:pt-20">
    <svelte:component this={page} />
  </div>
</main>
