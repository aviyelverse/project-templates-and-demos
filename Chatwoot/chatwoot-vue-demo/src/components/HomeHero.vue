<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">
                INDULGE THE FOODIE
            </div>
            <div
                class="display-4 font-weight-black white--text text-xs-center mb-3"
            >
                INSIDE YOU
            </div>
            <div class="display-1 font-weight-bold white--text text-xs-center">
                Traveling abroad or just going out for a casual dinner, there's
                always good food nearby.
            </div>
            <v-btn
                @click="scrollToMainContent()"
                fab
                class="mt-5 brown darken-4"
            >
                <v-icon large color="white">mdi-chevron-down</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    methods: {
        scrollToMainContent() {
            const mainContentTitleEl =
                document.getElementById('main-content-title');

            if (mainContentTitleEl) {
                mainContentTitleEl.scrollIntoView({ behavior: 'smooth' });
            }
        },
    },
    name: 'HomeHero',
};
</script>

<style scoped>
.home-hero {
    background: url('http://source.unsplash.com/-YHSwy6uqvk');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
