<script>
  /**
   * @typedef {Object} Props
   * @property {string} [href]
   * @property {string} [mainLabel]
   * @property {string} [closeLabel]
   * @property {string} [message]
   * @property {any} [onBannerClose]
   */

  /** @type {Props} */
  let {
    href = '',
    mainLabel = '',
    closeLabel = 'Close',
    message = '',
    onBannerClose = () => {}
  } = $props();

</script>

<form
  class="w-full flex flex-col lg:flex-row items-center justify-center bg-white font-semibold text-secondary p-2 lg:py-4"
  action={href}
  method="get"
  target="_blank"
>
  <div class="text-center sm:text-xl mb-2 lg:mx-8">{message}</div>
  <div class="flex flex-wrap justify-center">
    <button
      class="bg-secondary hover:bg-opacity-90 border border-solid border-white font-semibold text-white rounded-lg m-1 px-4 py-2"
      type="submit">{mainLabel}</button
    >
    <button
      class="hover:bg-secondary hover:bg-opacity-10 border border-solid border-secondary font-semibold rounded-lg m-1 px-4 py-2 "
      type="button"
      onclick={onBannerClose}>{closeLabel}</button
    >
  </div>
</form>
