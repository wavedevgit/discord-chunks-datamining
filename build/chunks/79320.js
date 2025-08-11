/** Chunk was on web.js **/
/** chunk id: 79320, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Vb: () => l,
  Yk: () => a,
  zP: () => s
});
var Chunk97519 = require("./97519.js"),
  Chunk731965 = require("./731965.js");
let o = (0, Chunk97519.U)(e => ({
  inDndMode: false
}));

function a(e) {
  (0, i.j)(() => o.setState({
    inDndMode: e
  }))
}

function s() {
  return o(e => e.inDndMode)
}

function l() {
  return o.getState().inDndMode
}