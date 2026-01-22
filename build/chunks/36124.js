/** Chunk was on web.js **/
/** chunk id: 36124, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => f,
  JM: () => l,
  LD: () => c
});
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk635377 = require("./635377.js"),
  s = require.n(Chunk635377);

function o(e, t, n) {
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
    return null != (t = this._subscriptions[e]) ? t : new(s())({
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
    o(this, "_subscriptions", {}), o(this, "_onChange", true), this._onChange = e
  }
}