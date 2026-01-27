/** Chunk was on web.js **/
/** chunk id: 526751, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => c
}), require("./446912.js"), require("./896048.js");
var Chunk488430 = require("./488430.js"),
  Chunk474996 = require("./474996.js"),
  Chunk326901 = require("./326901.js"),
  Chunk183264 = require("./183264.js"),
  Chunk813094 = require("./813094.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c {
  static fromServer(e) {
    var t;
    return new c(Object.fromEntries(Object.entries(null != (t = null == e ? true : e.marketings) ? t : {}).map(e => {
      let [t, n] = e;
      return (null == n ? true : n.type) === r.G.COACHTIP ? [t, s.A.fromServer(n)] : (null == n ? true : n.type) === r.G.BADGE ? [t, i.i.fromServer(n)] : (null == n ? true : n.type) === r.G.BANNER ? [t, a.V.fromServer(n)] : (null == n ? true : n.type) === r.G.COACHMARK ? [t, o.q.fromServer(n)] : [t, true]
    })))
  }
  constructor(e) {
    l(this, "marketingsBySurfaces", true), this.marketingsBySurfaces = e
  }
}