import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import buttons from './reducers/buttons'

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
    buttons
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
