<script>
  import Layout from '../Layout.svelte'
  import { pilatesTeachersManual } from '../config'

  const { descriptionHtml, links } = pilatesTeachersManual
</script>

<Layout {descriptionHtml} {links} />
