<script>
  import SmallNavbar from "./SmallNavbar.svelte";
  import BigNavbar from "./BigNavbar.svelte";
  import globalStore from "../../stores/globalStore";

  let screenWidth;
  $: if (screenWidth > 992) {
    globalStore.toggleItem("sidebar", false);
  }
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth > 992}
  <BigNavbar />
{:else}
  <SmallNavbar />
{/if}
