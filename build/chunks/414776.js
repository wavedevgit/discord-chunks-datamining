/** Chunk was on web.js **/
/** chunk id: 414776, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B0: () => c,
  IP: () => s,
  Qb: () => a,
  UI: () => l,
  j$: () => i,
  je: () => o
});
var r = Symbol.for("FluidValue:config"),
  i = function(e) {
    return !!a(e)
  };

function o(e) {
  var t = a(e);
  return t ? t.get() : e
}

function a(e) {
  if (e) return e[r]
}

function s(e, t) {
  Object.defineProperty(e, r, {
    value: t,
    configurable: true
  })
}

function l(e, t) {
  var n = a(e);
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