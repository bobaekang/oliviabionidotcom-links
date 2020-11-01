<script>
  import Layout from '../Layout.svelte'
  import { home } from '../config'

  const { links } = home
</script>

<Layout isHome {links} />
