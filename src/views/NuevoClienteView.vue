<script setup>
import { FormKit } from "@formkit/vue";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";
defineProps({
  titulo: String,
});
</script>
<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="inicio">Volver</RouterLink>
    </div>
    <Heading>{{ titulo }}</Heading>
    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit type="form">
          <FormKit
            type="text"
            label="Nombre"
            placeholder="Nombre del Cliente"
            validation="required"
            prefix-icon="text"
            :validation-messages="{
              required: 'El nombre es requerido',
            }"
          />
          <FormKit
            type="text"
            label="Apellido"
            placeholder="Apellido del Cliente"
            validation="required"
            prefix-icon="text"
            :validation-messages="{
              required: 'El apellido es requerido',
            }"
          />

          <FormKit
            type="email"
            label="Email"
            placeholder="Email del Cliente"
            validation="required|email"
            prefix-icon="email"
            :validation-messages="{
              required: 'El email es requerido',
              email: 'El email no es valido',
            }"
          />

          <FormKit
            type="text"
            label="Teléfono"
            placeholder="Teléfono: XXXXXXXX"
            validation="*matches:/^[0-9]{9}$/"
            prefix-icon="telephone"
            :validation-messages="{
              matches: 'El teléfono no es valido',
            }"
          />
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
