<template>
  <section class="flex flex-col justify-even">
    <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 lg:justify-items-end border-b border-[#3F3E45]">
        <div class="flex flex-col">
            <div class="flex flex-row place-items-center">
                <img class="w-20 h-20" src="../assets/logo.svg" alt="logo">
                <p class="font-semibold text-[26px] lg:text-[40px] text-white px-2 capitalize">
                    Hoo<span class="text-blue">Bank</span>
                </p>
            </div>
            <p class="text-sm text-white opacity-70 py-8">A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div class="flex flex-col">
            <h4 class="text-white text-md font-semibold capitalize">
                Usefull links
            </h4>
            <ul class="py-5">
                <li><a class="text-sm text-white opacity-70 capitalize" href="">Content</a></li>
                <li><a class="text-sm text-white opacity-70 capitalize" href="">How it works</a></li>
                <li><a class="text-sm text-white opacity-70 capitalize" href="">create</a></li>
                <li><a class="text-sm text-white opacity-70 capitalize" href="">explore</a></li>
                <li><a class="text-sm text-white opacity-70 capitalize" href="">terms & services</a></li>
        
            </ul>
        </div>
        <div class="flex flex-col">
            <h4 class="text-white text-md font-semibold capitalize">
                community
            </h4>
            <ul class="py-5">
                <li><a class="text-sm text-white opacity-70 capitalize" href="">help center</a></li>
                <li><a class="text-sm text-white opacity-70 capitalize" href="">partners</a></li>
                <li><a class="text-sm text-white opacity-70 capitalize" href="">suggestions</a></li>
                <li><a class="text-sm text-white opacity-70 capitalize" href="">blog</a></li>
                <li><a class="text-sm text-white opacity-70 capitalize" href="">newsletter</a></li>
            </ul>
        </div>
        <div class="flex flex-col">
            <h4 class="text-white text-md font-semibold capitalize">
                partner
            </h4>
            <ul class="py-5">
                <li><a class="text-sm text-white opacity-70 capitalize" href="">our partner</a></li>
                <li><a class="text-sm text-white opacity-70 capitalize" href="">become a partner</a></li>
            </ul>
        </div>
    </div>
    <div class="flex flex-col md:flex-row justify-between">
        <p class="capitalize text-white opacity-70 text-sm pt-6">Copyright &copy; 2022 HooBank. all rights reserved.</p>
        <div class="flex flex-row pt-6 gap-6">
            <a href=""><img class="w-6 h-6" src="../assets/icons/instagram.svg" alt="instagram"></a>
            <a href=""><img class="w-6 h-6" src="../assets/icons/facebook.svg" alt="facebook"></a>
            <!-- <a href=""><img class="w-6 h-6" src="../assets/icons/twitter-icon.svg" alt="twitter"></a> -->
            <a href=""><img class="w-6 h-6" src="../assets/icons/linkedin.svg" alt="linkedin"></a>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    a:hover,a:focus {
        opacity: 100;
        transition: opacity 0.3s linear;
    }

</style>>

