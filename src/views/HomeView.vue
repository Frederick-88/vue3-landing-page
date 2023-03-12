<script setup></script>

<template>
  <div>
    <h1>Test App</h1>
    <i class="icon-twitter"></i>
    <div class="circle"></div>
    <div class="circle2"></div>
  </div>
</template>

<style lang="scss">
.circle {
  width: 160px;
  height: 160px;
  display: block;
  box-shadow: 0px 10px 20px 0px rgba($black, 0.5), inset 0px -1px 1px 0px $white;
  background: linear-gradient(
    339deg,
    rgba($white, 0.8) 0%,
    hsl(0, 0%, 100%) 100%
  );
  border-radius: 100px;
}

.circle2 {
  width: 200px;
  height: 200px;
  display: block;
  border-radius: 50%;
  border: 1px dashed rgba($black, 0.3);
}
</style>
