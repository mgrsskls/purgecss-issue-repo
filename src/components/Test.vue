<template>
  <div>should be blue</div>
  <div>should be orange</div>
</template>

<script>
export default {};
</script>

<style>
@import "../orange.css";

div:nth-child(1) {
  color: var(--color-blue);
}

div:nth-child(2) {
  color: var(--color-orange);
}
</style>
