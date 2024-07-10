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
        <select name="" id="" @click="$emit('onlyArchetype')">
            <option value="">Select Archetype</option>
            <option v-for="singleType in store.archetype" :value="singleType.archetype_name"> {{
                singleType.archetype_name }} </option>
        </select>
    </div>

</template>

<style lang="scss"></style>