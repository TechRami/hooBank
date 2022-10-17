<!-- TODO: 

  * MAKE THE STATS NUMBER IN STATS COMPONENT SMALLER FOR MOBILE DEVICES
  * IN BUSINESS COMPONENT MAKE EACH ICON APPEAR ABOVE THE TEXT

  FIXME: 
  
  * SHRINKING IMAGES
-->

<template>
  <div class="flex flex-col max-w-lg m-auto p-[32px]">
    <HeroSection />
    <HeroStats class="pt-5" />
    <Business class="py-16" />
    <Billing class="py-16" />
    <Deal class="py-16" />
    <Opinions class="py-16" />
    <Sponsors class="pb-16" />
    <Banner class="py-16" />
    <Footer class="pt-36" />
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import HeroStats from '../components/HeroStats.vue'
import Business from '../components/Business.vue'
import Billing from '../components/Billing.vue'
import Deal from '../components/Deal.vue'
import Opinions from '../components/Opinions.vue'
import Banner from '../components/Banner.vue'
import Sponsors from '../components/Sponsors.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { HeroSection, HeroStats, Business, Billing, Deal, Opinions, Banner, Sponsors, Footer }
}
</script>

<style>

</style>