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
              <Label color="white" text="My Profile" padding="10" />
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
                <Span text=" Enter your goals for each category below." />
              </FormattedString>
            </Label>
            <Label textWrap="true" color="white">
                <Span class="fas" :text="'fa-bed' | fonticon"></Span>
                <Span text="  Sleep"></Span>
            </Label>
            <TextField
              v-model="sleepGoal"
              keyboardType="number"
              maxLength="2"
              id="exerciseField"
            />
            <Label textWrap="true" color="white">
                <Span class="fas" :text="'fa-running' | fonticon"></Span>
                <Span text="  Exercise"></Span>
            </Label>
            <TextField
              v-model="exerciseGoal"
              keyboardType="number"
              maxLength="2"
              id="sleepField"
            />
            <Label textWrap="true" color="white">
                <Span class="fas" :text="'fa-utensils' | fonticon"></Span>
              <Span text="  Healthy Eating"></Span>
            </Label>
            <TextField
              v-model="eatingGoal"
              keyboardType="number"
              maxLength="2"
              id="healthyEatingField"
            />
            <Label textWrap="true" color="white">
                <Span class="fas" :text="'fa-heart' | fonticon"></Span>
                <Span text="  Self Care Time"></Span>
            </Label>
            <TextField
              v-model="careGoal"
              keyboardType="number"
              maxLength="2"
              id="selfCareField"
            />
            <Label textWrap="true" color="white">
                <Span class="fas" :text="'fa-user-friends' | fonticon"></Span>
                <Span text="  Relationships"></Span>
            </Label>
            <TextField
              v-model="relationshipGoal"
              keyboardType="number"
              maxLength="2"
              id="relationshipsField"
            />
            <Button text="Update Goals" @tap="onSubmit" />
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
Vue.use(RadSideDrawer);

var FeedbackPlugin = require("nativescript-feedback");
var feedback = new FeedbackPlugin.Feedback();

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
        this.$store.commit('updateSleepGoal', this.sleepGoal);
        this.$store.commit('updateExerciseGoal', this.exerciseGoal);
        this.$store.commit('updateEatingGoal', this.eatingGoal);
        this.$store.commit('updateCareGoal', this.careGoal);
        this.$store.commit('updateRelationshipGoal', this.relationshipGoal);
        feedback.show({
            message: "Success! Your goals have been updated."
        });
    },

    onOpenDrawerTap() {
      this.$refs.drawer.nativeView.showDrawer();
    },
    onCloseDrawerTap() {
      this.$refs.drawer.nativeView.closeDrawer();
    },

    myProfileTap() {
      this.$navigateTo(MyProfile);
    },

    homeTap() {
      this.$navigateTo(Home);
    },
    myPointsTap() {
      this.$navigateTo(MyPoints);
    },
  },

  data() {
    return {
      isBusy: true,

      sleepGoal: this.$store.state.sleepGoal,
      exerciseGoal: this.$store.state.exerciseGoal,
      eatingGoal: this.$store.state.eatingGOal,
      careGoal: this.$store.state.careGoal,
      relationshipGoal: this.$store.state.relationshipGoal,
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
