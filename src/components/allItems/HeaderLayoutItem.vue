<template>
  <div>
    <!-- Header Navigation -->
    <section class="news-header">
      <v-container class="container">
        <div class="header-top">
          <div class="weather-info">
            <v-icon size="16" color="orange">mdi-weather-sunny</v-icon>
            <span>29°C Toshkent</span>
          </div>
          <nav class="main-nav">
            <a href="#" class="nav-link">Jamiyat</a>
            <a href="#" class="nav-link">Olam</a>
            <a href="#" class="nav-link">Madaniyat-san'at</a>
            <a href="#" class="nav-link">Intervyu</a>
            <a href="#" class="nav-link">Foydali</a>
            <a href="#" class="nav-link">Sport</a>
            <a href="#" class="nav-link">Tarixil</a>
          </nav>
        </div>

        <div class="header-brand">
          <h1 class="site-title">
            <span class="highlight-text">HOKIMIYAT</span>
          </h1>
          <div class="live-indicator">
            <div class="pulse-dot"></div>
            <span>Live</span>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Main News Grid -->
    <section class="main-news-section">
      <v-container class="container">
        <v-row>
          <!-- Featured News (Left side) -->
          <v-col cols="12" md="8">
            <div class="featured-news">
              <v-card class="main-news-card" elevation="4">
                <div class="news-image-container">
                  <img
                    src="https://ad-admin.qalampir.uz/uploads/yW/m_TzIndp2nyDOuCedfAjrWYgD4zBOY2D.jpg"
                    alt="Samarqandda qabriston yonib ketdi"
                    class="news-image"
                  />
                  <div class="news-category">Tezkor yangilik</div>
                  <div class="news-time">12:23</div>
                </div>
                <v-card-text class="news-content">
                  <h2 class="main-news-title">Samarqandda qabriston yonib ketdi (video)</h2>
                  <p class="news-excerpt">
                    Samarqand viloyatida katta hajmdagi qabriston yong'ini sodir bo'ldi. Hodisa
                    natijasida katta maydonlik yer yonib ketgan...
                  </p>
                  <div class="news-meta">
                    <span class="news-date">25 Avgust, 2025</span>
                    <span class="news-views">
                      <v-icon size="16">mdi-eye</v-icon>
                      12.5K
                    </span>
                  </div>
                </v-card-text>
              </v-card>

              <!-- Secondary News Grid -->
              <v-row class="mt-4">
                <v-col cols="12" md="6" v-for="news in secondaryNews" :key="news.id">
                  <v-card class="news-card" elevation="2">
                    <div class="news-image-small">
                      <img :src="news.image" :alt="news.title" />
                      <div class="news-category small">{{ news.category }}</div>
                    </div>
                    <v-card-text class="pa-3">
                      <h3 class="news-title-small">{{ news.title }}</h3>
                      <div class="news-meta-small">
                        <span class="news-time">{{ news.time }}</span>
                        <span class="news-views">
                          <v-icon size="14">mdi-eye</v-icon>
                          {{ news.views }}
                        </span>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-col>

          <!-- Live News & Breaking (Right side) -->
          <v-col cols="12" md="4">
            <!-- Live Breaking News -->
            <v-card class="live-news-card" elevation="4">
              <v-card-title class="live-header">
                <div class="live-badge">
                  <div class="pulse-dot red"></div>
                  Live
                </div>
                Barqarar
              </v-card-title>

              <div class="live-news-item" v-for="liveNews in liveNewsItems" :key="liveNews.id">
                <div class="live-time">{{ liveNews.time }}</div>
                <div class="live-content">
                  <h4 class="live-title">{{ liveNews.title }}</h4>
                  <p class="live-text">{{ liveNews.content }}</p>
                </div>
              </div>
            </v-card>

            <!-- Quick Categories -->
            <div class="quick-categories mt-4">
              <h3 class="categories-title">Bo'limlar</h3>
              <div class="category-list">
                <v-chip
                  v-for="category in quickCategories"
                  :key="category.id"
                  :color="category.color"
                  variant="outlined"
                  class="category-chip"
                  size="small"
                >
                  <v-icon start :icon="category.icon"></v-icon>
                  {{ category.name }}
                </v-chip>
              </div>
            </div>

            <!-- Trending Topics -->
            <v-card class="trending-card mt-4" elevation="2">
              <v-card-title class="trending-header">
                <v-icon color="orange" class="mr-2">mdi-trending-up</v-icon>
                Mashhur mavzular
              </v-card-title>
              <div class="trending-list">
                <div v-for="(topic, index) in trendingTopics" :key="topic.id" class="trending-item">
                  <div class="trending-number">{{ index + 1 }}</div>
                  <div class="trending-content">
                    <div class="trending-title">{{ topic.title }}</div>
                    <div class="trending-count">{{ topic.count }} maqola</div>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Secondary news data
const secondaryNews = ref([
  {
    id: 1,
    title: "Mirziyoev Zelenskiyga tabrik yo'lladi",
    image: 'https://ad-admin.qalampir.uz/uploads/YJ/m_DH6ljGTrKnQr7ey8ztaYv75TphRUEp.jpg',
    category: 'Siyosat',
    time: '25 Avgust',
    views: '8.2K',
  },
  {
    id: 2,
    title: "Uzbekistondagi 4 ta pedagogika oliy yuqori ta'lim muassasasi tasdiqlandi",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='120'%3E%3Crect width='200' height='120' fill='%23f3e5f5'/%3E%3Ctext x='50%25' y='50%25' font-size='12' fill='%23666' text-anchor='middle' dominant-baseline='middle'%3ETa'lim%3C/text%3E%3C/svg%3E",
    category: "Ta'lim",
    time: '20:44',
    views: '5.1K',
  },
  {
    id: 3,
    title: 'Xitoyning Xubey provinsiyasida sotuvchilar va kurtkchilar urtasida katta mojaro',
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='120'%3E%3Crect width='200' height='120' fill='%23fff3e0'/%3E%3Ctext x='50%25' y='50%25' font-size='12' fill='%23666' text-anchor='middle' dominant-baseline='middle'%3EXalqaro%3C/text%3E%3C/svg%3E",
    category: 'Xalqaro',
    time: '19:30',
    views: '3.8K',
  },
  {
    id: 4,
    title: 'Yangi iqtisodiy islohotlar davlat xaridlari tizimida amalga oshirildi',
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='120'%3E%3Crect width='200' height='120' fill='%23e1f5fe'/%3E%3Ctext x='50%25' y='50%25' font-size='12' fill='%23666' text-anchor='middle' dominant-baseline='middle'%3EIqtisod%3C/text%3E%3C/svg%3E",
    category: 'Iqtisodiyot',
    time: '18:15',
    views: '6.7K',
  },
])

// Live news items
const liveNewsItems = ref([
  {
    id: 1,
    time: '20:45',
    title:
      'Tataristonda raxbariy "rus tilini bilmaydiganlar chet ellik bolalarni maktabga qabul qilishni taqiqlash" qarori tanqid qilindi',
    content: 'Rossiya Federatsiyasi Tatarison Respublikasida...',
  },
  {
    id: 2,
    time: '20:45',
    title: 'Iordaniya podshohhi Abdulla II Ostonaga etib bordi',
    content: 'Iordaniya Podshohhi Abdulla II ibn Al-Husayn...',
  },
  {
    id: 3,
    time: '20:44',
    title: "Uzbekistondagi 4 ta pedagogika oliy yuqori ta'lim muassasalari tasdiqlandi",
    content: "O'zbekiston Respublikasi Prezidentining qarori...",
  },
])

// Quick categories
const quickCategories = ref([
  { id: 1, name: 'Prezident', icon: 'mdi-account-star', color: 'red' },
  { id: 2, name: 'Hukumat', icon: 'mdi-office-building', color: 'blue' },
  { id: 3, name: 'Viloyatlar', icon: 'mdi-map', color: 'green' },
  { id: 4, name: 'Iqtisodiyot', icon: 'mdi-chart-line', color: 'orange' },
  { id: 5, name: "Ta'lim", icon: 'mdi-school', color: 'purple' },
  { id: 6, name: "Sog'liq", icon: 'mdi-medical-bag', color: 'teal' },
  { id: 7, name: 'Sport', icon: 'mdi-soccer', color: 'cyan' },
  { id: 8, name: 'Madaniyat', icon: 'mdi-theater', color: 'pink' },
])

// Trending topics
const trendingTopics = ref([
  { id: 1, title: 'Yangi pedagog tayinlovlar', count: 45 },
  { id: 2, title: 'Prezident faoliyati', count: 38 },
  { id: 3, title: "Iqtisodiy o'sish", count: 29 },
  { id: 4, title: 'Raqamli texnologiya', count: 24 },
  { id: 5, title: 'Xalqaro hamkorlik', count: 18 },
])
</script>

<style scoped>
.container {
  width: 1240px;
  max-width: 100%;
  margin: 0 auto;
}

/* Header Styles */
.news-header {
  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  color: white;
  padding: 16px 0;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 16px;
}

.weather-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 6px 12px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.main-nav {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #ffeb3b;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #ffeb3b;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.header-brand {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.site-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.highlight-text {
  background: linear-gradient(45deg, #ffeb3b, #ff9800);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.news-text {
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.9);
}

.live-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 67, 54, 0.9);
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

/* Main News Section */
.main-news-section {
  padding: 32px 0;
  background: #f8f9fa;
}

.featured-news {
  margin-bottom: 24px;
}

.main-news-card {
  border-radius: 16px !important;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.main-news-card:hover {
  transform: translateY(-4px);
}

.news-image-container {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.news-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-category {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 67, 54, 0.9);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.news-category.small {
  top: 8px;
  left: 8px;
  padding: 4px 8px;
  font-size: 0.7rem;
}

.news-time {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
}

.news-content {
  padding: 24px !important;
}

.main-news-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1976d2;
  margin-bottom: 12px;
  line-height: 1.3;
}

.news-excerpt {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 16px;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
  font-size: 0.9rem;
}

.news-views {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Secondary News Cards */
.news-card {
  border-radius: 12px !important;
  overflow: hidden;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.news-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12) !important;
}

.news-image-small {
  position: relative;
  height: 140px;
  overflow: hidden;
}

.news-image-small img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-title-small {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  line-height: 1.4;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-meta-small {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
  font-size: 0.8rem;
}

/* Live News Card */
.live-news-card {
  border-radius: 16px !important;
  max-height: 500px;
  overflow-y: auto;
}

.live-header {
  background: linear-gradient(135deg, #ff5722, #d84315);
  color: white !important;
  padding: 16px 20px !important;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
  font-weight: 600;
}

.live-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.live-news-item {
  padding: 16px 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  gap: 12px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.live-news-item:hover {
  background: #f8f9fa;
}

.live-news-item:last-child {
  border-bottom: none;
}

.live-time {
  font-size: 0.8rem;
  color: #ff5722;
  font-weight: 600;
  min-width: 40px;
}

.live-content {
  flex: 1;
}

.live-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  line-height: 1.3;
}

.live-text {
  font-size: 0.8rem;
  color: #666;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Quick Categories */
.quick-categories {
  margin-bottom: 24px;
}

.categories-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
}

.category-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.category-chip {
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Trending Card */
.trending-card {
  border-radius: 16px !important;
}

.trending-header {
  background: #f8f9fa;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333 !important;
}

.trending-list {
  padding: 16px 20px;
}

.trending-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  cursor: pointer;
  transition: background 0.2s ease;
  border-radius: 8px;
  padding: 8px 12px;
}

.trending-item:hover {
  background: #f8f9fa;
}

.trending-number {
  width: 24px;
  height: 24px;
  background: #ff9800;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  min-width: 24px;
}

.trending-content {
  flex: 1;
}

.trending-title {
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  line-height: 1.3;
}

.trending-count {
  font-size: 0.8rem;
  color: #666;
  margin-top: 2px;
}

/* Animations */
.pulse-dot {
  width: 8px;
  height: 8px;
  background: #ff5722;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.pulse-dot.red {
  background: #ff1744;
}

@keyframes pulse {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Mobile Responsive */
@media (max-width: 960px) {
  .header-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .main-nav {
    gap: 16px;
    overflow-x: auto;
    padding-bottom: 8px;
  }

  .nav-link {
    white-space: nowrap;
    font-size: 0.9rem;
  }

  .site-title {
    font-size: 2rem;
  }

  .news-text {
    font-size: 1.4rem;
  }

  .main-news-title {
    font-size: 1.3rem;
  }

  .news-excerpt {
    font-size: 0.9rem;
  }
}

@media (max-width: 600px) {
  .container {
    padding: 0 16px;
  }

  .news-header {
    padding: 12px 0;
  }

  .main-nav {
    gap: 12px;
    justify-content: flex-start;
  }

  .nav-link {
    font-size: 0.85rem;
  }

  .site-title {
    font-size: 1.8rem;
  }

  .news-text {
    font-size: 1.2rem;
  }

  .header-brand {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .main-news-section {
    padding: 16px 0;
  }

  .news-image-container {
    height: 200px;
  }

  .news-content {
    padding: 16px !important;
  }

  .main-news-title {
    font-size: 1.1rem;
  }

  .news-excerpt {
    font-size: 0.85rem;
    line-height: 1.5;
  }

  .news-title-small {
    font-size: 0.9rem;
  }

  .news-image-small {
    height: 120px;
  }

  .live-news-item {
    padding: 12px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .live-time {
    min-width: auto;
  }

  .category-list {
    gap: 6px;
  }

  .trending-item {
    padding: 6px 8px;
  }
}

@media (max-width: 400px) {
  .site-title {
    font-size: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .main-nav {
    width: 100%;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .main-nav::-webkit-scrollbar {
    display: none;
  }

  .news-image-container {
    height: 180px;
  }

  .main-news-title {
    font-size: 1rem;
    line-height: 1.2;
  }

  .news-excerpt {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

/* Scrollbar styling for live news */
.live-news-card::-webkit-scrollbar {
  width: 4px;
}

.live-news-card::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.live-news-card::-webkit-scrollbar-thumb {
  background: #1976d2;
  border-radius: 4px;
}

.live-news-card::-webkit-scrollbar-thumb:hover {
  background: #1565c0;
}
</style>
