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
            <TextView editable="false">
              <FormattedString>
                <Span text=" Enter your goals for each category below." />
              </FormattedString>
            </TextView>
            <TextView editable="false">
                <Span class="fas" :text="'fa-bed' | fonticon"></Span>
                <Span text="  Sleep"></Span>
            </TextView>
            <TextField
              v-model="sleepGoal"
              keyboardType="number"
              maxLength="2"
              id="exerciseField"
            />
            <TextView editable="false">
                <Span class="fas" :text="'fa-running' | fonticon"></Span>
                <Span text="  Exercise"></Span>
            </TextView>
            <TextField
              v-model="exerciseGoal"
              keyboardType="number"
              maxLength="2"
              id="sleepField"
            />
            <TextView editable="false">
                <Span class="fas" :text="'fa-utensils' | fonticon"></Span>
              <Span text="  Healthy Eating"></Span>
            </TextView>
            <TextField
              v-model="eatingGoal"
              keyboardType="number"
              maxLength="2"
              id="healthyEatingField"
            />
            <TextView editable="false">
                <Span class="fas" :text="'fa-heart' | fonticon"></Span>
                <Span text="  Self Care Time"></Span>
            </TextView>
            <TextField
              v-model="careGoal"
              keyboardType="number"
              maxLength="2"
              id="selfCareField"
            />
            <TextView editable="false">
                <Span class="fas" :text="'fa-user-friends' | fonticon"></Span>
                <Span text="  Relationships"></Span>
            </TextView>
            <TextField
              v-model="relationshipGoal"
              keyboardType="number"
              maxLength="2"
              id="relationshipsField"
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

import Vue from "nativescript-vue";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import Home from "./Home";
import MyPoints from "./MyPoints";
import MyProfile from "./MyProfile";
Vue.use(RadSideDrawer);

export default {
    methods: {
    onSubmit() {
        this.$store.commit('updateSleepGoal', this.sleepGoal);
        this.$store.commit('updateExerciseGoal', this.exerciseGoal);
        this.$store.commit('updateEatingGoal', this.eatingGoal);
        this.$store.commit('updateCareGoal', this.careGoal);
        this.$store.commit('updateRelationshipGoal', this.relationshipGoal);
        console.log("updated goals");
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

      sleepGoal: 0,
      exerciseGoal: 0,
      eatingGoal: 0,
      careGoal: 0,
      relationshipGoal: 0,
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
