<template>
  <v-app class="container">
    <v-main>
      <div class="pa-8 container">
        <!-- Featured News Section -->
        <v-row class="mb-6">
          <v-col cols="12">
            <h2 class="text-h4 mb-4 font-weight-bold">Asosiy Yangiliklar</h2>
          </v-col>

          <v-col cols="12" md="8">
            <v-card class="featured-card" :loading="loading">
              <v-img :src="featuredNews.image" height="550" cover>
                <div class="text-white position-absolute bottom-0 w-100">
                  <div class="back_r">
                    <v-chip color="red" size="small" class="mb-2" prepend-icon="mdi-fire">
                      Muhim
                    </v-chip>
                    <h3 class="text-h5 font-weight-bold w-full">
                      {{ featuredNews.title }}
                    </h3>
                    <p class="text-body-2 mt-2 opacity-90 w-full">{{ featuredNews.excerpt }}</p>
                  </div>
                </div>
              </v-img>

              <v-card-actions class="pa-4 elevation-0">
                <v-chip variant="outlined" size="small" prepend-icon="mdi-clock-outline">
                  {{ featuredNews.date }}
                </v-chip>
                <v-chip variant="outlined" size="small" prepend-icon="mdi-eye-outline">
                  {{ featuredNews.views }} ko'rishlar
                </v-chip>
                <v-spacer></v-spacer>
                <v-btn color="primary" append-icon="mdi-arrow-right"> Batafsil </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card height="100%" class="d-flex flex-column">
              <v-card-title>
                <v-icon class="mr-2">mdi-trending-up</v-icon>
                Eng Ko'p O'qilgan
              </v-card-title>

              <v-card-text class="flex-grow-1">
                <v-list density="compact">
                  <v-list-item v-for="(item, index) in trendingNews" :key="index" class="pa-2 mb-2">
                    <template #prepend>
                      <v-avatar size="30" :color="getTrendColor(index)">
                        {{ index + 1 }}
                      </v-avatar>
                    </template>

                    <v-list-item-title class="text-wrap">
                      {{ item.title }}
                    </v-list-item-title>

                    <v-list-item-subtitle>
                      {{ item.date }}
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- News Grid Section -->
        <v-row>
          <v-col cols="12">
            <div class="d-flex align-center justify-space-between mb-4">
              <h2 class="text-h4 font-weight-bold">Barcha Yangiliklar</h2>

              <v-btn-toggle v-model="viewMode" variant="outlined" density="comfortable" mandatory>
                <v-btn value="grid" icon="mdi-view-grid"></v-btn>
                <v-btn value="list" icon="mdi-view-list"></v-btn>
              </v-btn-toggle>
            </div>
          </v-col>

          <!-- Grid View -->
          <template v-if="viewMode === 'grid'">
            <v-col
              v-for="(article, index) in newsArticles"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card
                class="news-card h-100"
                elevation="2"
                :loading="loading"
                @click="openArticle(article)"
              >
                <v-img
                  :src="article.image"
                  height="200"
                  cover
                  gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0.3)"
                >
                  <v-chip
                    :color="getCategoryColor(article.category)"
                    size="small"
                    class="ma-2 dark-chip"
                  >
                    {{ article.category }}
                  </v-chip>
                </v-img>

                <v-card-title class="text-h6 pa-3">
                  {{ article.title }}
                </v-card-title>

                <v-card-text class="pa-3 pt-0">
                  <p class="text-body-2 text-medium-emphasis">
                    {{ article.excerpt }}
                  </p>
                </v-card-text>

                <v-card-actions class="pa-3">
                  <v-chip variant="text" size="small" prepend-icon="mdi-clock-outline">
                    {{ article.date }}
                  </v-chip>
                  <v-spacer></v-spacer>
                  <v-btn icon="mdi-share-variant" variant="text" size="small"></v-btn>
                  <v-btn icon="mdi-bookmark-outline" variant="text" size="small"></v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </template>

          <!-- List View -->
          <template v-else>
            <v-col cols="12">
              <v-card>
                <v-list>
                  <v-list-item
                    v-for="(article, index) in newsArticles"
                    :key="index"
                    class="pa-4"
                    @click="openArticle(article)"
                  >
                    <template #prepend>
                      <v-avatar size="80" rounded="lg">
                        <v-img :src="article.image" cover></v-img>
                      </v-avatar>
                    </template>

                    <v-list-item-title class="text-h6 mb-2">
                      {{ article.title }}
                    </v-list-item-title>

                    <v-list-item-subtitle class="text-body-2 mb-2">
                      {{ article.excerpt }}
                    </v-list-item-subtitle>

                    <div class="d-flex align-center">
                      <v-chip :color="getCategoryColor(article.category)" size="small" class="mr-2">
                        {{ article.category }}
                      </v-chip>
                      <v-chip variant="outlined" size="small" prepend-icon="mdi-clock-outline">
                        {{ article.date }}
                      </v-chip>
                    </div>

                    <template #append>
                      <v-btn icon="mdi-chevron-right" variant="text"></v-btn>
                    </template>
                  </v-list-item>

                  <v-divider v-if="index < newsArticles.length - 1"></v-divider>
                </v-list>
              </v-card>
            </v-col>
          </template>
        </v-row>

        <!-- Load More Button -->
        <v-row class="mt-6">
          <v-col cols="12" class="text-center">
            <v-btn
              color="primary"
              size="large"
              variant="text"
              append-icon="mdi-arrow-right"
              :loading="loadingMore"
              @click="loadMore"
            >
              Batafsil ko'rish
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-main>

    <!-- Article Dialog -->
    <v-dialog v-model="articleDialog" max-width="800" scrollable>
      <v-card v-if="selectedArticle">
        <v-img
          :src="selectedArticle.image"
          height="300"
          cover
          gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7)"
        >
          <v-card-title class="text-white position-absolute bottom-0 pa-4">
            <h2 class="text-h4 font-weight-bold">{{ selectedArticle.title }}</h2>
          </v-card-title>

          <v-btn
            icon="mdi-close"
            variant="text"
            color="white"
            class="position-absolute top-0 right-0 ma-2"
            @click="articleDialog = false"
          ></v-btn>
        </v-img>

        <v-card-text class="pa-6">
          <div class="d-flex align-center mb-4">
            <v-chip :color="getCategoryColor(selectedArticle.category)" class="mr-2">
              {{ selectedArticle.category }}
            </v-chip>
            <v-chip variant="outlined" prepend-icon="mdi-clock-outline">
              {{ selectedArticle.date }}
            </v-chip>
          </div>

          <div class="text-body-1 line-height-1-6">
            <p>{{ selectedArticle.content }}</p>
          </div>
        </v-card-text>

        <v-card-actions class="pa-6">
          <v-btn prepend-icon="mdi-share-variant" variant="outlined"> Ulashish </v-btn>
          <v-btn prepend-icon="mdi-bookmark-outline" variant="outlined"> Saqlash </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="articleDialog = false"> Yopish </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  name: 'NewsDisplay',
  data() {
    return {
      loading: false,
      loadingMore: false,
      viewMode: 'grid',
      articleDialog: false,
      selectedArticle: null,

      featuredNews: {
        title: 'Ochiqlik va shaffoflik korrupsiyaga qarshi kurashishning muhim vositalaridan biri',
        excerpt:
          'Davlat hokimiyati organlarining jamoatchillik oldidagi ochiqlik va shaffofligi bugungi kunning eng dolzarb muammolaridan...',
        image:
          'https://tashkent.uz/_next/image?url=https%3A%2F%2Fapi.tashkent.uz%2Fupload%2Fnews%2Fspeaking%2F2025%2F06%2Fshuhrat.jpg&w=640&q=75',
        date: '20.06.2025, 09:46',
        views: '2.5k',
      },

      trendingNews: [
        {
          title:
            'Toshkent shahar hokimi Shavkat Umurzakov Malis Group kompaniyasi bosh direktori bilan uchrashdi',
          date: '12.06.2025, 14:12',
        },
        {
          title:
            'Toshkent shahar hokimi Shavkat Umurzakov Italiyaning Lombardiya viloyati gubernatori bilan uchrashdi',
          date: '11.06.2025, 15:37',
        },
        {
          title:
            'Toshkent shahar hokimi Shavkat Umurzakov Chjeszyani viloyati Shanxay tadbirkorlar uyushmasi raisi bilan uchrashdi',
          date: '11.06.2025, 14:56',
        },
        {
          title: "Yashnobod tumani hokimi ko'chaning bir qismi nomini o'zgartirdi",
          date: '05.06.2025, 17:28',
        },
        {
          title: "Shinjon-Uyg'ur avtonom mintaqasi delegatsiyasi qabul qilindi",
          date: '05.06.2025, 11:58',
        },
      ],

      newsArticles: [
        {
          title:
            'Toshkent shahar hokimi Shavkat Umurzakov Malis Group kompaniyasi bosh direktori bilan uchrashdi',
          excerpt:
            'Toshkent shahar hokimi Shavkat Umurzakov Malis Group kompaniyasi bosh direktori Yaman Shahin va Pasha Real Estate Group...',
          image:
            'https://tashkent.uz/_next/image?url=https%3A%2F%2Fapi.tashkent.uz%2Fupload%2Fnews%2Fspeaking%2F2025%2F06%2Fshuhrat.jpg&w=640&q=75',
          category: 'Siyosat',
          date: '12.06.2025, 14:12',
          content:
            'Toshkent shahar hokimi Shavkat Umurzakov Malis Group kompaniyasi bosh direktori Yaman Shahin va Pasha Real Estate Group vakillari bilan uchrashdi. Uchrashuv davomida investitsion loyihalar va shaharsozlik masalalari muhokama qilindi...',
        },
        {
          title:
            'Toshkent shahar hokimi Shavkat Umurzakov Italiyaning Lombardiya viloyati gubernatori bilan uchrashdi',
          excerpt:
            'Toshkent shahar hokimi Shavkat Umurzakov Italiyaning Lombardiya viloyati gubernatori Attilio Fontana boshchiligidagi delegatsiya bilan uchrashdi...',
          image:
            'https://tashkent.uz/_next/image?url=https%3A%2F%2Fapi.tashkent.uz%2Fupload%2Fnews%2Fspeaking%2F2025%2F06%2Fshuhrat.jpg&w=640&q=75',
          category: 'Xalqaro',
          date: '11.06.2025, 15:37',
          content:
            "Toshkent shahar hokimi Shavkat Umurzakov Italiyaning Lombardiya viloyati gubernatori Attilio Fontana boshchiligidagi delegatsiya bilan uchrashdi. Uchrashuv davomida ikki taraf o'rtasidagi hamkorlik masalalari muhokama qilindi...",
        },
        {
          title:
            "Joriy yilning 13-18 aprel kunlari O'zbekiston delegatsiyasi Amerika Qo'shma Shtatlariga tashrif buyurdi",
          excerpt:
            "Joriy yilning 13-18 aprel kunlari O'zbekiston delegatsiyasi Amerika Qo'shma Shtatlariga tashrifi doirasida 'Starta VC' kompaniyasi bilan uchrashdi...",
          image:
            'https://tashkent.uz/_next/image?url=https%3A%2F%2Fapi.tashkent.uz%2Fupload%2Fnews%2Fspeaking%2F2025%2F06%2Fshuhrat.jpg&w=640&q=75',
          category: 'Biznes',
          date: '18.06.2025, 15:02',
          content:
            "Joriy yilning 13-18 aprel kunlari O'zbekiston delegatsiyasi Amerika Qo'shma Shtatlariga tashrif buyurdi. Tashrif davomida bir qator muhim uchrashuvlar va muzokaralar o'tkazildi...",
        },
        {
          title: "Yashnobod tumani hokimi ko'chaning bir qismi nomini o'zgartirdi",
          excerpt:
            "Hurmali fuqarolar! Yashnobod tumani hokimi Abdullah Qodiriy ko'chasining bir qismini qayta nomlash orgali unga Mustafa Kamol...",
          image:
            'https://tashkent.uz/_next/image?url=https%3A%2F%2Fapi.tashkent.uz%2Fupload%2Fnews%2Fspeaking%2F2025%2F06%2Fshuhrat.jpg&w=640&q=75',
          category: 'Mahalliy',
          date: '05.06.2025, 17:28',
          content:
            "Yashnobod tumani hokimi Abdullah Qodiriy ko'chasining bir qismini qayta nomlash orgali unga Mustafa Kamol nomini berdi. Bu qaror mahalliy aholining takliflari asosida qabul qilindi...",
        },
      ],
    }
  },

  methods: {
    getCategoryColor(category) {
      const colors = {
        Siyosat: 'blue',
        Xalqaro: 'green',
        Biznes: 'orange',
        Mahalliy: 'purple',
        Transport: 'teal',
        Sport: 'red',
        Madaniyat: 'indigo',
      }
      return colors[category] || 'grey'
    },

    getTrendColor(index) {
      const colors = ['red', 'orange', 'amber', 'blue', 'purple']
      return colors[index] || 'grey'
    },

    openArticle(article) {
      this.selectedArticle = article
      this.articleDialog = true
    },

    loadMore() {
      this.loadingMore = true
      // Simulate API call
      setTimeout(() => {
        this.loadingMore = false
        // Add more articles logic here
      }, 1000)
    },
  },
}
</script>

<style scoped>
.container {
  width: 1340px;
  max-width: 100%;
  margin: 0 auto;
}
.news-card {
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.news-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}

.featured-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.line-height-1-6 {
  line-height: 1.6;
}

.position-absolute {
  position: absolute !important;
}

.bottom-0 {
  bottom: 0 !important;
}

.top-0 {
  top: 0 !important;
}

.right-0 {
  right: 0 !important;
}

.back_r {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  padding: 16px;
}
.dark-chip {
  background-color: rgba(0, 0, 0, 0.5) !important; /* yarim shaffof qora */
  color: #fff !important; /* matn oq ko‘rinsin */
}
</style>
