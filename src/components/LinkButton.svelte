<script>
  import { fade } from 'svelte/transition'

  export let avatar
  export let href
  export let featured = false
  export let external
  export let title
  export let detail = ''

</script>

{#if featured}
  <div class="text-white flex items-center font-bold text-sm mb-2">
    <img class="h-4 w-4 mr-1" src="../assets/star.svg" alt="featured link" />
    <span>Featured Link</span>
  </div>
{/if}
<a
  in:fade
  class="flex align-center w-full border border-solid border-white
    hover:bg-white hover:bg-opacity-25 text-white rounded-lg p-4"
  style={featured ? 'box-shadow: 0px 0px 6px 2px #fff6' : ''}
  {href}
  target={external ? '_block' : ''}
  rel={external ? 'noreferrer noopener' : ''}
>
  <img class="h-12 w-12 rounded-md" src={avatar} alt="Link avatar" />

  <div class="flex justify-between items-center w-full">
    <div class="flex flex-col justify-center px-4 w-full">
      <strong>{title}</strong>
      {#if detail}
        <div>{detail}</div>
      {/if}
    </div>
    {#if external}
      <img
        class="h-4 w-4"
        src="../assets/external-link.svg"
        alt="external link"
      />
    {/if}
  </div>
</a>
