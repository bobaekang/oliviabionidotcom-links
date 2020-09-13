<script>
  import router from 'page'
  import Home from './pages/Home.svelte'
  import Affiliates from './pages/Affiliates.svelte'
  import PilatesStudentsManual from './pages/PilatesStudentsManual.svelte'
  import PilatesTeachersManual from './pages/PilatesTeachersManual.svelte'

  let page, path
  router('/', () => ([page, path] = [Home, '/']))
  router('/affiliates', () => ([page, path] = [Affiliates, '/affiliates']))
  router(
    '/pilatesstudentsmanual',
    () => ([page, path] = [PilatesStudentsManual, '/pilatesstudentsmanual'])
  )
  router(
    '/pilatesteachersmanual',
    () => ([page, path] = [PilatesTeachersManual, '/pilatesteachersmanual'])
  )
  router('*', () => router.redirect('/'))
  router.start()

  $: description = getDescription(path)
  function getDescription(path) {
    switch (path) {
      case '/affiliates':
        return 'Enjoy discounts on products I use and love with my affiliate links! 😍'
      case '/pilatesstudentsmanual':
        return 'Helping you to get the most out of your next Pilates class! 😎'
      case '/pilatesteachersmanual':
        return 'Your guide to becoming a great Pilates teacher! 💪'
      default:
        return "Links to Olivia's podcasts, social, website, and more! 😍"
    }
  }
</script>

<style>
  main {
    background-color: #c27ba0;
  }
</style>

<svelte:head>
  <meta
    name="description"
    content={`${description} Support my work on Buy Me A Coffee. ☕️`} />
  <meta
    property="og:description"
    content={`${description} Support my work on Buy Me A Coffee. ☕️`} />
  <meta property="og:title" content="Links | Olivia Bioni Wellness" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`https://links.oliviabioni.com${path}`} />
  <meta
    property="og:image"
    content="https://links.oliviabioni.com/assets/og_image.jpg" />
</svelte:head>

<main class="min-h-screen">
  <div class="max-w-screen-sm m-auto p-4 lg:pt-20">
    <svelte:component this={page} />
  </div>
</main>
