/** Chunk was on web.js **/
/** chunk id: 977156, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X7: () => l,
  Zy: () => o,
  cB: () => a
});
var Chunk818083 = require("./818083.js");
let i = (0, Chunk818083.B)({
    id: "2023-12_quests",
    kind: "user",
    label: "Quests",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        enabled: false
      }
    }, {
      id: 1,
      label: "Quests enabled",
      config: {
        enabled: true
      }
    }]
  }),
  a = e => {
    let {
      location: t
    } = e;
    return i.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: false
    }).enabled
  },
  o = e => {
    let {
      location: t
    } = e;
    return i.useExperiment({
      location: t
    }, {
      autoTrackExposure: false
    }).enabled
  },
  s = (0, Chunk818083.B)({
    id: "2024-04_quest_preview_tool",
    kind: "user",
    label: "Quest Preview Tool",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Preview tool enabled",
      config: {
        enabled: true
      }
    }]
  });

function l(e) {
  let {
    location: t
  } = e;
  return s.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: false
  }).enabled
}