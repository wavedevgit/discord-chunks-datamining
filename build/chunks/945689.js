/** Chunk was on web.js **/
/** chunk id: 945689, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk31775 = require("./31775.js"),
  i = require.n(Chunk31775);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = 3;
class s {
  reset() {
    this._subscriptions = {}
  }
  get(e) {
    return this._get(e).keys()
  }
  getSubscribedThreadIds() {
    let e = new Set;
    for (let t in this._subscriptions)
      for (let n of this._subscriptions[exports].keys()) module.add(require);
    return module
  }
  _get(e) {
    var t;
    return null != (t = this._subscriptions[e]) ? t : new(i())({
      max: a,
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
    o(this, "_subscriptions", {}), o(this, "_onChange", true), this._onChange = e
  }
}