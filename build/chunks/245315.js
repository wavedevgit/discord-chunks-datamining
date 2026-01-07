/** Chunk was on web.js **/
/** chunk id: 245315, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BF: () => p,
  QA: () => f,
  cp: () => d
});
var Chunk367907 = require("./367907.js"),
  Chunk368859 = require("./368859.js"),
  Chunk626135 = require("./626135.js"),
  Chunk135899 = require("./135899.js"),
  Chunk981631 = require("./981631.js"),
  Chunk943702 = require("./943702.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e) {
  return (0, i.Z)(e) && e.messageReference.guild_id === o.M_ || null != e.author && e.author.id === o.c9
}

function f() {
  return l
}
let p = e => {
  a.default.track(s.rMx.USER_FLOW_TRANSITION, u({
    flow_type: o.tA,
    from_step: e.fromStep,
    to_step: e.toStep
  }, (0, r.hH)(e.guildId)))
}