import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState={};

const middleware=[thunk];
// createStore need three thing
// 1.(Reducer(簡化器),2.([PrelosdedState]),3.([Enhancer])//enhancer美化

//1.Reducer if you have multiple reducer you combine all of those together into a root reducer pass to your store.
// @like index.js line5 multiple line@.

//2.[PrelosdedState] initial state
//3.//enhancer美化
const store=createStore(
      rootReducer,
      initialState,
      compose(//compose 功能是將兩個/多個函示結合
        //compose(fn1, fn2, fn3, fn4) 根據 compose 的原始碼, 其實執行的就是： [fn1,fn2,fn3.fn4].reduce((a, b) => (...args) => a(b(...args))) (...args) => fn1(fn2(fn3(fn4(...args)))) 。
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()//chrome redux tool
      )
  );

export default store;