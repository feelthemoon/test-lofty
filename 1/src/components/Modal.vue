<template>
  <div
    :class="{ open: isModalOpen }"
    class="modal"
    @click.self="openModal(false)"
  >
    <form class="modal__form">
      <input
        type="text"
        class="modal__field"
        placeholder="USERNAME"
        v-model="username"
      />
      <input
        type="password"
        class="modal__field"
        placeholder="PASSWORD"
        v-model="password"
      />
      <button class="btn modal__send" @click.prevent="login">send</button>
    </form>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  computed: mapState({ isModalOpen: (state) => state.isModalOpen }),
  methods: {
    ...mapMutations({ openModal: "CHANGE_MODAL_STATE" }),
    ...mapActions(["fakeRequest"]),
    async login() {
      await this.fakeRequest({
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>
<style lang="scss">
.modal {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  transition: all 0.3s ease-in-out;
  z-index: -2;
  &.open {
    background-color: rgba($color: #fff, $alpha: 0.4);
    z-index: 100;
    transition: all 0.3s ease-in-out;
    & > .modal__form {
      top: 50%;
      transition: all 0.3s ease-in-out;
    }
  }
  &__form {
    position: absolute;
    left: 50%;
    top: -100%;
    transition: all 0.3s ease-in-out;

    transform: translate(-50%, -50%);
    padding: 30px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1a1d24;
  }
  &__field {
    background-color: #393e48;
    outline: transparent;
    border: none;
    padding: 22px 15px;
    color: #eeeeee;
    margin-bottom: 20px;
    font-weight: 700;
    &::placeholder {
      color: #ccc;
    }
  }
  &__send {
    background-color: #f4cc3e;
    padding: 10px 20px;
  }
}
</style>