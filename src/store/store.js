import { compose, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import { rootreducer } from "./root-reducer";

const middleware = [logger];

const composedEnhancers = compose(applyMiddleware(...middleware));

export const store = createStore(rootreducer, undefined, composedEnhancers);