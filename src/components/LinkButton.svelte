<script>
  import { fade } from 'svelte/transition'

  export let avatar
  export let href
  export let external
  export let title
  export let detail = ''
</script>

<a
  in:fade
  class="flex align-center w-full border border-solid border-white
    hover:bg-white hover:bg-opacity-25 text-white rounded-lg my-4 p-4"
  {href}
  target={external ? '_block' : ''}
  rel={external ? 'noreferrer noopener' : ''}>
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
