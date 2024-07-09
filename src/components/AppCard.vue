<script>
export default {
    name: "AppCard",
    props : {
        singleCard: Object,
    }
}
</script>

<template>
    <div class="my_card">
        <img :src="singleCard.card_images[0].image_url_small" alt="">
        <h3>{{ singleCard.name }}</h3>
        <span>{{ singleCard.archetype }}</span>
    </div>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;

    .my_card {
        flex-basis: calc(100% / 5 - 20px);
        background-color: $primary;
        text-align: center;

        h3{
            margin: 20px auto;
            color: white;
        }
    }

</style>