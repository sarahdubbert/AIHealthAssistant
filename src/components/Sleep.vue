<template>
  <Page class="page-category" actionBarHidden="true">
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
              <Label color="white" text="My Goals" @tap="myProfileTap" padding="10" />
            </StackLayout>
            <Label
              text="Close"
              color="white"
              padding="10"
              style="horizontal-align: center"
              @tap="onCloseDrawerTap"
            />
          </StackLayout>
          <StackLayout ~mainContent class="container-category">
            <FlexBoxLayout alignItems="center" class="title-category">
              <Button @tap="homeTap" width="5" class="fas back-button"
                  :text="'fa-chevron-left' | fonticon" horizontalAlignment="left" androidElevation="0">
            </Button>
              <Label class="h2 welcome-text-goals" textWrap="true" horizontalAlignment="center" color="#74aaff">
                  <FormattedString>
                    <Span text="Sleep"/>
                  </FormattedString>
              </Label>
              <Button @tap="showInfo" width="5"
                class="fas nav-button info-icon" horizontalAlignment="right" androidElevation="0"
                    :text="'fa-info-circle' | fonticon">
              </Button>
            </FlexBoxLayout>
            <FlexBoxLayout alignItems="center" class="current-goal">
              <Label textWrap="true" color="#74aaff">
                <FormattedString>
                  <Span text="You have\n" />
                  <Span :text=" currentProgress " fontWeight="Bold" fontSize="36"/>
                  <Span text="  of  " />
                  <Span :text=" sleepGoal + '\n'" fontWeight="Bold" fontSize="36"/>
                  <Span text=" hours completed toward your goal." />
                </FormattedString>
              </Label>
            
            </FlexBoxLayout>
            <FlexBoxLayout alignItems="center" class="enter-hours">
              <Label textWrap="true" color="#74aaff">
                <FormattedString>
                  <Span text="Enter Hours " />
                </FormattedString>
              </Label>
              <TextField
                v-model="textFieldValue"
                keyboardType="number"
                maxLength="2"
                width="50"
                height="30"
                :hint="0"
                class="input-category input-rounded"
              />
            </FlexBoxLayout>
            <FlexBoxLayout alignItems="center" class="submit-button">
              <Button text="Enter Hours" @tap="onSubmit" class="my-button-category btn btn-primary btn-rounded-lg" />
            </FlexBoxLayout>
            <FlexBoxLayout alignItems="center" class="fun-fact">
              <Label textWrap="true" color="#74aaff">
                <FormattedString>
                  <Span text="Did you know " fontWeight="Bold" />
                  <Span
                    text="that getting enough sleep improves your concentration and focus?"
                  />
                </FormattedString>
              </Label>
            </FlexBoxLayout>
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

    showInfo() {
        alert({
          message: "Sleep is so important for all cognitive functions. Getting enough hours of sleep every night will improve your focus, boost your mood, and give you the energy you need throughout the day! We recommend that you turn off all screens at least an hour before bed, and that you try your best to stick to the same sleep schedule every night.",
          okButtonText: "Got it!"
        }).then(() => {
        console.log("Alert dialog closed");
      });
    },

    onSubmit() {
      this.$store.commit('increasePointsSleep', parseInt(this.textFieldValue));
      if(this.$store.state.sleepGoal > this.$store.state.sleepPoints) {
        feedback.show({
            messageSize: 14,
            messageColor: new color.Color("#ffffff"),
            backgroundColor: new color.Color("#74aaff"),
            message: "Success! Your sleep hours for today have been updated."
        });
      }
      if(this.$store.state.sleepGoal <= this.$store.state.sleepPoints) {
        alert({
          title: "You did it, Sarah!",
          message: "You have achieved your Sleep goal for the day.",
          okButtonText: "Keep Earning Points"
        }).then(() => {
        console.log("Alert dialog closed");
      });
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
    currentProgress() {
      return this.$store.state.sleepPoints;
    },
  },

  data() {
    return {
      
      isBusy: true,

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

.border-bottom {
    border-bottom-width: 1;
    border-bottom-color: white;
  }

.back-button {
  background-color:white;
  border-width: 0;
  color: #74aaff;
  margin-left:-20;
}

.welcome-text-goals {
  margin-left:48;
}

.container-category {
  font-size: 16;
  padding: 0 15;
}

.my-button-category {
  background-color:#74aaff;
  color: white;
  border-radius: 25;
  padding-top: 14;
  padding-bottom: 14;
  margin-bottom: 10;
  margin-top: 20;
  width: 190;
  height: 55;
  text-align:center;
  font-size:16;
  margin-left:50;
  }

  .text-field {
    font-size: 14;
    margin-bottom: 20;
  }

  .title-category {
    text-align: center;
  }

  .fun-fact {
    font-size:12;
    margin-top:50;
    text-align:center;
  }

  .current-goal {
    margin-bottom: 10;
    text-align:center;
    width:300;
    margin-left:30;
    margin-top: 20;
  }

  .progress {
    margin-bottom: 10;
  }

  .enter-hours {
    margin-bottom: 10;
    margin-left:60;
    margin-top:30;
  }

  .submit-button {
    margin-top: 10;
  }

  .info-icon {
    background-color: white;
    color:#74aaff;
    margin-left:50;
    padding-left:35;
  }

</style>
