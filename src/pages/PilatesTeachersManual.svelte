<script>
  import Profile from '../components/Profile.svelte'
  import BuyMeACoffeeButton from '../components/BuyMeACoffeeButton.svelte'
  import LinkButton from '../components/LinkButton.svelte'
  import { pilatesTeachersManualLinks } from '../config'
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
      Your guide to becoming a great Pilates teacher!
    </div>
    {#each pilatesTeachersManualLinks as link}
      <LinkButton {...link} />
    {/each}
  </div>
</div>
