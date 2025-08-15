/** Chunk was on web.js **/
/** chunk id: 407477, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E2: () => l,
  Xb: () => o,
  ZP: () => a,
  p3: () => s
});
var Chunk818083 = require("./818083.js");
let i = (0, Chunk818083.B)({
    kind: "user",
    id: "2024-08_reaction_frecency_algorithms",
    label: "Reaction Frecency Algorithms",
    defaultConfig: {
      frecencyAlgorithm: "original",
      canShowReactionsOnMessageHover: false
    },
    treatments: [{
      id: 1,
      label: "Stable algorithm with no hover bar",
      config: {
        frecencyAlgorithm: "safe",
        canShowReactionsOnMessageHover: false
      }
    }, {
      id: 2,
      label: "Volatile algorithm with no hover bar",
      config: {
        frecencyAlgorithm: "day_recency",
        canShowReactionsOnMessageHover: false
      }
    }, {
      id: 3,
      label: "Stable algorithm with hover bar",
      config: {
        frecencyAlgorithm: "safe",
        canShowReactionsOnMessageHover: true
      }
    }, {
      id: 4,
      label: "Volatile algorithm with hover bar",
      config: {
        frecencyAlgorithm: "day_recency",
        canShowReactionsOnMessageHover: true
      }
    }]
  }),
  a = i,
  o = (0, Chunk818083.B)({
    kind: "user",
    id: "2024-10_retrigger_reaction_frecency_algorithms",
    label: "(Retrigger) Reaction Frecency Algorithms",
    defaultConfig: null,
    treatments: []
  });

function s(e) {
  let {
    location: t,
    autoTrackExposure: n
  } = e, {
    frecencyAlgorithm: r
  } = i.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return "original" !== r
}

function l(e) {
  let {
    location: t,
    autoTrackExposure: n
  } = e, {
    frecencyAlgorithm: r
  } = i.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return "original" !== r
}