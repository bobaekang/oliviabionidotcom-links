<script>
  export let avatar
  export let href
  export let newtab
  export let title
  export let detail
</script>

<a
  class="flex align-center w-full border border-solid border-white
  hover:bg-white hover:bg-opacity-25 text-white rounded-lg my-4 p-4"
  {href}
  target={newtab ? '_block' : ''}
  rel={newtab ? 'noreferrer noopener' : ''}>
  <img class="h-12 w-12" src={avatar} alt="Link avatar" />

  <div class="flex flex-col justify-center px-4">
    <strong>{title}</strong>
    {#if detail}
      <div>{detail}</div>
    {/if}
  </div>
</a>
