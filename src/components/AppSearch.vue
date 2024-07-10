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
    }
}
</script>

<template>
    <div class="container">
        <select name="" id="">
            <option v-for="single in store.archetype" value=""> {{ single.archetype_name }} </option>
        </select>
    </div>

</template>

<style lang="scss"></style>