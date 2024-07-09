<script>
import { store } from "../store";
import AppCard from "./AppCard.vue"
export default {
    name: "AppWrapCard",
    components:{
        AppCard,
    },
    data(){
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="container">
        <div v-for="card in store.cardList">
            <AppCard />
        </div>
    </div>
</template>

<style lang="scss">
.container {
    display: flex;
    flex-wrap: wrap;
}

</style>