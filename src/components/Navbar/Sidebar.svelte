<script>
  import links from "../../constants/links";
  import { link } from "svelte-routing";
  import globalStore from "../../stores/globalStore";
  import { fly, fade } from "svelte/transition";
  import LoginLink from "../LoginLink.svelte";
</script>

<div class="sidebar-container" transition:fly={{ x: -1000 }}>
  <div class="sidebar" transition:fade={{ delay: 400 }}>
    <!-- header -->
    <div class="sidebar-header">
      <button
        class="btn-close"
        on:click={() => {
          globalStore.toggleItem('sidebar', false);
        }}>
        <i class="fas fa-window-close" />
      </button>
    </div>
    <!-- site logo -->
    <img
      src="/assets/images/logo.svg"
      class="logo sidebar-logo"
      alt="razors logo" />
    <!-- links -->
    <ul class="sidebar-links">
      {#each links as sideLink}
        <li>
          <a
            href={sideLink.url}
            use:link
            on:click={() => {
              globalStore.toggleItem('sidebar', false);
            }}>
            {sideLink.text}
          </a>
        </li>
      {/each}
      <li>
        <LoginLink />
      </li>
    </ul>
  </div>
</div>
