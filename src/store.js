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
      state.totalPoints += (1* numHours);
      state.sleepPoints += (1* numHours);
    },

    increasePointsExercise(state, numHours) {
      state.totalPoints += (1* numHours);
      state.exercisePoints += (1* numHours);
    },

    increasePointsEating(state, meals) {
      state.totalPoints += (1* meals);
      state.eatingPoints += (1* meals);
    },

    increasePointsRelationships(state, numHours) {
      state.totalPoints += (1* numHours);
      state.relationshipPoints += (1* numHours);
    },

    increasePointsCare(state, numHours) {
      state.totalPoints += (1* numHours);
      state.carePoints += (1* numHours);
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
