/** Chunk was on web.js **/
/** chunk id: 85402, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ec: () => l,
  Tm: () => o,
  Zv: () => s,
  aq: () => c,
  at: () => i,
  oq: () => a
});
var r = Symbol.for("FluidValue:config"),
  i = function(e) {
    return !!o(e)
  };

function a(e) {
  var t = o(e);
  return t ? t.get() : e
}

function o(e) {
  if (e) return e[r]
}

function s(e, t) {
  Object.defineProperty(e, r, {
    value: t,
    configurable: true
  })
}

function l(e, t) {
  var n = o(e);
  if (n) return n.addChild(t),
    function() {
      return n.removeChild(t)
    }
}
var c = function() {
  return function() {
    s(this, this)
  }
}()