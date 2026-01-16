/** Chunk was on web.js **/
/** chunk id: 79320, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Vb: () => l,
  Yk: () => o,
  zP: () => s
});
var Chunk121168 = require("./121168.js"),
  Chunk731965 = require("./731965.js");
let a = (0, Chunk121168.U)(e => ({
  inDndMode: false
}));

function o(e) {
  (0, i.j)(() => a.setState({
    inDndMode: e
  }))
}

function s() {
  return a(e => e.inDndMode)
}

function l() {
  return a.getState().inDndMode
}