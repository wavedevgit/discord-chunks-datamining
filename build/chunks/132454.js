/** Chunk was on web.js **/
/** chunk id: 132454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => a
}), require("./388685.js"), require("./642613.js"), require("./415506.js"), require("./539854.js");
var Chunk570140 = require("./570140.js");
let i = {},
  o = false;

function a(e) {
  for (let t in e) {
    let n = e[t];
    s(t, n), l(n)
  }
  r.Z.addInterceptor(c)
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
  if (("CONNECTION_OPEN" === e.type || "OVERLAY_INITIALIZE" === e.type) && (o = true), e.type in i) {
    let t = [];
    for (let n of i[e.type]) !o && n.neverLoadBeforeConnectionOpen ? t.push(n) : n.inlineRequire().initialize();
    t.length > 0 ? i[e.type] = t : delete i[e.type]
  }
  returnfalse
}