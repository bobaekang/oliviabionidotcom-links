<script>
  import Layout from '../Layout.svelte'
  import { continuingEducation } from '../config'

  const { links } = continuingEducation
  const descriptionHtml =
    'My favorite programs for earning Continuing Education Credits. 👍<br /> I might get commissions from the following links.'
</script>

<Layout {descriptionHtml} {links} />
