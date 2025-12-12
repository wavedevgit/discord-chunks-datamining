/** Chunk was on web.js **/
/** chunk id: 31336, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qh: () => o,
  SO: () => a,
  Zw: () => l,
  d8: () => s
});
var Chunk570140 = require("./570140.js"),
  Chunk19759 = require("./19759.js");

function o(e) {
  r.Z.dispatch({
    type: "DEV_TOOLS_SETTINGS_UPDATE",
    settings: e
  })
}

function a() {
  o({
    displayTools: !Chunk19759.Z.displayTools
  })
}

function s(e) {
  o({
    displayTools: true,
    lastOpenTabId: e
  })
}

function l() {
  Chunk570140.Z.dispatch({
    type: "ANALYTICS_LOG_CLEAR"
  })
}