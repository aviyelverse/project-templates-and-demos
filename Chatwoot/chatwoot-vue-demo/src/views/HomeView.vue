<template>
    <span>
        <home-hero></home-hero>
        <home-details></home-details>
        <home-plans></home-plans>
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomePlans from '@/components/HomePlans.vue';

export default {
    name: 'HomeView',
    components: {
        HomeHero,
        HomeDetails,
        HomePlans,
    },
};
</script>
