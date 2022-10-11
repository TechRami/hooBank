<!-- TODO: 

  * MAKE THE STATS SECTION
  * FINISH THE NEXT 3 SECTIONS
  * MAKE SURE EVERYTHING IS RESPONSIVE
  * IF FINISHED BEFORE 2PM, CREATE THE MOBILE NAVBAR FUNCTION

  FIXME: 
  
  * LET THE TEXT TAKE FULL WIDTH ON SMALL DEVICES
-->

<template>
  <div class="flex flex-col max-w-lg m-auto p-[32px]">
    <HeroSection />
    <HeroStats class="pt-5" />
    <Business class="py-16" />
    <Billing class="py-16" />
    <Deal class="py-16" />
    <Opinions class="py-16" />
    <Banner class="py-16" />

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
export default {
components: { HeroSection, HeroStats, Business, Billing, Deal, Opinions, Banner }
}
</script>

<style>

</style>