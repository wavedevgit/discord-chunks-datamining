/** Chunk was on web.js **/
/** chunk id: 406066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./539854.js"), require("./388685.js");
var r, Chunk348327 = require("./348327.js"),
  a = require.n(Chunk348327),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = [require("./742738.js").Z],
  u = [];

function d() {
  let e = [];
  for (let t of c) {
    let n = t.getActivity();
    null != n && e.push(n)
  }
  return !a()(e, u) && (u = e, true)
}
class f extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith(c, d)
  }
  getActivities() {
    return u
  }
}
l(f, "displayName", "FirstPartyRichPresenceStore");
let p = new f(Chunk570140.Z)