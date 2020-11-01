<script>
  import Layout from '../Layout.svelte'
  import { pilatesTeachersManual } from '../config'

  const { links } = pilatesTeachersManual
  const descriptionHtml = 'Your guide to becoming a great Pilates teacher!'
</script>

<Layout {descriptionHtml} {links} />
