/** Chunk was on web.js **/
/** chunk id: 507263, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => u
}), require("./142703.js"), require("./321073.js");
var Chunk73153 = require("./73153.js"),
  Chunk426620 = require("./426620.js"),
  Chunk142120 = require("./142120.js");
let s = [];

function o() {
  return null != i.A.getType()
}

function l() {
  o() || (s.forEach(e => c(e)), s = [])
}

function c(e) {
  setImmediate(() => e())
}

function u(e) {
  a.A.isConnectedOrOverlay() && !o() ? c(e) : s.push(e)
}
Chunk73153.h.subscribe("CONNECTION_OPEN", l), Chunk73153.h.subscribe("CONNECTION_RESUMED", l), Chunk73153.h.subscribe("NUF_COMPLETE", l)