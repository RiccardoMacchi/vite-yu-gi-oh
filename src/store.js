import { reactive } from "vue";
export const store = reactive({
    cardList: [],
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0",
    addUrlArchetype: "&archetype=",
    archetype: [],
    apiArchetype: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    newSearch: "Select Archetype",
});