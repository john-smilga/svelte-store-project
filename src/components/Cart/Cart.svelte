<script>
  import globalStore from "../../stores/globalStore";
  import { fly, fade, blur } from "svelte/transition";
  import { link } from "svelte-routing";
  import ItemsList from "./ItemsList.svelte";
  import user from "../../stores/user";
</script>

<div class="cart-overlay" transition:blur>
  <div class="cart-container" transition:fly={{ x: 100 }}>
    <div class="cart" transition:fade={{ delay: 400 }}>
      <!-- cart header -->
      <div class="cart-header">
        <button
          class="btn-close"
          on:click={() => {
            globalStore.toggleItem('cart', false);
          }}>
          <i class="fas fa-window-close" />
        </button>
        <h2 class="cart-title">your bag</h2>
        <span />
      </div>
      <!-- end cart header -->
      <!-- cart items -->
      <ItemsList />
      <!-- end of cart items -->
      <!-- cart footer -->
      <div class="cart-footer">
        {#if $user.jwt}
          <a
            href="/checkout"
            use:link
            class="btn btn-primary btn-block"
            on:click={() => {
              globalStore.toggleItem('cart', false);
            }}>
            checkout
          </a>
        {:else}
          <p class="cart-login">
            in order to checkout please
            <a
              href="/login"
              use:link
              on:click={() => {
                globalStore.toggleItem('cart', false);
              }}>
              login
            </a>
          </p>
        {/if}
      </div>
      <!-- end of cart footer -->
    </div>
  </div>
</div>
