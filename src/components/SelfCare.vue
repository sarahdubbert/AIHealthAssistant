<template>
    <Page>
        <ScrollView>
            <GridLayout rows="*" height="1500px">
                <RadSideDrawer ref="drawer">
                    <StackLayout ~drawerContent backgroundColor="gray">
                        <StackLayout height="56"
                            style="text-align: center; vertical-align: center;">
                            <Label text="Navigation Menu" />
                        </StackLayout>
                        <StackLayout>
                            <Label text="Home" padding="10" @tap="homeTap" />
                            <Label text="My Points" padding="10"
                                @tap="myPointsTap" />
                            <Label text="Settings" padding="10" />
                        </StackLayout>
                        <Label text="Close" color="lightgray" padding="10"
                            style="horizontal-align: center"
                            @tap="onCloseDrawerTap" />
                    </StackLayout>
                    <StackLayout ~mainContent>
                        <TextView editable="false">
                            <FormattedString>
                                <Span text=" Did you know "
                                    fontWeight="Bold" />
                                <Span
                                    text=" that self care can look different for everyone? Check out some of our tips. " />
                                <Span text=" Your current goal is to get " />
                                <Span text=" 1 " fontWeight="Bold" />
                                <Span
                                    text=" hour of time to yourself each day." />
                            </FormattedString>
                        </TextView>
                        <TextField v-model="textFieldValue"
                            hint="Enter number of hours that you chose to take care of yourself today..." />
                        <Button text="Submit" @tap="onButtonTap" /
                            </StackLayout>
                </RadSideDrawer>
            </GridLayout>


        </ScrollView>
    </Page>
</template>

<script>
    import RadDataForm from "nativescript-ui-dataform/vue";
    Vue.use(RadDataForm);

    import Vue from "nativescript-vue";
    import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
    import Home from "./Home";
    import MyPoints from "./MyPoints";
    Vue.use(RadSideDrawer);

    export default {
        methods: {
            onButtonTap() {
                console.log("Button was pressed");
            },

            onOpenDrawerTap() {
                this.$refs.drawer.nativeView.showDrawer();
            },
            onCloseDrawerTap() {
                this.$refs.drawer.nativeView.closeDrawer();
            },

            homeTap() {
                this.$navigateTo(Home);
            },
            myPointsTap() {
                this.$navigateTo(MyPoints);
            }
        },

        data() {
            return {
                isBusy: true,

                selectedListPickerIndex: 0,

                currentHour: new Date().getHours(),
                currentMinute: new Date().getMinutes(),
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