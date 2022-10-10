<template>
  <section class="grid grid-rows-1 lg:grid-cols-2 gap-4">
    <!-- FIRST COLUMN -->
    <div class="flex flex-col justify-center">
        <div class="flex flex-row items-center bg-gradient-to-br from-lightblack to-black rounded-[10px] p-1 px-2 self-start">
            <img class="w-[32px] h-[32px]" src="../assets/icons/discountIcon.svg" alt="discount icon">
            <p class="text-white uppercase pl-3 text-lg">20% <span class="opacity-60">discount for</span> 1 month <span class="opacity-60">account</span></p>
        </div>
        <div class="flex flex-row pt-4 relative">
            <div class="flex flex-col">
                <h1 class="capitalize text-5xl md:text-7xl font-semibold text-white leading-12">the next <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue to-white">generation</span> payment method</h1>
                <p class="text-white opacity-70 pt-10 leading-8">
                    Our team of experts uses a methodology to identify <br /> the credit cards most likely to fit your needs. <br />
                    We examine annual percentage rates, annual fees.
                </p>
            </div>
            <a href="#" class="hidden md:block">
                <div class="p-[3px] h-[140px] w-[140px] rounded-full bg-gradient-to-t from-blue to-white hover:rotate-[15deg] transition duration-300 ease-in-out">
                    <div href="" class="w-[100%] h-[100%] bg-primary flex flex-col justify-center items-center rounded-full">
                        <div class="flex flex-row justify-center items-center">
                            <p class="text-transparent bg-gradient-to-tr from-blue to-white bg-clip-text font-medium text-[18px]">Get</p>
                            <img class="h-8 w-8" src="../assets/icons/arrow-tl.svg" alt="arrow">
                        </div>
                        <p class="text-transparent bg-gradient-to-tr from-blue to-white bg-clip-text flex flex-row justify-center items-center font-medium text-[18px]">started</p>
                    </div>
                </div>
            </a>
            
        </div>

        
    </div>
       
    <!-- SECOND COLUMN -->
    <div class="grid justify-center md:justify-end md:justify-items-end">
        <img class="w-[670px]" src="../assets/images/robotHand.png" alt="robot hand 3d image">
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>