/** Chunk was on web.js **/
/** chunk id: 159551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => u
}), require("./321073.js");
var Chunk73153 = require("./73153.js");
let i = 1e3,
  a = 100,
  o = [],
  s = null;

function l() {
  0 !== o.length && (r.h.dispatch({
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