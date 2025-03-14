// store.ts
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../features/gameSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

// TypeScript helpers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;