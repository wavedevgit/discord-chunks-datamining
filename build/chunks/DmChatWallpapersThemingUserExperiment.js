/** Chunk was on web.js **/
/** chunk id: 436952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  qM: () => s,
  rr: () => a,
  sQ: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  id: "2025-03_dm_chat_wallpapers_viewer",
  kind: "user",
  label: "DM Chat Wallpapers Viewer",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Enables viewing dm chat wallpapers",
    config: {
      enabled: true
    }
  }]
});

function o(e) {
  let {
    location: t
  } = e;
  return a.useExperiment({
    location: t
  }).enabled
}
let s = (0, Chunk818083.B)({
  id: "2025-04_dm_chat_wallpapers_theming",
  kind: "user",
  label: "DM Chat Wallpapers Theming",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Enables new theming customizations on DM chat wallpapers",
    config: {
      enabled: true
    }
  }, {
    id: 2,
    label: "Enables new theming customizations and light mode on DM chat wallpapers",
    config: {
      enabled: true,
      lightMode: true
    }
  }]
})