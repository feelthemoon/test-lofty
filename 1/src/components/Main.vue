<template>
  <main class="main">
    <div class="container">
      <div class="main__inner">
        <div class="block" v-for="i in 6" :key="i"></div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.main {
  margin-top: 20px;
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
  &__inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 570px) {
      grid-template-columns: 1fr;
    }
  }
}
.block {
  background-color: #c4c4c4;
  width: 100%;
  height: 170px;
}
</style>