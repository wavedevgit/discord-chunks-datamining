/** Chunk was on web.js **/
/** chunk id: 375123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => s,
  Z: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk154579 = require("./154579.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-07_search_author_type_filter",
  label: "Search Author Type Filter",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
});

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, i.ro)({
    location: t,
    autoTrackExposure: n
  }), {
    enabled: o
  } = a.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return o
}

function s(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, i.ro)({
    location: t,
    autoTrackExposure: n
  }), {
    enabled: o
  } = a.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return o
}