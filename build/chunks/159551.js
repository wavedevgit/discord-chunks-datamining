/** Chunk was on web.js **/
/** chunk id: 159551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => u
}), require("./321073.js");
var Chunk73153 = require("./73153.js");
let i = 1e3,
  a = 100,
  s = [],
  o = null;

function l() {
  0 !== s.length && (r.h.dispatch({
    type: "OVERLAY_ADD_LOGS_BATCH",
    logs: s
  }), s = [], null != o && (clearTimeout(o), o = null))
}

function c() {
  null == o && (o = setTimeout(() => {
    l()
  }, i))
}

function u(e) {
  s.push(e), s.length >= a ? l() : c()
}