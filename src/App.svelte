<script>
  import router from 'page'
  import Page from './Page.svelte'
  import BackToTopButton from './components/BackToTopButton.svelte'
  import Banner from './components/Banner.svelte'
  import config from './config'

  let path, props
  function setRoute(pageConfig) {
    const { path: pagePath, props: pageProps } = pageConfig
    router(pagePath, () => ([path, props] = [pagePath, pageProps]))
  }

  setRoute(config.page.home)
  setRoute(config.page.affiliates)
  setRoute(config.page.continuingEducation)
  setRoute(config.page.pilatesStudentsManual)
  setRoute(config.page.pilatesTeachersManual)
  router('*', () => {
    path = '/'
    router.redirect('/')
  })
  router.start()

  $: meta = getMeta(path)
  function getMeta(currentPath) {
    for (const { path: pagePath, meta: pageMeta } of Object.values(config.page))
      if (currentPath === pagePath) return pageMeta
  }

  let showBanner = config.banner !== undefined
  function onBannerClose() {
    showBanner = false
  }

</script>

<svelte:head>
  <meta
    name="description"
    content={`${meta.description} Support my work on Buy Me A Coffee. ☕️`}
  />
  <meta
    property="og:description"
    content={`${meta.description} Support my work on Buy Me A Coffee. ☕️`}
  />
  <meta property="og:title" content="Links | Olivia Bioni Wellness" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`https://links.oliviabioni.com${path}`} />
  <meta property="og:image" content={meta.imagePath} />
</svelte:head>

<main class="min-h-screen bg-primary">
  <div
    class={`max-w-screen-sm m-auto p-4 lg:pt-20${
      showBanner ? ' pb-28 lg:pb-24' : ''
    }`}
  >
    <Page isHome={path === '/'} {...props} />
  </div>
  <div class="fixed bottom-0 w-full">
    <BackToTopButton />
    {#if showBanner}
      <Banner {...config.banner} {onBannerClose} />
    {/if}
  </div>
</main>
