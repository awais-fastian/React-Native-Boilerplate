import AsyncStorage from '@react-native-community/async-storage'
import { applyMiddleware, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
// Imports: Redux Root Reducer
import rootReducer from 'Redux/Reducers'
// Imports: Redux Root Saga
import rootSaga from 'Redux/Sagas'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loading'],
}

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware()
// persist
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga)
// Exports
export { store, persistor }
