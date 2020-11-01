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
                            <Label text="Home" padding="10"
                                backgroundColor="white" />
                            <Label color="white" text="My Points" @tap="myPointsTap"
                                padding="10" />
                            <Label color="white" text="Settings" padding="10" />
                        </StackLayout>
                        <Label text="Close" color="white" padding="10"
                            style="horizontal-align: center"
                            @tap="onCloseDrawerTap" />
                    </StackLayout>
                    <StackLayout ~mainContent>

                        <Button @tap="onOpenDrawerTap" width="10%" horizontalAlignment="left">
                            <FormattedString>
                                <Span class="fas nav-button" :text="'fa-bars' | fonticon"></Span>
                            </FormattedString>
                        </Button>
                        
                        <TextView editable="false">
                            <FormattedString>
                                <Span class="welcome" text="Welcome," />
                                <Span text=" Alex." fontWeight="Bold" />
                                <Span
                                    text=" Today's date is October 29, 2020." />
                            </FormattedString>
                        </TextView>
                        <TextView editable="false">
                            <FormattedString>
                                <Span text="Choose an activity to track: " />
                            </FormattedString>
                        </TextView>
                        
                        <Button @tap="sleepTap">
                            <Span class="fas" :text="'fa-bed' | fonticon"></Span>
                            <Span text="  Sleep"></Span>
                        </Button>
                        <Button @tap="exerciseTap"> 
                            <Span class="fas" :text="'fa-running' | fonticon"></Span>
                            <Span text="  Exercise"></Span>
                        </Button>
                        <Button @tap="healthyEatingTap"> 
                            <Span class="fas" :text="'fa-utensils' | fonticon"></Span>
                            <Span text="  Healthy Eating"></Span>
                        </Button>
                        <Button @tap="selfCareTap">
                            <Span class="fas" :text="'fa-heart' | fonticon"></Span>
                            <Span text="  Self Care Time"></Span>
                        </Button>
                        <Button @tap="relationshipsTap">
                            <Span class="fas" :text="'fa-user-friends' | fonticon"></Span>
                            <Span text="  Relationships"></Span>
                        </Button>
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
                console.log('sdfsdf');
                this.$navigateTo(Home);
            },
            myPointsTap() {
                this.$navigateTo(MyPoints);
                console.log('we are at home');
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
    .description-label {
        margin-bottom: 15;
    }

    
</style>