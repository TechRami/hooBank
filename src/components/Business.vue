<template>
  <div class="grid grid-rows-1 lg:grid-cols-2 gap-6">
    <div class="flex flex-col">
        <h1 class="text-white text-[36px] lg:text-[48px] font-semibold">
            You do the business, 
            <br />
            we'll handle the money.
        </h1>
        <p class="text-[18px] text-white opacity-70 font-regular py-10 lg:w-[72%]">
            With the right credit card, you can improve your financial life by building credit, earning rewards and saving money.
            But with hundreds of credit cards on the market.
        </p>
        <a href="" class="text-black font-medium text-[18px] py-5 px-8 background__blue rounded-xl capitalize self-start">get started</a>
    </div>
    <div class="flex flex-col justify-center lg:justify-end">
        <div v-for="info in infos" :key="info.title" class="flex flex-row justify-center items-center p-6 hover:bg-gradient-to-tl rounded-[20px] from-black to-transwhite ">
            <div class="background__green rounded-full h-[54px] min-w-[54px] flex justify-center">
                <component class="w-[50%] text-sky" :is="info.icon"></component>
            </div>
            <div class="flex flex-col justify-center px-5">
                <h3 class="text-white font-semibold text-[18px] capitalize py-2">{{info.title}}</h3>
                <p class="text-white opacity-70 font-regular text-[16px]">{{info.paragraph}}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { PaperAirplaneIcon, StarIcon , ShieldCheckIcon} from '@heroicons/vue/24/solid'
export default {
    components: {PaperAirplaneIcon, StarIcon, ShieldCheckIcon},

setup() {
    const infos = [
        {title: 'rewards', paragraph: 'The best credit cards offer some tantalizing combinations of promotions and prizes', icon: StarIcon},
        {title: '100% Secured', paragraph: 'We take proactive steps make sure your information and transactions are secure.', icon: ShieldCheckIcon},
        {title: 'Balance Transfer', paragraph: 'A balance transfer credit card can save you a lot of money in interest charges.', icon: PaperAirplaneIcon},
    ]
    return { infos }
}
}
</script>

<style scoped>
.background__green {
    background: rgba(9, 151, 124, 0.1);
}

.background__blue {
    background: linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%);
}
</style>