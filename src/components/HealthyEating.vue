<template>
  <Page class="ns-dark" actionBarHidden="true">
    <ScrollView>
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
            <TextView editable="false">
              <FormattedString>
                <Span text=" Did you know " fontWeight="Bold" />
                <Span
                  text=" that diets made up of whole foods are less expensive than diets made up of processed foods?"
                />
                <Span text=" Your current goal is to eat " />
                <Span :text=" eatingGoal " fontWeight="Bold" />
                <Span text=" home-cooked meals a day." />
              </FormattedString>
            </TextView>
            <TextField
              v-model="textFieldValue"
              keyboardType="number"
              maxLength="2"
              hint="Enter number of home-cooked meals eaten today..."
            />
            <Button text="Submit" @tap="onButtonTap" />
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
import MyProfile from "./MyProfile";
Vue.use(RadSideDrawer);

export default {
  methods: {
    onButtonTap() {
      this.$store.commit('increasePointsEating', this.textFieldValue);
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
    myPointsTap() {
      this.$navigateTo(MyPoints);
    },
  },

  computed: {
    eatingGoal() {
      return this.$store.state.eatingGoal;
    },
  },

  data() {
    return {
      isBusy: true,

      selectedListPickerIndex: 0,

      currentHour: new Date().getHours(),
      currentMinute: new Date().getMinutes(),
      textFieldValue: "",
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
