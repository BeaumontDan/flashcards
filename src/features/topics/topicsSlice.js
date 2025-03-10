import { createSlice } from '@reduxjs/toolkit';

// manage topics and their quiz associations.

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon,
        quizIds: []
      };
    }
  },
  addQuizTopicId: {
    'quizzes/addQuiz': (state, action) => {
      const { topicId, id } = action.payload;
      state.topics[topicId].quizIds.push(id);
    }
  }
});

export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;