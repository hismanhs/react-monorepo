import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import rootReducer from './slices';
import createIndexedDBStorage from 'redux-persist-indexeddb-storage';
const indexedDBStorage = createIndexedDBStorage('myIndexedDB', 'myDataStore');
const reducers = combineReducers({
  reducer: rootReducer,
});
const persistConfig = {
  key: 'root',
  storage: indexedDBStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
