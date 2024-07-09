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
    },

}
</script>

<template>
    <div class="container">
        <div id="card">
            <h4>Found: {{ store.cardList.length }} cards</h4>
        </div>
    </div>
    <div class="container">
        <AppCard :singleCard="card" v-for="card in store.cardList" :key="card.id"/>
    </div>
</template>

<style lang="scss">
@use "../styles/partials/variables" as*;

.container {
    max-width: 1024px;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    background-color: white;

    #card {
        width: 100%;
        height: 70px;
        background-color: $secondary;
        color: white;
        
        h4 {
            line-height: 70px;
            vertical-align: middle;
            font-size: 2rem;
        }
    }
}

</style>