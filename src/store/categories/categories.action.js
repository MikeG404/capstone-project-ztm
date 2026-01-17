import { CATEGORIES_ACTIONS } from "./categories.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategoriesMap = (categoriesMap) =>
    createAction(CATEGORIES_ACTIONS.SET_CATEGORIES_MAP, categoriesMap);