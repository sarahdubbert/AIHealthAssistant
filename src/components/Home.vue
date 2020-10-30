<template>
    <Page>
        <ScrollView>
            <ActionBar title="Home" />

            <GridLayout rows="*" height="1500px">
                <RadSideDrawer ref="drawer">
                    <StackLayout ~drawerContent backgroundColor="gray">
                        <StackLayout height="56"
                            style="text-align: center; vertical-align: center;">
                            <Label text="Navigation Menu" />
                        </StackLayout>
                        <StackLayout>
                            <Label text="Home" padding="10"
                                backgroundColor="lightgray" />
                            <Label text="My Points" @tap="myPointsTap"
                                padding="10" />
                            <Label text="Settings" padding="10" />
                        </StackLayout>
                        <Label text="Close" color="lightgray" padding="10"
                            style="horizontal-align: center"
                            @tap="onCloseDrawerTap" />
                    </StackLayout>
                    <StackLayout ~mainContent>
                        <Label class="fas" :text="'fa-bars' | fonticon" />
                        <Button text="Open Drawer" @tap="onOpenDrawerTap" margin="10" style="horizontal-align: left" />
                        <TextView editable="false">
                            <FormattedString>
                                <Span class="welcome" text="Welcome," />
                                <Span text=" Sarah." fontWeight="Bold" />
                                <Span
                                    text=" Today's date is October 29, 2020." />
                            </FormattedString>
                        </TextView>
                        <TextView editable="false">
                            <FormattedString>
                                <Span text="Choose an activity to track: " />
                            </FormattedString>
                        </TextView>
                        
                        <Button text="Sleep" @tap="sleepTap" />
                        <Button text="Exercise" @tap="exerciseTap" />
                        <Button text="Healthy Eating"
                            @tap="healthyEatingTap" />
                        <Button text="Self Care Time" @tap="selfCareTap" />
                        <Button text="Relationships"
                            @tap="relationshipsTap" />
                    </StackLayout>
                </RadSideDrawer>
            </GridLayout>


        </ScrollView>
    </Page>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
    import Sleep from "./Sleep";
    import Exercise from "./Exercise";
    import HealthyEating from "./HealthyEating";
    import SelfCare from "./SelfCare";
    import Relationships from "./Relationships";
    import MyPoints from "./MyPoints";

    
    Vue.use(RadSideDrawer);

    export default {
        name: 'Home',
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
                textFieldValue: "",

                mainContentText: "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component" +
                    " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer."
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