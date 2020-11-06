<template>
  <Page class="page" actionBarHidden="true">
      <GridLayout @tap="dismissKeyboard" rows="*" height="1500px">
        <RadSideDrawer ref="drawer">
          <StackLayout ~drawerContent backgroundColor="dark">
            <StackLayout
              height="56"
              style="text-align: center; vertical-align: center;"
            >
              <Label color="white" text="Navigation Menu" />
            </StackLayout>
            <StackLayout>
              <Label color="white" text="Home" @tap="homeTap" />
              <Label
                color="white"
                text="My Points"
                @tap="myPointsTap"
              />
              <Label color="white" text="My Goals" />
            </StackLayout>
            <Label
              text="Close"
              color="white"
              padding="10"
              @tap="onCloseDrawerTap"
            />
          </StackLayout>
          <StackLayout ~mainContent class="container">
            <FlexBoxLayout class="welcome text-primary">
              <Button @tap="homeTap" width="5" horizontalAlignment="left"
              class="fas nav-button" androidElevation="0"
              :text="'fa-chevron-left' | fonticon">
              </Button>
              <Label class="h3 welcome-text-goals" horizontalAlignment="center" textWrap="true" color="white">
                <FormattedString>
                  <Span text="My Goals" />
                </FormattedString>
              </Label>
            </FlexBoxLayout>
            <FlexBoxLayout alignItems="center" class="flex-container sleep">
              <Label textWrap="true" color="white" class="label-text">
                  <Span class="fas" :text="'fa-bed' | fonticon"></Span>
                  <Span text="  Sleep"></Span>
              </Label>
              <TextField
                v-model="sleepGoal"
                keyboardType="number"
                maxLength="2"
                id="sleepField"
                width="50"
                height="30"
                class="input-goal input-rounded"
                horizontalAlignment="right"
              />
            </FlexBoxLayout>
            <FlexBoxLayout alignItems="center" class="flex-container exercise">
              <Label textWrap="true" color="white" class="label-text">
                <Span class="fas" :text="'fa-running' | fonticon"></Span>
                <Span text="  Exercise"></Span>
              </Label>
              <TextField
                v-model="exerciseGoal"
                keyboardType="number"
                maxLength="2"
                width="50"
                height="30"
                id="exerciseField"
                class="input-goal input-rounded"
              />
            </FlexBoxLayout>
            <FlexBoxLayout alignItems="center" class="flex-container eating">
              <Label textWrap="true" color="white" class="label-text">
                  <Span class="fas" :text="'fa-utensils' | fonticon"></Span>
                <Span text="  Nutrition"></Span>
              </Label>
              <TextField
                v-model="eatingGoal"
                keyboardType="number"
                maxLength="2"
                width="50"
                height="30"
                id="healthyEatingField"
                class="input-goal input-rounded"
              />
            </FlexBoxLayout>
            <FlexBoxLayout alignItems="center" class="flex-container care">
              <Label textWrap="true" color="white" class="label-text">
                  <Span class="fas" :text="'fa-heart' | fonticon"></Span>
                  <Span text="  Self Care Time"></Span>
              </Label>
              <TextField
                v-model="careGoal"
                keyboardType="number"
                maxLength="2"
                width="50"
                height="30"
                id="selfCareField"
                class="input-goal input-rounded"
              />
            </FlexBoxLayout>
            <FlexBoxLayout alignItems="center" class="flex-container relationship">
              <Label textWrap="true" color="white" class="label-text">
                  <Span class="fas" :text="'fa-user-friends' | fonticon"></Span>
                  <Span text="  Relationships"></Span>
              </Label>
              <TextField
                v-model="relationshipGoal"
                keyboardType="number"
                maxLength="2"
                id="relationshipsField"
                width="50"
                height="30"
                class="input-goal input-rounded"
              />
            </FlexBoxLayout>
            <Button text="Update Goals" @tap="onSubmit" class="my-button-goals btn btn-primary btn-rounded-lg"/>
          </StackLayout>
        </RadSideDrawer>
      </GridLayout>
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
Vue.use(RadSideDrawer);

var FeedbackPlugin = require("nativescript-feedback");
var feedback = new FeedbackPlugin.Feedback();
var color = require("color");

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
            messageSize: 14,
            messageColor: new color.Color("#74aaff"),
            backgroundColor: new color.Color("#ffffff"),
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
      eatingGoal: this.$store.state.eatingGoal,
      careGoal: this.$store.state.careGoal,
      relationshipGoal: this.$store.state.relationshipGoal,
    };
  },
};
</script>

<style lang="scss">
@import '../app.scss';
/* @font-face {
    font-family: "OpenSans-Regular";
    src: url('./../fonts/OpenSans-Regular.ttf');
  }
@import url('https://fonts.googleapis.com/css?family=OpenSans-Regular'); */
template {
    margin: 0;
    font-size: 16;
}
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.container {
  font-size: 16;
}

.description-label {
  margin-bottom: 10;
}

.border-bottom {
    border-bottom-width: 1;
    border-bottom-color: white;
  }

.welcome-text-goals {
    margin-left:50;
    padding-top:15;
    text-align:center;
  }

.nav-button {
  padding-left: -33;
  margin-right:-10;
}

.my-button-goals {
  border-radius: 25;
  padding-top: 14;
  padding-bottom: 14;
  margin-bottom: 10;
  margin-top: 20;
  width: 190;
  height: 55;
  text-align:center;
  font-size:16;
  }

.welcome {
  margin-left:25;
  padding-top:15;
}

.text-field {
  width: 20;
  height: 35;
}

.flex-container {
  margin-bottom: 10;
  padding-left:50;
}

.label-text {
  padding-top: 10;
}

.sleep {
  margin-left: 82;
}

.exercise{
  margin-left: 70;
}

.eating {
  margin-left: 69;
}

.care {
  margin-left:21;
}

.relationship {
  margin-left: 26;
}
</style>
