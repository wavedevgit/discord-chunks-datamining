/** Chunk was on web.js **/
/** chunk id: 476575, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  assign: () => _,
  batchedUpdates: () => f,
  colorNames: () => c,
  createStringInterpolator: () => r,
  frameLoop: () => s,
  now: () => l,
  requestAnimationFrame: () => d,
  skipAnimation: () => u,
  to: () => i,
  willAdvance: () => p
});
var r, i, Chunk360276 = require("./360276.js"),
  Chunk233710 = require("./233710.js"),
  s = new Chunk360276.c,
  l = function() {
    return performance.now()
  },
  c = null,
  u = false,
  d = "u" > typeof window ? window.requestAnimationFrame : function() {
    return false
  },
  f = function(e) {
    return e()
  },
  p = Chunk233710.lQ,
  _ = function(e) {
    var t;
    return i = (t = Object.assign({
      to: i,
      now: l,
      frameLoop: s,
      colorNames: c,
      skipAnimation: u,
      createStringInterpolator: r,
      requestAnimationFrame: d,
      batchedUpdates: f,
      willAdvance: p
    }, h(e))).to, l = t.now, s = t.frameLoop, c = t.colorNames, u = t.skipAnimation, r = t.createStringInterpolator, d = t.requestAnimationFrame, f = t.batchedUpdates, p = t.willAdvance, t
  };

function h(e) {
  var t = {};
  for (var n in e) true !== e[n] && (t[n] = e[n]);
  return t
}