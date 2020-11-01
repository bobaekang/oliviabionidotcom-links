<script>
  import Layout from '../Layout.svelte'
  import { continuingEducation } from '../config'

  const { descriptionHtml, links } = continuingEducation
</script>

<Layout {descriptionHtml} {links} />
