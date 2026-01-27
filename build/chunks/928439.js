/** Chunk was on web.js **/
/** chunk id: 928439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => o
}), require("./896048.js"), require("./638769.js"), require("./65821.js"), require("./321073.js");
var Chunk73153 = require("./73153.js");
let i = {},
  a = false;

function o(e) {
  for (let t in e) {
    let n = e[t];
    s(t, n), l(n)
  }
  r.h.addInterceptor(c)
}

function s(e, t) {
  var n;
  t.actions
}

function l(e) {
  var t;
  let n = null != (t = e.actions) ? t : [];
  for (let t of ((e.hasStoreChangeListeners || e.loadAfterConnectionOpen) && (n.includes("POST_CONNECTION_OPEN") || (n = [...n, "POST_CONNECTION_OPEN"]), n.includes("OVERLAY_INITIALIZE") || (n = [...n, "OVERLAY_INITIALIZE"])), e.loadRightBeforeConnectionOpen && (n.includes("CONNECTION_OPEN") || (n = [...n, "CONNECTION_OPEN"]), n.includes("OVERLAY_INITIALIZE") || (n = [...n, "OVERLAY_INITIALIZE"])), n)) t in i || (i[t] = []), i[t].push(e)
}

function c(e) {
  if (("CONNECTION_OPEN" === e.type || "OVERLAY_INITIALIZE" === e.type) && (a = true), e.type in i) {
    let t = [];
    for (let n of i[e.type]) !a && n.neverLoadBeforeConnectionOpen ? t.push(n) : n.inlineRequire().initialize();
    t.length > 0 ? i[e.type] = t : delete i[e.type]
  }
  returnfalse
}