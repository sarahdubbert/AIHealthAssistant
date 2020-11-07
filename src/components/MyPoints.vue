<template>
   <Page class="page" actionBarHidden="true">
    <StackLayout class="container">
        <FlexBoxLayout class="welcome text-primary">
            <Button @tap="homeTap" width="5" horizontalAlignment="left"
            class="fas nav-button" androidElevation="0"
            :text="'fa-chevron-left' | fonticon">
            </Button>
            <Label class="h3 welcome-text-goals" horizontalAlignment="center" textWrap="true" color="white">
                <FormattedString>
                    <Span text="My Points" />
                </FormattedString>
            </Label>
        </FlexBoxLayout>
        <FlexBoxLayout class="gauge-flex">
            <GridLayout rows="*, auto">
                <RadRadialGauge :title="pointsFormat">
                    <TitleStyle v-tkRadialGaugeTitleStyle textColor="white" ios:textSize="22" ios:verticalOffset="30" android:verticalOffset="90" android:textSize="22"></TitleStyle>
                    <RadialScale ref="myScale" v-tkRadialGaugeScales startAngle="0" sweepAngle="360" minimum="0" maximum="100" radius="0.9">
                        <ScaleStyle v-tkRadialScaleStyle ticksVisible="false" labelsVisible="false" lineThickness="0"></ScaleStyle>
                        <RadialBarIndicator v-tkRadialScaleIndicators minimum="0" maximum="100" location="1">
                            <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="white" barWidth="0.2"></BarIndicatorStyle>
                        </RadialBarIndicator>
                        <RadialBarIndicator v-tkRadialScaleIndicators minimum="0" :maximum="totalPoints" location="1" isAnimated="true">
                            <BarIndicatorStyle v-tkRadialBarIndicatorStyle cap="Round" fillColor="#05668d" barWidth="0.2"></BarIndicatorStyle>
                        </RadialBarIndicator>
                    </RadialScale>
                </RadRadialGauge>
            </GridLayout>
        </FlexBoxLayout>
    </StackLayout>
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

    var FeedbackPlugin = require("nativescript-feedback");
    var feedback = new FeedbackPlugin.Feedback();
    var color = require("color");

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
                pointsString: "0",
                title: "",
                totalPoints: 0
            }
        },
        mounted() {
            this.totalPoints = parseInt(this.pointsString) + this.$store.state.totalPoints;
            this.pointsString = this.totalPoints.toString();
            if(this.totalPoints >= 100) {
                alert({
                    title:"Great work, Sarah!",
                    message:"You've completed your goal for this week!",                   
                    okButtonText: "Keep Earning Points",
                    }).then(() => {
                    console.log("Alert dialog closed");
                });
            }
        },
        computed: {
            pointsFormat() {
                return this.pointsString + "/100";
            }
        }
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
    margin-left:40;
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

.gauge-flex {
    padding:40;
}
</style>

