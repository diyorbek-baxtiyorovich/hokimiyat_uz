<script setup>
import { ref } from 'vue'
import telegramLogo from '@/assets/icons/226253.png'

const drawer = ref(false)
const languageMenu = ref(false)
</script>

<template>
  <div>
    <!-- Top navbar -->
    <div class="navbar">
      <div class="container d-flex justify-space-between px-4">
        <!-- Left side - Brand and social icons -->
        <div class="d-flex align-center text-white">
          <v-icon size="24" class="mr-2">mdi-city</v-icon>
          <span class="font-weight-bold d-none d-sm-inline">HokimiyatUz</span>
          <span class="font-weight-bold d-sm-none">HokimiyatUz</span>

          <!-- Social icons - hidden on mobile -->
          <div class="d-none d-md-flex align-center ml-4">
            <span class="tgLogo cursor-pointer">
              <img :src="telegramLogo" alt="telegram img" />
            </span>
            <v-icon size="20" class="cursor-pointer ml-4">mdi-youtube</v-icon>
            <v-icon size="20" class="cursor-pointer ml-4">mdi-facebook</v-icon>
            <v-icon size="20" class="cursor-pointer ml-4">mdi-instagram</v-icon>
          </div>
        </div>

        <!-- Right side - Desktop menu -->
        <div class="d-none d-lg-flex align-center text-white">
          <v-divider vertical class="mx-2" inset></v-divider>

          <!-- Language menu -->
          <v-menu v-model="languageMenu" offset-y>
            <template v-slot:activator="{ props }">
              <span class="mr-4 cursor-pointer" v-bind="props">O'zbekcha</span>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>O'zbekcha</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Русский</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>English</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <!-- Mobile menu button -->
        <div class="d-lg-none d-flex align-center">
          <v-btn icon variant="text" color="white" @click="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

    <!-- Navigation menu -->
    <div class="old_Nav py-2">
      <div class="container d-flex justify-space-between align-center">
        <!-- Desktop navigation -->
        <div class="navbarText d-none d-lg-flex flex-wrap">
          <span><a href="#" class="nav-link">Tumaningizni bilib oling</a></span>
          <span><a href="#" class="nav-link">Yangiliklar</a></span>
          <span><a href="#" class="nav-link">Imkoniyatlar</a></span>
          <span><a href="#" class="nav-link">Korrupsiyaga qarshi kurashish</a></span>
          <span><a href="#" class="nav-link">Hokimiyat haqida</a></span>
          <span><a href="#" class="nav-link">Fuqarolik jamiyati</a></span>
        </div>

        <!-- Tablet navigation (shortened) -->
        <div class="navbarText d-none d-md-flex d-lg-none flex-wrap">
          <span><a href="#" class="nav-link">Tuman</a></span>
          <span><a href="#" class="nav-link">Yangiliklar</a></span>
          <span><a href="#" class="nav-link">Imkoniyatlar</a></span>
          <span><a href="#" class="nav-link">Hokimiyat</a></span>
        </div>

        <!--        &lt;!&ndash; Mobile - show only login button &ndash;&gt;-->
        <!--        <div class="d-md-none w-100 d-flex justify-center">-->
        <!--          <v-btn color="success" height="35" class="px-5 text-white rounded-pill">Kirish</v-btn>-->
        <!--        </div>-->

        <!--        &lt;!&ndash; Login button for desktop/tablet &ndash;&gt;-->
        <!--        <div class="logIn d-none d-md-block">-->
        <!--          <v-btn color="success" height="35" class="px-5 text-white rounded-pill">Kirish</v-btn>-->
        <!--        </div>-->
      </div>
    </div>

    <!-- Mobile drawer -->
    <v-navigation-drawer v-model="drawer" temporary location="right" width="280">
      <v-list>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon>mdi-city</v-icon>
          </template>
          <v-list-item-title>Hokimiyat</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-subheader>Ijtimoiy tarmoqlar</v-list-subheader>
        <v-list-item>
          <template v-slot:prepend>
            <img :src="telegramLogo" alt="telegram" class="social-icon" />
          </template>
          <v-list-item-title>Telegram</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon>mdi-youtube</v-icon>
          </template>
          <v-list-item-title>YouTube</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon>mdi-facebook</v-icon>
          </template>
          <v-list-item-title>Facebook</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon>mdi-instagram</v-icon>
          </template>
          <v-list-item-title>Instagram</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <!-- Navigation links -->
        <v-list-subheader>Menyu</v-list-subheader>
        <v-list-item href="#">
          <v-list-item-title>Tumaningizni bilib oling</v-list-item-title>
        </v-list-item>
        <v-list-item href="#">
          <v-list-item-title>Yangiliklar</v-list-item-title>
        </v-list-item>
        <v-list-item href="#">
          <v-list-item-title>Imkoniyatlar</v-list-item-title>
        </v-list-item>
        <v-list-item href="#">
          <v-list-item-title>Korrupsiyaga qarshi kurashish</v-list-item-title>
        </v-list-item>
        <v-list-item href="#">
          <v-list-item-title>Hokimiyat haqida</v-list-item-title>
        </v-list-item>
        <v-list-item href="#">
          <v-list-item-title>Fuqarolik jamiyati</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <!-- Other options -->
        <v-list-item>
          <v-list-item-title>Sayt xaritasi</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Til: O'zbekcha</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  height: 50px;
  line-height: 45px;
  background-color: #0d2959;
  font-size: 14px;
}

.container {
  width: 1340px;
  max-width: 100%;
  margin: 0 auto;
}

.tgLogo {
  width: 17px;
  margin-top: 10px;
}

.tgLogo img {
  width: 100%;
  height: 100%;
}

.social-icon {
  width: 20px;
  height: 20px;
}

.old_Nav {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.navbarText span {
  margin-right: 20px;
}

.nav-link {
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
}

.nav-link:hover {
  color: #67e469;
}

@media (max-width: 599px) {
  .navbar {
    height: 45px;
    line-height: 40px;
    font-size: 12px;
  }

  .container {
    padding: 0 16px !important;
  }

  .old_Nav {
    padding: 8px 0;
  }
}

/* Tablet specific styles */
@media (max-width: 959px) and (min-width: 600px) {
  .navbarText span {
    margin-right: 15px;
  }

  .nav-link {
    font-size: 13px;
  }
}

@media (max-width: 1263px) {
  .container {
    width: 100%;
    padding: 0 20px;
  }
}

/* Very small screens */
@media (max-width: 399px) {
  .navbar {
    font-size: 11px;
  }

  .container {
    padding: 0 12px !important;
  }
}
</style>
