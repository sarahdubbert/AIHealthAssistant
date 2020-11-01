<template>
    <Page class="ns-dark" actionBarHidden = "true">
        <ScrollView>

            <GridLayout rows="*" height="1500px">
                <RadSideDrawer ref="drawer">
                    <StackLayout ~drawerContent backgroundColor="dark">
                        <StackLayout height="56"
                            style="text-align: center; vertical-align: center;">
                            <Label color="white" text="Navigation Menu" />
                        </StackLayout>
                        <StackLayout>
                            <Label color="white" text="Home" padding="10" @tap="homeTap" />
                            <Label text="My Points" padding="10"
                                backgroundColor="white" />
                            <Label color="white" text="Settings" padding="10" />
                        </StackLayout>
                        <Label text="Close" color="white" padding="10"
                            style="horizontal-align: center"
                            @tap="onCloseDrawerTap" />
                    </StackLayout>
                    <StackLayout ~mainContent>
                        <Button @tap="homeTap" width="10%" horizontalAlignment="left">
                            <FormattedString>
                                <Span class="fas nav-button" :text="'fa-chevron-left' | fonticon"></Span>
                            </FormattedString>
                        </Button>
                        <TextView editable="false">
                            <FormattedString>
                                <Label
                                    :text="'You have slept for' + numHours" />
                            </FormattedString>
                        </TextView>
                        <GridLayout rows="*" height="1000px">
                            <RadCartesianChart row="0" style="font-size: 12;">
                                <LineSeries v-tkCartesianSeries
                                    :items="categoricalSource"
                                    categoryProperty="Country"
                                    valueProperty="Amount" />
                                <CategoricalAxis
                                    v-tkCartesianHorizontalAxis />
                                <LinearAxis v-tkCartesianVerticalAxis />
                            </RadCartesianChart>
                        </GridLayout>


                    </StackLayout>
                </RadSideDrawer>
                <Button text="Press" @tap="onButtonTap"/>
            </GridLayout>


        </ScrollView>
    </Page>
</template>

<script>
    import RadCartesianChart from "nativescript-ui-chart/vue";
    Vue.use(RadCartesianChart);

    import RadRadialGauge from "nativescript-ui-gauge/vue";
    Vue.use(RadRadialGauge);

    import Vue from "nativescript-vue";
    import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
    import Sleep from "./Sleep";
    import Exercise from "./Exercise";
    import HealthyEating from "./HealthyEating";
    import SelfCare from "./SelfCare";
    import Relationships from "./Relationships";
    import Home from "./Home";

    Vue.use(RadSideDrawer);

    export default {
        props: ["numHours"],
        methods: {
            onButtonTap() {
                console.log(this.numHours);
            },

            sleepTap() {
                this.$navigateTo(Sleep);
            },

            exerciseTap() {
                this.$navigateTo(Exercise);
            },

            healthyEatingTap() {
                this.$navigateTo(HealthyEating);
            },

            selfCareTap() {
                this.$navigateTo(SelfCare);
            },

            relationshipsTap() {
                this.$navigateTo(Relationships);
            },

            homeTap() {
                this.$navigateTo(Home);
            },

            myPointsTap() {
                this.$navigateTo(MyPoints);
            },

            onOpenDrawerTap() {
                this.$refs.drawer.nativeView.showDrawer();
            },
            onCloseDrawerTap() {
                this.$refs.drawer.nativeView.closeDrawer();
            },
            calculateSleepPoints() {
                this.sleepPoints = this.sleepPoints + 2 * this.numHours
            }
        },
        data() {
            return {
                sleepPoints: 0
            }
        },
        mounted() {
            console.log('calculating...');
            this.calculateSleepPoints();
            console.log(this.sleepPoints);
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>