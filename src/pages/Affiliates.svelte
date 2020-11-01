<script>
  import Layout from '../Layout.svelte'
  import { affiliates } from '../config'

  const { descriptionHtml, links } = affiliates
</script>

<Layout {descriptionHtml} {links} />
