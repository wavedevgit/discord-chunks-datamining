/** Chunk was on web.js **/
/** chunk id: 689789, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => i,
  Z: () => a
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-06_frecency_list_split",
  label: "Frecency List Split",
  defaultConfig: {
    canSplitFrecencyList: false
  },
  treatments: [{
    id: 1,
    label: "Split frecency emoji messages from reactions",
    config: {
      canSplitFrecencyList: true
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: n
  } = e, {
    canSplitFrecencyList: i
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return {
    canSplitFrecencyList: i
  }
}
let a = r