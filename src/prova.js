import { delay, effects } from "redux-saga";
import createSagaMiddleware from "redux-saga";

export const getValue = function*(a, b) {
  return a + b;
};

export const generator = function*() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
};

export const delayGenerator = function*() {
  yield new Promise(r => setTimeout(r, 1000));
  return 42;
};

const mySagaTake = function*() {
  console.log("Saga begins");
  const state = yield effects.take("SET_STATE");
  console.log("Got state...", state);
};

const putSaga = function*() {
  yield effects.put({ type: "SET_STATE", value: 42 });
};

const sagaMiddleware = createSagaMiddleware();
/*TODO aggiungere il middleware alla catena dello store
sagaMiddleware.run(mySagaTake);
sagaMiddleware.run(putSaga);
*/
