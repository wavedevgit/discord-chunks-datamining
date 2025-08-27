/** Chunk was on web.js **/
/** chunk id: 56522, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => l,
  M: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk945577 = require("./945577.js");
let a = {
    enabled: false
  },
  o = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-06_search_desktop_xdm_feedback",
    label: "Search Desktop XDM Feedback Experiment",
    defaultConfig: a,
    treatments: [{
      id: 1,
      label: "Enables feedback in xDM control and treatment groups",
      config: {
        enabled: true
      }
    }]
  });

function s(e) {
  let {
    location: t
  } = e, {
    enabled: n
  } = o.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  });
  return (0, i.Gc)({
    location: t
  }) && n
}

function l(e) {
  let {
    location: t
  } = e, {
    enabled: n
  } = o.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: false
  });
  return (0, i.wn)({
    location: t
  }) && n
}