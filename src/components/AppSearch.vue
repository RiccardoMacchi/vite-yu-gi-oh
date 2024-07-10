<script>
// Import di axios
import axios from 'axios';

import { store } from "../store.js";

export default {
    name: "AppSearch",
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container">
        <select name="" id="" @click="$emit('onlyArchetype')" v-model="store.newSearch">
            <option v-for="singleType in store.archetype" :newSearch="singleType.archetype_name"> {{
                singleType.archetype_name }} </option>
        </select>
    </div>

</template>

<style lang="scss"></style>