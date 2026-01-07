/** Chunk was on web.js **/
/** chunk id: 40766, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => u
}), require("./539854.js");
var Chunk570140 = require("./570140.js");
let i = 1e3,
  a = 100,
  o = [],
  s = null;

function l() {
  0 !== o.length && (r.Z.dispatch({
    type: "OVERLAY_ADD_LOGS_BATCH",
    logs: o
  }), o = [], null != s && (clearTimeout(s), s = null))
}

function c() {
  null == s && (s = setTimeout(() => {
    l()
  }, i))
}

function u(e) {
  o.push(e), o.length >= a ? l() : c()
}