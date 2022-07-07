<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex
                xs12
                class="text-xs-center display-1 font-weight-black my-5"
            >
                Restaurant Picks of the Week
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img
                        src="http://source.unsplash.com/d9jcPTRD9fo"
                        height="500px"
                    >
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text"
                                        >ITALIAN RESTAURANT</span
                                    >
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>

                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Italian Restaurant</h3>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam mauris felis, varius
                                rutrum massa a, dignissim ornare dui. Cras eget
                                velit eu dui tristique lobortis sit amet vel
                                tellus.
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img
                        src="http://source.unsplash.com/gKN5m528N6o"
                        height="500px"
                    >
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text"
                                        >RAMEN RESTAURANT</span
                                    >
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Ramen Restaurant</h3>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam mauris felis, varius
                                rutrum massa a, dignissim ornare dui. Cras eget
                                velit eu dui tristique lobortis sit amet vel
                                tellus.
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img
                        src="http://source.unsplash.com/I7A_pHLcQK8"
                        height="500px"
                    >
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text"
                                        >BURGER RESTAURANT</span
                                    >
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Burger Restaurant</h3>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam mauris felis, varius
                                rutrum massa a, dignissim ornare dui. Cras eget
                                velit eu dui tristique lobortis sit amet vel
                                tellus.
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomePlans',
};
</script>

<style scoped></style>
