/** Chunk was on web.js **/
/** chunk id: 239189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  assign: () => p,
  batchedUpdates: () => f,
  colorNames: () => c,
  createStringInterpolator: () => r,
  frameLoop: () => s,
  now: () => l,
  requestAnimationFrame: () => d,
  skipAnimation: () => u,
  to: () => i,
  willAdvance: () => _
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
  _ = Chunk217348.ZT,
  p = function(e) {
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
      willAdvance: _
    }, h(e))).to, l = t.now, s = t.frameLoop, c = t.colorNames, u = t.skipAnimation, r = t.createStringInterpolator, d = t.requestAnimationFrame, f = t.batchedUpdates, _ = t.willAdvance, t
  };

function h(e) {
  var t = {};
  for (var n in e) true !== e[n] && (t[n] = e[n]);
  return t
}