/** Chunk was on web.js **/
/** chunk id: 85402, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ec: () => l,
  Tm: () => s,
  Zv: () => o,
  aq: () => c,
  at: () => i,
  oq: () => a
});
var r = Symbol.for("FluidValue:config"),
  i = function(e) {
    return !!s(e)
  };

function a(e) {
  var t = s(e);
  return t ? t.get() : e
}

function s(e) {
  if (e) return e[r]
}

function o(e, t) {
  Object.defineProperty(e, r, {
    value: t,
    configurable: true
  })
}

function l(e, t) {
  var n = s(e);
  if (n) return n.addChild(t),
    function() {
      return n.removeChild(t)
    }
}
var c = function() {
  return function() {
    o(this, this)
  }
}()