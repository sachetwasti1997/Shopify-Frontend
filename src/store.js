import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import productListReducer from './reducers/productsListReducer'

const store = configureStore({
  reducer: {
    productList: productListReducer
  },
})

export default store