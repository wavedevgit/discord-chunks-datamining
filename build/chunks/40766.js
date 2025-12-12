/** Chunk was on web.js **/
/** chunk id: 40766, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => u
}), require("./539854.js");
var Chunk570140 = require("./570140.js");
let i = 1e3,
  o = 100,
  a = [],
  s = null;

function l() {
  0 !== a.length && (Chunk570140.Z.dispatch({
    type: "OVERLAY_ADD_LOGS_BATCH",
    logs: a
  }), a = [], null != s && (clearTimeout(s), s = null))
}

function c() {
  null == s && (s = setTimeout(() => {
    l()
  }, i))
}

function u(e) {
  a.push(e), a.length >= o ? l() : c()
}