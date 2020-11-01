import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalPoints: 15,
    sleepGoal: 0,
    exerciseGoal: 0,
    eatingGoal: 0,
    careGoal: 0,
    relationshipGoal: 0,
  },
  mutations: {
    increasePointsSleep(state, numHours) {
      state.totalPoints += (2 * numHours);
    },

    increasePointsExercise(state, numHours) {
      state.totalPoints += (5 * numHours);
    },

    increasePointsEating(state, calories) {
      state.totalPoints += (4 * calories);
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

    

  },
  getters: {
    getPoints(state) {
      return state.totalPoints;
    },

    getExerciseGoal(state) {
      return state.exerciseGoal;
    },
  },
  actions: {

  }
});
