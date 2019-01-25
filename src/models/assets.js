import { getAssets } from "@/services/exchange";

export default {
  namespace: "assets",

  state: {
    assets: []
  },

  effects: {
    *fetchAssets(_, { call, put }) {
      const response = yield call(getAssets, null);
      yield put({
        type: "updateAssets",
        payload: response
      });
    }
  },

  reducers: {
    updateAssets(state, { payload }) {
      return {
        ...state,
        assets: payload
      };
    }
  }
};
