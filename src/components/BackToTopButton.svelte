<script>
  import { fade } from 'svelte/transition'
  import { scrollToTop } from '../utils'

  let y
  $: hidden = y < 100
</script>

<svelte:window bind:scrollY={y} />

{#if !hidden}
  <button
    transition:fade
    class="fixed bottom-0 right-0 bg-white rounded-md bg-opacity-25 hover:bg-opacity-50 p-3 sm:p-4 m-6 sm:mx-8"
    on:click={scrollToTop}>
    <svg
      version="1.1"
      x="0px"
      y="0px"
      width="32px"
      height="32px"
      viewBox="0 0 100 100">
      <g>
        <path
          fill="#fff"
          d="M97.562,64.692L50.49,17.618c-0.75-0.75-2.078-0.75-2.828,0L0.586,64.693C0.211,65.068,0,65.577,0,66.106
		c0,0.53,0.211,1.039,0.586,1.414l12.987,12.987c0.391,0.391,0.902,0.586,1.414,0.586c0.512,0,1.023-0.195,1.414-0.586
		l32.674-32.674L81.75,80.506c0.75,0.751,2.078,0.75,2.828,0l12.984-12.987C98.344,66.739,98.344,65.472,97.562,64.692z" />
      </g>
    </svg>
  </button>
{/if}
