<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <header>
        <div>
            <img src="../assets/800px-Yu-Gi-Oh!_(Logo).jpg" alt="Logo">
            <h1>YU-GI-HO API</h1> 
        </div>
    </header>
</template>

<style lang="scss">
    
    header div {
        max-height: 100px;
        display: flex;
        align-items: center;

        h1{
            font-size: 2.5rem;
        }
        img {
            max-height: 100px;
        }
    }

</style>