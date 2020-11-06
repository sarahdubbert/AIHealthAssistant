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
      state.totalPoints += numHours;
      state.sleepPoints += numHours;
    },

    increasePointsExercise(state, numHours) {
      state.totalPoints += numHours;
      state.exercisePoints += numHours;
    },

    increasePointsEating(state, meals) {
      state.totalPoints += meals;
      state.eatingPoints += meals;
    },

    increasePointsRelationships(state, numHours) {
      state.totalPoints += numHours;
      state.relationshipPoints += numHours;
    },

    increasePointsCare(state, numHours) {
      state.totalPoints += numHours;
      state.carePoints += numHours;
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
