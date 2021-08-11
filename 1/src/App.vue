<template>
  <div class="app" :class="{ 'modal-opened': isModalOpen }">
    <Modal></Modal>
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Modal from "@/components/Modal.vue";
import { mapState } from "vuex";
export default {
  name: "App",

  components: {
    Header,
    Main,
    Modal,
  },
  computed: mapState({ isModalOpen: (state) => state.isModalOpen }),
};
</script>
<style lang="scss">
.app {
  position: relative;
  height: 100%;
  &.modal-opened {
    overflow-y: hidden;
  }
}
</style>

