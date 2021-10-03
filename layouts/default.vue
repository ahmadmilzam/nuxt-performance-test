<script>
import SiteHeader from '@/components/layouts/SiteHeader';
import SiteLeftMenu from '@/components/layouts/SiteLeftMenu';
import SiteRightMenu from '@/components/layouts/SiteRightMenu';

export default {
  components: {
    SiteHeader,
    SiteLeftMenu,
    SiteRightMenu,
  },
};
</script>


<template>
  <div class="flex h-screen">
    <div class="flex-1 flex flex-col overflow-hidden">
      <SiteHeader/>
      <div class="flex h-full">
        <SiteLeftMenu/>
        <main class="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
          <Nuxt />
        </main>
        <SiteRightMenu/>
      </div>
    </div>
  </div>
</template>

<style>
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(13deg, #7bcfeb 14%, #e685d3 64%);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(13deg, #c7ceff 14%, #f9d4ff 64%);
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: inset 7px 10px 12px #f0f0f0;
  }
</style>
