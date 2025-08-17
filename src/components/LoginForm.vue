<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />

    <input type="password" required placeholder="password" v-model="password" />

    <div v-if="error" class="error">{{ error }}</div>

    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from '@/composables/useLogin';

export default {
  setup() {
    const { error, login } = useLogin();

    const email = ref('');
    const password = ref('');

    const handleSubmit = async () => {
      await login(email.value, password.value);

      console.log('error: ', error.value);

      if (!error.value) {
        console.log('user logged in');
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>
