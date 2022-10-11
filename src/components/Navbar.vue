<!-- //TODO: 
    
* - FIND A MENU ICON 
* - FIND A MENU ICON 
* - MAKE IT RESPONSIVE 

-->

<template>
    <nav class="flex flex-row justify-between p-[32px] max-w-lg m-auto items-center">
        <div class="flex flex-row flex-1">
            <img class="w-[32px] h-[32px] mr-2" src="../assets/logo.svg" alt="hooBank logo">
            <p class="font-semibold text-[18px] text-white">hoo<span class="text-blue">Bank</span></p>
        </div>
        <div class="hidden lg:flex flex-row">
            <ul v-for="nav in navItems" :key="nav.title" class="hidden lg:block">
                <li class="text-white capitalize cursor-pointer ml-20 opacity-70 hover:opacity-100 focus:opacity-100 transition-opacity duration-200 ease-in-out select-none">{{nav.title}}</li>
            </ul>
        </div>
        <label for="check" class="flex flex-col lg:hidden">
                    <input type="checkbox" id="check"/>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
    </nav>
</template>

<script>
export default {
    setup(){
        const navItems = [
            {title:'home', icon: 'none', href: 'http://'}, {title:'about us', icon: 'none', href: 'http://'}, {title:'features', icon: 'none', href: 'http://'}, {title:'solution', icon: 'none', href: 'http://'}
        ];

        return { navItems }
    }
}
</script>

<style scoped>
label{
  width:24px;
  cursor:pointer;
}

label span{
  background: #fff;
  border-radius:10px;
  height:3px;
  margin: 7px 0;
  transition: .4s  cubic-bezier(0.68, -0.6, 0.32, 1.6);

}


span:nth-of-type(1){
  width:50%;
  
}

span:nth-of-type(2){
  width:100%;
}


span:nth-of-type(3){
  width:70%;
 
}


input[type="checkbox"]{
  display:none;
}


input[type="checkbox"]:checked ~ span:nth-of-type(1){
  transform-origin:bottom;
  transform:rotatez(45deg) translate(9px,7px)
}


input[type="checkbox"]:checked ~ span:nth-of-type(2){
  
  transform-origin:top;
  transform:rotatez(-45deg)
}


input[type="checkbox"]:checked ~ span:nth-of-type(3){
  
  transform-origin:bottom;
  width:50%;
  transform: translate(11px,-14px) rotatez(45deg);

}

</style>