<script>
  import router from 'page'
  import Layout from './Layout.svelte'
  import config from './config'

  let props, path
  router('/', () => ([props, path] = [config.home, '/']))
  router(
    '/affiliates',
    () => ([props, path] = [config.affiliates, '/affiliates'])
  )
  router(
    '/continuingeducation',
    () => ([props, path] = [config.continuingEducation, '/continuingeducation'])
  )
  router(
    '/pilatesstudentsmanual',
    () =>
      ([props, path] = [config.pilatesStudentsManual, '/pilatesstudentsmanual'])
  )
  router(
    '/pilatesteachersmanual',
    () =>
      ([props, path] = [config.pilatesTeachersManual, '/pilatesteachersmanual'])
  )
  router('*', () => router.redirect('/'))
  router.start()

  $: description = getDescription(path)
  $: imagePath = getImagePath(path)
  function getDescription(path) {
    switch (path) {
      case '/affiliates':
        return 'Enjoy discounts on products I use and love with my affiliate links! 😍'
      case '/cec':
        return 'Try these awesome programs for your Continuing Education Credit! 🤓'
      case '/pilatesstudentsmanual':
        return 'Helping you to get the most out of your next Pilates class! 😎'
      case '/pilatesteachersmanual':
        return 'Your guide to becoming a great Pilates teacher! 💪'
      default:
        return "Links to Olivia's podcasts, social, website, and more! 😍"
    }
  }
  function getImagePath(path) {
    switch (path) {
      case '/pilatesstudentsmanual':
        return 'https://links.oliviabioni.com/assets/og_psm.png'
      case '/pilatesteachersmanual':
        return 'https://links.oliviabioni.com/assets/og_ptm.png'
      default:
        return 'https://links.oliviabioni.com/assets/og_image.jpg'
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
  <meta property="og:image" content={imagePath} />
</svelte:head>

<main class="min-h-screen">
  <div class="max-w-screen-sm m-auto p-4 lg:pt-20">
    <Layout {...props} />
  </div>
</main>
