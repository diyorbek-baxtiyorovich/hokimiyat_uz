<template>
  <div class="app_head">
    <div>
      <HeadNavbar />
    </div>
    <div>
      <HeaderLayoutItem />
    </div>
    <div>
      <sructureInfoDataView />
    </div>
    <!--    <div>-->
    <!--      <item-data-form />-->
    <!--    </div>-->
    <div class="app_footer">
      <footer-data-item />
    </div>
  </div>
</template>
<style scoped>
.app_head {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
<script setup>
import HeadNavbar from '@/components/nav/headNavbar.vue'
import HeaderLayoutItem from '@/components/allItems/HeaderLayoutItem.vue'
import sructureInfoDataView from '@/components/ui/strcutureInfoData/sructureInfoDataView.vue'
import ItemDataForm from '@/components/forms/ItemDataForm.vue'
import FooterDataItem from '@/components/footer/footerDataItem.vue'
</script>
