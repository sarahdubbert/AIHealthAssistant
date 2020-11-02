<template>
  <Page class="ns-dark" actionBarHidden="true">
    <ScrollView>
    <FlexboxLayout class="full-height">
      <!-- <Image src="~/images/nsvue_logo.png" class="logo-container /> -->
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
              <Label text="Home" padding="10" backgroundColor="white" />
              <Label
                color="white"
                text="My Points"
                @tap="myPointsTap"
                padding="10"
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
          <StackLayout ~mainContent class="container">
            <FlexboxLayout class="welcome text-primary">
             
            <Button @tap="onOpenDrawerTap" width="5"
              horizontalAlignment="left"
              class="nav-button-container fas nav-button"
                  :text="'fa-bars' | fonticon">
            </Button>

            <Label class="welcome-text" horizontalAlignment="center" textWrap="true" color="white">
              <FormattedString>
                <Span text="Welcome," />
                <Span text=" Sarah." fontWeight="Bold" />
              </FormattedString>
            </Label>
            </FlexboxLayout>
            <FlexBoxLayout alignItems="center" class="">
            <Button @tap="sleepTap" class="my-button">
              <Span class="fas" :text="'fa-bed' | fonticon"></Span>
              <Span text="  Sleep"></Span>
            </Button>
            </FlexBoxLayout>
            <FlexBoxLayout alignItems="center" class="">
            <Button @tap="exerciseTap" class="my-button">
              <Span class="fas" :text="'fa-running' | fonticon"></Span>
              <Span text="  Exercise"></Span>
            </Button>
            </FlexBoxLayout>
            <FlexBoxLayout alignItems="center" class="">
            <Button @tap="healthyEatingTap" class="my-button">
              <Span class="fas" :text="'fa-utensils' | fonticon"></Span>
              <Span text="  Healthy Eating"></Span>
            </Button>
            </FlexBoxLayout>
            <FlexBoxLayout alignItems="center" class="">
            <Button @tap="selfCareTap" class="my-button">
              <Span class="fas" :text="'fa-heart' | fonticon"></Span>
              <Span text="  Self Care Time"></Span>
            </Button>
            </FlexBoxLayout>
            <FlexBoxLayout alignItems="center" class="">
            <Button @tap="relationshipsTap" class="my-button">
              <Span class="fas" :text="'fa-user-friends' | fonticon"></Span>
              <Span text="  Relationships"></Span>
            </Button>
            </FlexBoxLayout>
          </StackLayout>
        </RadSideDrawer>
      </GridLayout>
    </FlexboxLayout>
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
import MyProfile from "./MyProfile";

Vue.use(RadSideDrawer);

export default {
  name: "Home",
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
      console.log("sdfsdf");
      this.$navigateTo(Home);
    },
    myProfileTap() {
      this.$navigateTo(MyProfile);
    },
    myPointsTap() {
      this.$navigateTo(MyPoints);
      console.log("we are at home");
    },

    onOpenDrawerTap() {
      this.$refs.drawer.nativeView.showDrawer();
    },
    onCloseDrawerTap() {
      this.$refs.drawer.nativeView.closeDrawer();
    },
  },

  computed: {
    getDate() {
      const toTwoDigits = num => num < 10 ? '0' + num : num;
      let today = new Date();
      let year = today.getFullYear();
      let month = toTwoDigits(today.getMonth() + 1);
      let day = toTwoDigits(today.getDate());
      return `${month}-${day}-${year}.`;
    },
  },

  data() {
    return {
      textFieldValue: "",

      mainContentText:
        "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component" +
        " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.",
    };
  },
};
</script>

<style scoped>
  template {
    margin: 0;
    font-size: 14;
  }
  .border-bottom {
    border-bottom-width: 1;
    border-bottom-color: white;
  }
  .form-input {
    color: white;
    placeholder-color: white;
  }
  .icon-margin {
    margin-right: 10;
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
    margin-top: 10;
    width: 190;
    height: 55;
    margin-left:60;
  }
  .auth-buttons {
    color: white;
    font-size: 14;
  }
  /* .full-height {
    height: 100%;
  } */
  .logo-container {
    margin-bottom: 60;
  }
  .nav-button-container {
    margin:0;
  }

  .nav-button {
    padding:0;
  }

  .welcome-text {
    margin-left:30;
    padding-top:10;
  }

  .welcome {
    margin-bottom:20;
  }
</style>
