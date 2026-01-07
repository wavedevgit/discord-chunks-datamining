/** Chunk was on web.js **/
/** chunk id: 31336, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qh: () => a,
  SO: () => o,
  Zw: () => l,
  d8: () => s
});
var Chunk570140 = require("./570140.js"),
  Chunk19759 = require("./19759.js");

function a(e) {
  r.Z.dispatch({
    type: "DEV_TOOLS_SETTINGS_UPDATE",
    settings: e
  })
}

function o() {
  a({
    displayTools: !i.Z.displayTools
  })
}

function s(e) {
  a({
    displayTools: true,
    lastOpenTabId: e
  })
}

function l() {
  r.Z.dispatch({
    type: "ANALYTICS_LOG_CLEAR"
  })
}