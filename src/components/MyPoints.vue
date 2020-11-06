<template>
   <Page>
    <GridLayout rows="*, auto">
      <RadRadialGauge :title="sleepPointsFormat">
      <TitleStyle v-tkRadialGaugeTitleStyle textColor="gray" ios:textSize="22" ios:verticalOffset="30" android:verticalOffset="90" android:textSize="22"></TitleStyle>
      <RadialScale ref="myScale" v-tkRadialGaugeScales startAngle="0" sweepAngle="360" minimum="0" maximum="100" radius="0.9">
        <ScaleStyle v-tkRadialScaleStyle ticksVisible="false" labelsVisible="false" lineThickness="0"></ScaleStyle>
        <RadialBarIndicator v-tkRadialScaleIndicators minimum="0" maximum="100" location="1">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="rgba(132,235,247,0.5)" barWidth="0.2"></BarIndicatorStyle>
          </RadialBarIndicator>
          <RadialBarIndicator v-tkRadialScaleIndicators minimum="0" :maximum="sleepPoints" location="1" isAnimated="true">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle cap="Round" fillColor="rgba(132,235,247,1)" barWidth="0.2"></BarIndicatorStyle>
          </RadialBarIndicator>
      </RadialScale>
    </RadRadialGauge>
    </GridLayout>
  </Page>
</template>

<script>
    import RadCartesianChart from "nativescript-ui-chart/vue";
    Vue.use(RadCartesianChart);

    import RadRadialGauge from "nativescript-ui-gauge/vue";
    Vue.use(RadRadialGauge);
    
    import * as utils from 'tns-core-modules/utils/utils';
    import Vue from "nativescript-vue";
    import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
    import Sleep from "./Sleep";
    import Exercise from "./Exercise";
    import HealthyEating from "./HealthyEating";
    import SelfCare from "./SelfCare";
    import Relationships from "./Relationships";
    import Home from "./Home";
    

    Vue.use(RadSideDrawer);

    export default {
        props: ["numHours"],
        methods: {
            onButtonTap() {
                console.log(this.numHours);
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
                this.$navigateTo(Home);
            },

            myPointsTap() {
                this.$navigateTo(MyPoints);
            },

            onOpenDrawerTap() {
                this.$refs.drawer.nativeView.showDrawer();
            },
            onCloseDrawerTap() {
                this.$refs.drawer.nativeView.closeDrawer();
            },
            accessStore() {
                this.$store.getPoints();
            },

            onNavigationButtonTap() {
              Frame.topmost().goBack();
            },
            onValueChange(value) {
              this.$refs.needle.nativeView.value = value;
            }
        },
        data() {
            return {
                sleepPoints: "10",
                title: ""
            }
        },
        mounted() {
        },
        computed: {
            sleepPointsFormat() {
                return this.sleepPoints + "/100";
            }
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
