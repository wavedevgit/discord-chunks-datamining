/** Chunk was on web.js **/
/** chunk id: 538064, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ft: () => o,
  Jt: () => a,
  eY: () => l,
  pf: () => s
});
var Chunk73153 = require("./73153.js"),
  Chunk265059 = require("./265059.js");

function a(e) {
  r.h.dispatch({
    type: "DEV_TOOLS_SETTINGS_UPDATE",
    settings: e
  })
}

function s() {
  a({
    displayTools: !i.A.displayTools
  })
}

function o(e) {
  a({
    displayTools: true,
    lastOpenTabId: e
  })
}

function l() {
  r.h.dispatch({
    type: "ANALYTICS_LOG_CLEAR"
  })
}