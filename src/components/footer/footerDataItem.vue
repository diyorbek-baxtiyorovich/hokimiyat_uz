<template>
  <v-footer class="bg-primary text-white pa-8" height="auto">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="mb-4 mb-md-0">
          <h2 class="text-h5 font-weight-bold">Hokimiyat</h2>
          <p class="text-body-2">
            Rasmiy veb-sayt. Shahar va viloyat yangiliklari, qarorlar va murojaatlar uchun yagona
            portal.
          </p>
        </v-col>

        <v-col cols="12" md="4" class="mb-4 mb-md-0">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">Menyu</h3>
          <ul class="footer-links">
            <li><a href="#">Hokimiyat haqida</a></li>
            <li><a href="#">Yangiliklar</a></li>
            <li><a href="#">Qarorlar</a></li>
            <li><a href="#">Loyihalar</a></li>
            <li><a href="#">Murojaat yuborish</a></li>
          </ul>
        </v-col>

        <v-col cols="12" md="4">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">Biz bilan bog‘laning</h3>
          <div class="d-flex align-center">
            <v-btn icon variant="text" class="text-white">
              <v-icon size="28">mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon variant="text" class="text-white">
              <span class="tgLogo cursor-pointer">
                <img :src="telegramLogo" alt="telegram img" />
              </span>
            </v-btn>
            <v-btn icon variant="text" class="text-white">
              <v-icon size="28">mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon variant="text" class="text-white">
              <v-icon size="28">mdi-youtube</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Divider -->
      <v-divider class="my-6" color="white"></v-divider>

      <!-- Copyright -->
      <v-row>
        <v-col cols="12" class="text-center text-body-2">
          © 2025 Hokimiyat. Barcha huquqlar himoyalangan.
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script setup>
import telegramLogo from '@/assets/icons/226253.png'
</script>
<style scoped>
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.tgLogo {
  width: 25px;
  padding-right: 5px;
}
.tgLogo img {
  width: 100%;
  height: 100%;
}
.footer-links li {
  margin: 6px 0;
}
.footer-links a {
  color: white;
  text-decoration: none;
  transition: 0.3s;
}
.footer-links a:hover {
  text-decoration: underline;
}
</style>
