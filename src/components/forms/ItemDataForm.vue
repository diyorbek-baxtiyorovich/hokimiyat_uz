<template>
  <v-container class="pa-6" max-width="1200">
    <v-card class="pa-6 rounded-xl elevation-4">
      <v-card-title class="text-h5 font-weight-bold mb-4"> Murojaat yuborish </v-card-title>

      <v-form v-model="valid" ref="formRef">
        <!-- Ism Familiya Sharif -->
        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="form.firstName"
              label="Ism"
              :rules="[rules.required]"
              variant="outlined"
              clearable
            />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="form.lastName"
              label="Familiya"
              :rules="[rules.required]"
              variant="outlined"
              clearable
            />
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="form.middleName"
              label="Sharif (otasining ismi)"
              variant="outlined"
              clearable
            />
          </v-col>
        </v-row>

        <!-- Email -->
        <v-text-field
          v-model="form.email"
          label="Elektron pochta"
          :rules="[rules.required, rules.email]"
          variant="outlined"
          clearable
          class="mb-4"
        />

        <!-- Murojaat turi -->
        <v-select
          v-model="form.type"
          :items="appealTypes"
          label="Murojaat turi"
          :rules="[rules.required]"
          variant="outlined"
          clearable
          class="mb-4"
        />

        <!-- Yashash manzili -->
        <v-text-field
          v-model="form.address"
          label="Yashash manzilingiz"
          variant="outlined"
          clearable
          class="mb-4"
        />

        <!-- Viloyat -->
        <v-select
          v-model="form.region"
          :items="regions"
          label="Viloyatni tanlang"
          :rules="[rules.required]"
          variant="outlined"
          clearable
          class="mb-4"
        />

        <!-- Telefon -->
        <v-text-field
          v-model="form.phone"
          label="Telefon raqamingiz"
          placeholder="+998 XX XXX XX XX"
          :rules="[rules.required]"
          variant="outlined"
          clearable
          class="mb-4"
        />

        <!-- Murojaat matni -->
        <v-textarea
          v-model="form.message"
          label="Murojaat matni"
          auto-grow
          counter="3000"
          :rules="[rules.required]"
          variant="outlined"
          class="mb-4"
        />

        <!-- Shartlar -->
        <v-checkbox
          v-model="form.agree"
          :rules="[rules.requiredCheckbox]"
          label="Murojaatlarni ko‘rib chiqish tartibi bilan tanishdim"
          class="mb-4"
        />

        <!-- Button -->
        <v-btn
          color="primary"
          class="mt-2 rounded-lg"
          size="large"
          :disabled="!valid"
          @click="submitForm"
        >
          Murojaatni yuborish
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const valid = ref(false)
const formRef = ref(null)

const form = ref({
  firstName: '',
  lastName: '',
  middleName: '',
  email: '',
  type: null,
  address: '',
  region: null,
  phone: '',
  message: '',
  agree: false,
})

// Murojaat turlari
const appealTypes = ['Ariza', 'Shikoyat', 'Taklif']

// Viloyatlar ro‘yxati
const regions = [
  'Toshkent shahri',
  'Toshkent viloyati',
  'Andijon viloyati',
  'Buxoro viloyati',
  'Farg‘ona viloyati',
  'Jizzax viloyati',
  'Namangan viloyati',
  'Navoiy viloyati',
  'Qashqadaryo viloyati',
  'Qoraqalpog‘iston Respublikasi',
  'Samarqand viloyati',
  'Sirdaryo viloyati',
  'Surxondaryo viloyati',
  'Xorazm viloyati',
]

// Form validatsiya qoidalari
const rules = {
  required: (v) => !!v || 'Majburiy maydon',
  requiredCheckbox: (v) => !!v || 'Shartni qabul qiling',
  email: (v) => /.+@.+\..+/.test(v) || 'Email noto‘g‘ri formatda',
}

// Submit
const submitForm = () => {
  if (formRef.value?.validate()) {
    console.log('Murojaat yuborildi ✅', form.value)
    // API ga yuborish joyi shu yerda
  }
}
</script>
