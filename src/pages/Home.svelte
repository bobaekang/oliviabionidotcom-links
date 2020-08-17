<script>
  import Profile from '../components/Profile.svelte'
  import BuyMeACoffeeButton from '../components/BuyMeACoffeeButton.svelte'
  import LinkButton from '../components/LinkButton.svelte'
  import { homeLinks } from '../config'
</script>

<div class="flex flex-wrap justify-center">
  <div class="mt-8 mb-4">
    <Profile />
  </div>

  <div class="w-full">
    {#each homeLinks as link}
      <LinkButton {...link} />
    {/each}
  </div>
</div>
