/** Chunk was on web.js **/
/** chunk id: 290488, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;

function i() {
  return null != r ? r : r = (async () => {
    let {
      default: e
    } = await require.e("20353").then(require.t.bind(require, 62994, 23)), t = new module({
      params: {
        logProcessStats: false,
        useSharedArrayBuffer: false,
        debugLogs: false,
        bufferOverflowMS: 200,
        models: {
          model8: "https://cdn.discordapp.com/assets/krisp_browser_models/v1.0.11_1/model_8.kw",
          model16: "https://cdn.discordapp.com/assets/krisp_browser_models/v1.0.11_1/model_16.kw",
          model32: "https://cdn.discordapp.com/assets/krisp_browser_models/v1.0.11_1/model_32.kw"
        }
      }
    });
    return await exports.init(), exports
  })()
}
require.d(exports, {
  n: () => i
})