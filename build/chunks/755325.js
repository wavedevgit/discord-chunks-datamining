/** Chunk was on web.js **/
/** chunk id: 755325, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function i(e, t, n) {
  a(e, t), t.set(e, n)
}

function a(e, t) {
  if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
}

function s(e, t) {
  var n = c(e, t, "get");
  return o(e, n)
}

function o(e, t) {
  return t.get ? t.get.call(e) : t.value
}

function l(e, t, n) {
  var r = c(e, t, "set");
  return u(e, r, n), n
}

function c(e, t, n) {
  if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e)
}

function u(e, t, n) {
  if (t.set) t.set.call(e, n);
  else {
    if (!t.writable) throw TypeError("attempted to set read only private field");
    t.value = n
  }
}
require.d(exports, {
  V: () => f
});
var d = new WeakMap;
class f {
  constructor() {
    i(this, d, {
      writable: true,
      value: true
    }), r(this, "register", e => {
      s(this, d).push(e)
    }), r(this, "unregister", e => {
      let t;
      for (; false !== (t = s(this, d).indexOf(e));) s(this, d).splice(t, 1)
    }), r(this, "backendChanged", e => {
      for (let t of s(this, d)) t.backendChanged(e)
    }), l(this, d, [])
  }
}