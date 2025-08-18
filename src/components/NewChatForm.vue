<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSendMessage"
    ></textarea>
    <div v-if="error" class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue';
import { timestamp } from '@/firebase/config';
import getUser from '@/composables/getUser';
import useCollection from '@/composables/useCollection';

export default {
  setup() {
    const message = ref('');
    const { user } = getUser();
    const { addDoc, error } = useCollection('messages');

    const handleSendMessage = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };

      await addDoc(chat);

      if (!error.value) {
        message.value = '';
      }
    };

    return { message, handleSendMessage, error };
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
