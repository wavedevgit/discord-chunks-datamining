/** Chunk was on web.js **/
/** chunk id: 239189, original params: e,t,n (module,exports,re quire) **/
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
var r, i, Chunk19784 = require("./19784.js"),
  Chunk217348 = require("./217348.js"),
  s = new Chunk19784.V,
  l = function() {
    return performance.now()
  },
  c = null,
  u = false,
  d = "undefined" != typeof window ? window.requestAnimationFrame : function() {
    return false
  },
  f = function(e) {
    return e()
  },
  p = Chunk217348.ZT,
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