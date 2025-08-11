/** Chunk was on web.js **/
/** chunk id: 972830, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => u
}), require("./358797.js"), require("./539854.js");
var Chunk570140 = require("./570140.js"),
  Chunk179645 = require("./179645.js"),
  Chunk38618 = require("./38618.js");
let a = [];

function s() {
  return null != Chunk179645.Z.getType()
}

function l() {
  s() || (a.forEach(e => c(e)), a = [])
}

function c(e) {
  setImmediate(() => e())
}

function u(e) {
  o.Z.isConnectedOrOverlay() && !s() ? c(e) : a.push(e)
}
Chunk570140.Z.subscribe("CONNECTION_OPEN", l), Chunk570140.Z.subscribe("CONNECTION_RESUMED", l), Chunk570140.Z.subscribe("NUF_COMPLETE", l)