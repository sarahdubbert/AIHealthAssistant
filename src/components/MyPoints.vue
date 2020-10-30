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
                                <Span
                                    text="You've earned 20 points so far today. Great work! " />
                                <Span
                                    text=" Here's a summary of your points for this week " />
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
        methods: {
            onButtonTap() {
                console.log("Button was pressed");
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
            }
        },

        data() {
            return {
                categoricalSource: [{
                        Country: "Germany",
                        Amount: 15,
                        SecondVal: 14,
                        ThirdVal: 24
                    },
                    {
                        Country: "France",
                        Amount: 13,
                        SecondVal: 23,
                        ThirdVal: 25
                    },
                    {
                        Country: "Bulgaria",
                        Amount: 24,
                        SecondVal: 17,
                        ThirdVal: 23
                    },
                    {
                        Country: "Spain",
                        Amount: 11,
                        SecondVal: 19,
                        ThirdVal: 24
                    },
                    {
                        Country: "USA",
                        Amount: 18,
                        SecondVal: 8,
                        ThirdVal: 21
                    }
                ],

                pieSource: [{
                        Brand: "Audi",
                        Amount: 10
                    },
                    {
                        Brand: "Mercedes",
                        Amount: 76
                    },
                    {
                        Brand: "Fiat",
                        Amount: 60
                    },
                    {
                        Brand: "BMW",
                        Amount: 24
                    },
                    {
                        Brand: "Crysler",
                        Amount: 40
                    }
                ],

                gaugeValue: 2,

                textFieldValue: ""
            };
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