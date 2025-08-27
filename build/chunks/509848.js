/** Chunk was on web.js **/
/** chunk id: 509848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KV: () => c,
  ZP: () => f,
  dj: () => l
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk31775 = require("./31775.js"),
  o = require.n(Chunk31775);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = 100,
  c = [
    [0, 99]
  ];

function u(e) {
  let t = {};
  return e.forEach((e, n) => {
    t[n] = e
  }), t
}
let d = 5;
class f {
  reset() {
    this._subscriptions = {}
  }
  get(e) {
    return u(this._get(e))
  }
  _get(e) {
    var t;
    return null != (t = this._subscriptions[e]) ? t : new(o())({
      max: d
    })
  }
  clear(e) {
    delete this._subscriptions[e]
  }
  subscribe(e, t, n) {
    let r = this._get(e);
    return !i().isEqual(r.get(t), n) && (r.set(t, n), this._subscriptions[e] = r, this._onChange(e, u(r)), true)
  }
  constructor(e) {
    s(this, "_subscriptions", {}), s(this, "_onChange", true), this._onChange = e
  }
}