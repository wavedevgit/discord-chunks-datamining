/** Chunk was on web.js **/
/** chunk id: 668731, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./321073.js"), require("./896048.js");
var r, Chunk812729 = require("./812729.js"),
  a = require.n(Chunk812729),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = [require("./732755.js").A],
  u = [];

function d() {
  let e = [];
  for (let t of c) {
    let n = t.getActivity();
    null != n && e.push(n)
  }
  return !a()(e, u) && (u = e, true)
}
class f extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.syncWith(c, d)
  }
  getActivities() {
    return u
  }
}
l(f, "displayName", "FirstPartyRichPresenceStore");
let p = new f(Chunk73153.h)