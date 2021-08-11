<template>
  <header class="header">
    <div class="container">
      <button
        class="header__register btn"
        type="button"
        @click="openModal(true)"
      >
        sign up
      </button>
    </div>
  </header>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: mapMutations({ openModal: "CHANGE_MODAL_STATE" }),
};
</script>
<style lang="scss">
.header {
  display: flex;
  justify-content: flex-end;
  background-color: #393e48;
  padding: 20px 0;
  &__register {
    padding: 10px 20px;
    color: #fff;
    background-color: #7a7a7a;
  }
}
</style>