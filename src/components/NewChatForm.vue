<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSendMessage"
    ></textarea>
  </form>
</template>

<script>
import { ref } from 'vue';
import getUser from '@/composables/getUser';
import { timestamp } from '@/firebase/config';

export default {
  setup() {
    const message = ref('');
    const { user } = getUser();

    const handleSendMessage = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };

      console.log('wiadomość do wysłania: ', chat);

      message.value = '';
    };

    return { message, handleSendMessage };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}

textarea {
  width: 100%;
  min-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
