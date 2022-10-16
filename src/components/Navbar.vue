<!-- //TODO: 
    
* - FIND A MENU ICON 
* - FIND A MENU ICON 
* - MAKE IT RESPONSIVE 

-->

<template>
    <section class="max-w-lg m-auto items-center">
        <nav class="flex flex-row justify-between m-auto items-center p-[32px]">
            <div class="flex flex-row flex-1  z-40">
                <img class="w-[32px] h-[32px] mr-2" src="../assets/logo.svg" alt="hooBank logo">
                <p class="font-semibold text-[18px] text-white">hoo<span class="text-blue">Bank</span></p>
            </div>
            <div class="hidden lg:flex flex-row">
                <ul v-for="nav in navItems" :key="nav.title" class="hidden lg:block">
                    <li class="text-white capitalize cursor-pointer ml-20 opacity-70 hover:opacity-100 focus:opacity-100 transition-opacity duration-200 ease-in-out select-none">
                        {{nav.title}}
                    </li>
                </ul>
            </div>
            <button @click="setIsOpen" value="Close Sidebar" type="button" class="menu-btn flex flex-col z-40 lg:hidden text-white" :class="{'active': isOpen}">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
            </button>
        </nav>
        <div class="block lg:hidden absolute bg-black z-10 w-full pt-24 h-full inset-0 -translate-x-full transition duration-300 ease-in-out" :class="{'translate-x-0': isOpen}">
            <ul v-for="nav in navItems" :key="nav.title" class="flex flex-col items-center">
                <li class="py-5">
                    <a href="" class="text-white text-xl capitalize cursor-pointer  opacity-70 hover:opacity-100 focus:opacity-100 transition-opacity duration-200 ease-in-out select-none">
                        {{nav.title}}
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
  import {TransitionRoot, TransitionChild, Dialog, DialogOverlay, } from '@headlessui/vue'
import { ref } from '@vue/reactivity';

export default {
  components: { TransitionRoot, TransitionChild, Dialog, DialogOverlay, },
    setup(){
        const navItems = [
            {title:'home', icon: 'none', href: 'http://'}, {title:'about us', icon: 'none', href: 'http://'}, {title:'features', icon: 'none', href: 'http://'}, {title:'solution', icon: 'none', href: 'http://'}
        ];

        let isOpen = ref(false)

        function setIsOpen() {
         isOpen.value = !isOpen.value;
         console.log(isOpen.value);
        }


        return { navItems, isOpen, setIsOpen }
    }
}
</script>

<style scoped>

.menu-btn {
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.navbar-toggler:focus{
	box-shadow: none !important;
}

 .line{
    width: 34px;
    height: 2px;
    background-color: #fff;
    margin-block: 5px;
    transition: transform .5s, opacity .25s;
}

.menu-btn.active .line:nth-child(1){
    transform: translateY(13px) rotate(45deg);
}
.menu-btn.active .line:nth-child(2){
    opacity: 0;
}
.menu-btn.active .line:nth-child(3){
    transform: translateY(-13px) rotate(-45deg);
}

</style>