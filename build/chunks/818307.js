/** Chunk was on web.js **/
/** chunk id: 818307, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk635377 = require("./635377.js"),
  i = require.n(Chunk635377);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = 3;
class o {
  reset() {
    this._subscriptions = {}
  }
  get(e) {
    return this._get(e).keys()
  }
  getSubscribedThreadIds() {
    let e = new Set;
    for (let t in this._subscriptions)
      for (let n of this._subscriptions[t].keys()) e.add(n);
    return e
  }
  _get(e) {
    var t;
    return null != (t = this._subscriptions[e]) ? t : new(i())({
      max: s,
      updateAgeOnGet: true
    })
  }
  clear(e) {
    e in this._subscriptions && (delete this._subscriptions[e], this._onChange(e, []))
  }
  subscribe(e, t, n) {
    let r = this._get(e);
    return r.has(t) ? (r.set(t, Date.now()), false) : (null != n && r.has(n) && r.set(n, Date.now()), r.set(t, Date.now()), this._subscriptions[e] = r, this._onChange(e, r.keys()), true)
  }
  unsubscribe(e, t) {
    if (!(e in this._subscriptions)) returnfalse;
    let n = this._subscriptions[e];
    return !!n.has(t) && (n.del(t), this._onChange(e, n.keys()), true)
  }
  constructor(e) {
    a(this, "_subscriptions", {}), a(this, "_onChange", true), this._onChange = e
  }
}