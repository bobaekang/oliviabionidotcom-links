<script>
  import router from 'page'
  import Page from './Page.svelte'
  import BackToTopButton from './components/BackToTopButton.svelte'
  import config from './config'
  import { scrollToTop } from './utils'

  let path, props
  function setRoute(pageConfig) {
    const { path: pagePath, props: pageProps } = pageConfig
    router(pagePath, () => {
      ;[path, props] = [pagePath, pageProps]
      scrollToTop()
    })
  }

  setRoute(config.home)
  setRoute(config.affiliates)
  setRoute(config.continuingEducation)
  setRoute(config.pilatesStudentsManual)
  setRoute(config.pilatesTeachersManual)
  router('*', () => router.redirect('/'))
  router.start()

  $: meta = getMeta(path)
  function getMeta(currentPath) {
    for (const { path: pagePath, meta: pageMeta } of Object.values(config))
      if (currentPath === pagePath) return pageMeta
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
    content={`${meta.description} Support my work on Buy Me A Coffee. ☕️`} />
  <meta
    property="og:description"
    content={`${meta.description} Support my work on Buy Me A Coffee. ☕️`} />
  <meta property="og:title" content="Links | Olivia Bioni Wellness" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`https://links.oliviabioni.com${path}`} />
  <meta property="og:image" content={meta.imagePath} />
</svelte:head>

<main class="min-h-screen">
  <div class="max-w-screen-sm m-auto p-4 lg:pt-20">
    <Page {...props} />
  </div>
  <BackToTopButton />
</main>
