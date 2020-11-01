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
                            <Label color="white" text="My Points" padding="10"
                                @tap="myPointsTap" />
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
                                <Span text=" Did you know "
                                    fontWeight="Bold" />
                                <Span
                                    text=" that exercising improves your memory?" />
                                <Span text=" Your current goal is to get " />
                                <Span text=" 1 " fontWeight="Bold" />
                                <Span text=" hour of exercise each day." />
                            </FormattedString>
                        </TextView>
                        <TextField v-model="textFieldValue" keyboardType="number" maxLength="2"
                            hint="Enter number of hours exercised today..." />
                        <Button text="Submit" @tap="onButtonTap"/> 
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