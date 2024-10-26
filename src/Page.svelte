<script>
  import { fade } from 'svelte/transition'
  import LinkButton from './components/LinkButton.svelte'
  import Profile from './components/Profile.svelte'
  import { scrollToTop } from './utils'

  let {
    isHome = false,
    descriptionHtml = '',
    featuredLink = undefined,
    links = [],
  } = $props()

  $effect(() => {
    if (window.scrollY !== 0) scrollToTop()
  })
</script>

<div class="flex flex-wrap justify-center">
  <div class={isHome ? 'mt-8 mb-4' : 'mb-4'}>
    {#if !isHome}
      <a in:fade class="block text-center text-white italic mb-2" href="/">
        {'< Back to home'}
      </a>
    {/if}
    <Profile />
  </div>

  <div class="w-full">
    {#if descriptionHtml}
      <div class="text-center text-white">
        {@html descriptionHtml}
      </div>
    {/if}
    {#if featuredLink}
      <div class="my-4">
        <LinkButton featured {...featuredLink} />
      </div>
      <div class="my-8 opacity-50 text-center text-white text-sm">* * *</div>
    {/if}
    {#each links as link (Math.random())}
      <div class="my-4">
        <LinkButton {...link} />
      </div>
    {/each}
  </div>
</div>
