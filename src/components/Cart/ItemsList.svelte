<script>
  import Item from "./Item.svelte";
  import cart, { cartTotal, setStorageCart } from "../../stores/cart";
  import { fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { afterUpdate } from "svelte";
  afterUpdate(() => {
    setStorageCart($cart);
  });
</script>

<section class="cart-items">
  <article>
    {#each $cart as cartItem, index (cartItem.id)}
      <div
        in:fly={{ delay: (index + 1) * 500, x: 100 }}
        out:fly={{ x: -100 }}
        animate:flip>
        <Item {...cartItem} />
      </div>
    {:else}
      <h2 class="empty-cart">is currently empty...</h2>
    {/each}
  </article>
  <h3 class="cart-total">total : ${$cartTotal}</h3>
</section>
