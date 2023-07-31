<script setup>
import { onMounted, reactive } from "vue";
import ClienteService from "../services/ClienteService";
import { FormKit } from "@formkit/vue";
import { useRouter, useRoute } from "vue-router";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";

const router = useRouter();
const route = useRoute();
const { id } = route.params;

const formData = reactive({});

onMounted(() => {
  ClienteService.obtenerCliente(id)
    .then(({ data }) => {
      Object.assign(formData, data);
    })
    .catch((error) => {
      console.log(error);
    });
});

defineProps({
  titulo: String,
});

const handleSubmit = (data) => {};
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="clientes">Volver</RouterLink>
    </div>
    <Heading>{{ titulo }}</Heading>
    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit
          type="form"
          :actions="false"
          incomplete-message="No se pudo enviar, completar los campos requeridos!"
          @submit="handleSubmit"
          :value="formData"
        >
          <FormKit
            type="text"
            name="nombre"
            label="Nombre"
            placeholder="Nombre del Cliente"
            validation="required"
            prefix-icon="text"
            :validation-messages="{
              required: 'El nombre es requerido',
            }"
            v-model="formData.nombre"
          />
          <FormKit
            type="text"
            name="apellido"
            label="Apellido"
            placeholder="Apellido del Cliente"
            validation="required"
            prefix-icon="text"
            :validation-messages="{
              required: 'El apellido es requerido',
            }"
            v-model="formData.apellido"
          />

          <FormKit
            type="email"
            name="email"
            label="Email"
            placeholder="Email del Cliente"
            validation="required|email"
            prefix-icon="email"
            :validation-messages="{
              required: 'El email es requerido',
              email: 'El email no es valido',
            }"
            v-model="formData.email"
          />

          <FormKit
            type="text"
            name="telefono"
            label="Teléfono"
            placeholder="Teléfono: XXXXXXXX"
            validation="*matches:/^[0-9]{9}$/"
            prefix-icon="telephone"
            :validation-messages="{
              matches: 'El teléfono no es valido',
            }"
            v-model="formData.telefono"
          />

          <FormKit
            type="text"
            name="empresa"
            label="Empresa"
            placeholder="Empresa del Cliente"
            prefix-icon="text"
            v-model="formData.empresa"
          />

          <FormKit
            type="text"
            name="puesto"
            label="Puesto"
            placeholder="Puesto del Cliente"
            prefix-icon="text"
            v-model="formData.puesto"
          />

          <FormKit type="submit" label="Editar Cliente" prefix-icon="submit" />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style>
.formkit-wrapper {
  max-width: 100%;
}
</style>
