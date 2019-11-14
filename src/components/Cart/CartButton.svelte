<script>
  import globalStore from "../../stores/globalStore";
  import cart from "../../stores/cart";
  $: total = $cart.reduce((acc, curr) => {
    return (acc += curr.amount);
  }, 0);
</script>

<!-- cart toggle -->
<div class="btn-cart-container">
  <button
    class="btn-cart-toggle"
    on:click={() => {
      globalStore.toggleItem('cart', true);
    }}>
    <i class="fas fa-cart-plus" />
  </button>
  <span class="btn-cart-items">{total}</span>
</div>
