<script setup>
import axios from "axios";
import { onMounted } from "vue";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";
defineProps({
  titulo: String,
});
onMounted(() => {
  axios
    .get("http://localhost:4000/clientes")
    .then(({ data }) => {
      console.log(data);
    })
    .catch(({ message }) => {
      console.log(message);
    });
});
</script>
<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="agregar-cliente">Agregar Cliente</RouterLink>
    </div>
    <Heading>{{ titulo }}</Heading>
  </div>
</template>

<style scoped></style>
