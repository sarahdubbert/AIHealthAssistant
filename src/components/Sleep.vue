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
          <StackLayout ~mainContent class="container">
            <FlexBoxLayout alignItems="center" class="title">
              <Button @tap="homeTap" width="10%" horizontalAlignment="left">
              <FormattedString>
                <Span
                  class="fas nav-button"
                  :text="'fa-chevron-left' | fonticon"
                ></Span>
              </FormattedString>
            </Button>
              <Label class="title" textWrap="true" horizontalAlignment="right" color="white">
                  <FormattedString>
                    <Span text="Sleep"/>
                  </FormattedString>
                </Label>
            </FlexBoxLayout>
            <FlexBoxLayout alignItems="center" class="fun-fact">
              <Label textWrap="true" color="white">
                <FormattedString>
                  <Span text="Did you know " fontWeight="Bold" />
                  <Span
                    text="that getting enough sleep improves your concentration and focus?"
                  />
                </FormattedString>
              </Label>
            </FlexBoxLayout>
            <FlexBoxLayout alignItems="center" class="current-goal">
              <Label textWrap="true" color="white">
                <FormattedString>
                  <Span text="Your current goal is to get " />
                  <Span :text=" sleepGoal " fontWeight="Bold" />
                  <Span text=" hours of sleep each night." />
                </FormattedString>
              </Label>
            <FlexBoxLayout alignItems="center" class="progress">
              <Progress :value="progressValue" maxValue="this.$store.state.sleepGoal" 
              color="white"/>
            </FlexBoxLayout>
            </FlexBoxLayout>
            <FlexBoxLayout alignItems="center" class="enter-hours">
              <Label textWrap="true" color="white">
                <FormattedString>
                  <Span text="Enter Hours " />
                </FormattedString>
              </Label>
              <TextField
                v-model="textFieldValue"
                keyboardType="number"
                maxLength="2"
                hint="enter here"
                class="text-field border-bottom"
              />
            </FlexBoxLayout>
            <FlexBoxLayout alignItems="center" class="submit-button">
              <Button text="Submit" @tap="onSubmit" class="my-button" />
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
    progressValue() {
      return 5;
    }
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

.border-bottom {
    border-bottom-width: 1;
    border-bottom-color: white;
  }
.container {
  font-size: 16;
  padding: 0 15;
}

.my-button {
  background-color: #66a3ff;
  color: white;
  font-weight: bold;
  border-radius: 25;
  padding-top: 14;
  padding-bottom: 14;
  letter-spacing: 0.1;
  margin-bottom: 10;
  margin-top: 0;
  width: 190;
  height: 55;
  margin-left: 30;
  }

  .text-field {
    font-size: 14;
    margin-bottom: 20;
  }

  .title {
    text-align: center;
    font-size: 28;
  }

  .fun-fact {
    font-size:12;
  }

  .current-goal {
    margin-bottom: 10;
  }

  .progress {
    margin-bottom: 10;
  }

  .enter-hours {
    margin-bottom: 10;
  }

  .submit-button {
    margin-top: 10;
  }
</style>
