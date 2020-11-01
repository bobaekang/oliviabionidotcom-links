<script>
  import Layout from '../Layout.svelte'
  import { pilatesStudentsManual } from '../config'

  const { links } = pilatesStudentsManual
  const descriptionHtml =
    'Helping you to get the most out of your next Pilates class!'
</script>

<Layout {descriptionHtml} {links} />
