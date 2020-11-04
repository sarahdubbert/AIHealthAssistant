import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalPoints: 0,
    exercisePoints: 0,
    sleepPoints: 0,
    eatingPoints: 0,
    carePoints: 0,
    relationshipPoints: 0,

    sleepGoal: 8,
    exerciseGoal: 1,
    eatingGoal: 3,
    careGoal: 1,
    relationshipGoal: 2,

    homeAlert: false,
    
  },
  mutations: {
    increasePointsSleep(state, numHours) {
      state.totalPoints += (2 * numHours);
      state.sleepPoints += (2 * numHours);
    },

    increasePointsExercise(state, numHours) {
      state.totalPoints += (5 * numHours);
      state.exercisePoints += (5 * numHours);
    },

    increasePointsEating(state, calories) {
      state.totalPoints += (4 * calories);
      state.eatingPoints += (4 * calories);
    },

    increasePointsRelationships(state, hours) {
      state.totalPoints += (6 * hours);
      state.relationshipPoints += (6 * hours);
    },

    increasePointsCare(state, hours) {
      state.totalPoints += (6 * hours);
      state.carePoints += (6 * hours);
    },

    updateSleepGoal(state, numHours) {
      state.sleepGoal = numHours;
    },

    updateExerciseGoal(state, numHours) {
      state.exerciseGoal = numHours;
    },

    updateEatingGoal(state, numMeals) {
      state.eatingGoal = numMeals;
    },

    updateCareGoal(state, numHours) {
      state.careGoal = numHours;
    },

    updateRelationshipGoal(state, numHours) {
      state.relationshipGoal = numHours;
    },

    updateHomeAlert(state, alert) {
      state.homeAlert = alert;
    },

    

  },
  getters: {
    getPoints(state) {
      return state.totalPoints;
    },

    getExerciseGoal(state) {
      return state.exerciseGoal;
    },

    getHomeGoal(state) {
      return state.homeGoal;
    },
  },
  actions: {

  }
});
