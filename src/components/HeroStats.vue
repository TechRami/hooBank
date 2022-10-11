<template>
    <div class="flex flex-col lg:flex-row justify-between">
        <div v-for="stat in stats" :key="stat.title" class="flex flex-row justify-center items-center p-4">
            <p class="text-[40px] text-white font-semibold">{{stat.value}}</p>
            <span class="blue__gradient text-[21px] p-4 uppercase font-regular">{{stat.title}}</span>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const stats = [ 
            {title: "user active", value: "3800+"},
            {title: "trusted by company", value: "350+"},
            {title: "transaction", value: "$230M+"},
        ]

        return { stats }
    }

}
</script>

<style scoped>
.blue__gradient {
    background: radial-gradient(#33BBCF, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

</style>