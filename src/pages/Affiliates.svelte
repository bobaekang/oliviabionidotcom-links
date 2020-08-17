<script>
  import Profile from '../components/Profile.svelte'
  import BuyMeACoffeeButton from '../components/BuyMeACoffeeButton.svelte'
  import LinkButton from '../components/LinkButton.svelte'
  import { affiliateLinks } from '../config'
</script>

<div class="flex flex-wrap justify-center">
  <div class="mb-4">
    <a class="block text-center text-white italic mb-2" href="/">
      {'< Back to home'}
    </a>
    <Profile />
  </div>

  <div class="w-full">
    <div class="text-center text-white">
      Here are some products I use and love. ❤️
      <br />
      Click any button below and get a discount on your first order! 🤩
    </div>
    {#each affiliateLinks as link}
      <LinkButton {...link} />
    {/each}
  </div>
</div>
