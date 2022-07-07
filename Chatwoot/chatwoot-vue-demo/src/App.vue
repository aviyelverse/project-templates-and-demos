<template>
    <v-app>
        <app-navigation></app-navigation>
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
        <chatwoot-widget />
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import ChatwootWidget from './components/ChatwootWidget.vue';

export default {
    name: 'App',
    components: {
        AppNavigation,
        ChatwootWidget,
    },
};
</script>

<style></style>
