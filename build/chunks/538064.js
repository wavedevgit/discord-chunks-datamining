/** Chunk was on web.js **/
/** chunk id: 538064, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ft: () => s,
  Jt: () => a,
  eY: () => l,
  pf: () => o
});
var Chunk73153 = require("./73153.js"),
  Chunk265059 = require("./265059.js");

function a(e) {
  r.h.dispatch({
    type: "DEV_TOOLS_SETTINGS_UPDATE",
    settings: e
  })
}

function o() {
  a({
    displayTools: !i.A.displayTools
  })
}

function s(e) {
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