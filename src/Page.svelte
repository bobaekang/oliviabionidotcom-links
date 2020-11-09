<script>
  import { fade } from 'svelte/transition'
  import Profile from './components/Profile.svelte'
  import LinkButton from './components/LinkButton.svelte'

  export let isHome
  export let descriptionHtml
  export let links
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
    {#each links as link (Math.random())}
      <LinkButton {...link} />
    {/each}
  </div>
</div>
