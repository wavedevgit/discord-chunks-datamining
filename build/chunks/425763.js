/** Chunk was on web.js **/
/** chunk id: 425763, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  VU: () => s,
  ef: () => o,
  ny: () => l
});
var Chunk353640 = require("./353640.js"),
  Chunk121894 = require("./121894.js");
let a = (0, Chunk353640.v)(e => ({
  inDndMode: false
}));

function o(e) {
  (0, i.r)(() => a.setState({
    inDndMode: e
  }))
}

function s() {
  return a(e => e.inDndMode)
}

function l() {
  return a.getState().inDndMode
}