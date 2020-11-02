<template>
  <Page class="ns-dark" actionBarHidden="true">
    <ScrollView @tap="dismissKeyboard">
      <GridLayout rows="*" height="1500px">
        <RadSideDrawer ref="drawer">
          <StackLayout ~drawerContent backgroundColor="dark">
            <StackLayout
              height="56"
              style="text-align: center; vertical-align: center;"
            >
              <Label color="white" text="Navigation Menu" />
            </StackLayout>
            <StackLayout>
              <Label color="white" text="Home" padding="10" @tap="homeTap" />
              <Label
                color="white"
                text="My Points"
                padding="10"
                @tap="myPointsTap"
              />
              <Label color="white" text="My Profile" @tap="myProfileTap" padding="10" />
            </StackLayout>
            <Label
              text="Close"
              color="white"
              padding="10"
              style="horizontal-align: center"
              @tap="onCloseDrawerTap"
            />
          </StackLayout>
          <StackLayout ~mainContent>
            <Button @tap="homeTap" width="10%" horizontalAlignment="left">
              <FormattedString>
                <Span
                  class="fas nav-button"
                  :text="'fa-chevron-left' | fonticon"
                ></Span>
              </FormattedString>
            </Button>
            <Label textWrap="true" color="white">
              <FormattedString>
                <Span text=" Did you know " fontWeight="Bold" />
                <Span
                  text=" that getting enough sleep improves your concentration and focus?"
                />
                <Span text=" Your current goal is to get " />
                <Span :text=" sleepGoal " fontWeight="Bold" />
                <Span text=" hours of sleep each night." />
              </FormattedString>
            </Label>
            <TextField
              v-model="textFieldValue"
              keyboardType="number"
              maxLength="2"
              hint="Enter number of hours slept last night..."
            />
            <Button text="Submit" @tap="onSubmit" />
          </StackLayout>
        </RadSideDrawer>
      </GridLayout>
    </ScrollView>
  </Page>
</template>

<script>
import RadDataForm from "nativescript-ui-dataform/vue";
Vue.use(RadDataForm);
import * as utils from 'tns-core-modules/utils/utils';

import Vue from "nativescript-vue";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import Home from "./Home";
import MyPoints from "./MyPoints";
import MyProfile from "./MyProfile";
import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";
Vue.use(RadSideDrawer);

export default {
  methods: {
    dismissKeyboard() {
      utils.ad.dismissSoftInput();
    },

    doneTap(args) {
      var myTextField = args.object;
      myTextField.dismissSoftInput();
    },

    onSubmit() {
      this.$store.commit('increasePointsSleep', this.textFieldValue);
      if(this.$store.state.sleepGoal <= this.$store.state.sleepPoints) {
        TNSFancyAlert.showSuccess(
          "You did it, Sarah!",
          "You have achieved your Sleep goal for the day.",
          "Great work!"
        );
      }
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

    myProfileTap() {
      this.$navigateTo(MyProfile);
    },
    
    myProfileTap() {
      this.$navigateTo(MyProfile);
    },

    myPointsTap() {
      this.$navigateTo(MyPoints, {
        props: {
          numHours: this.numHours,
        },
      });
    },
  },

  computed: {
    sleepGoal() {
      return this.$store.state.sleepGoal;
    },
  },

  data() {
    return {
      isBusy: true,

      selectedListPickerIndex: 0,

      currentHour: new Date().getHours(),
      currentMinute: new Date().getMinutes(),
      numHours: 7,
    };
  },
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
