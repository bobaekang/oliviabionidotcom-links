<script>
  import Layout from '../Layout.svelte'
  import { affiliateLinks as links } from '../config'

  const descriptionHtml =
    'Here are some products I use and love. ❤️<br />Click any button below and get a discount on your first order! 🤩'
</script>

<Layout {descriptionHtml} {links} />
