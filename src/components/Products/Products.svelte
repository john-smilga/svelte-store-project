<script>
  export let title = "";
  import products from "../../stores/products";
  import Product from "./Product.svelte";
  import Loading from "../Loading.svelte";
</script>

<section class="section">
  <h2 class="section-title">{title}</h2>
  <div class="products-center">
    {#each $products as product (product.id)}
      <Product {product} />
    {:else}
      <Loading />
    {/each}
  </div>

</section>
