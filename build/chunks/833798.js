/** Chunk was on web.js **/
/** chunk id: 833798, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => c
}), require("./467055.js"), require("./388685.js");
var Chunk264181 = require("./264181.js"),
  Chunk178185 = require("./178185.js"),
  Chunk272280 = require("./272280.js"),
  Chunk751485 = require("./751485.js"),
  Chunk806185 = require("./806185.js");

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
      return (null == n ? true : n.type) === r.Z.COACHTIP ? [t, s.Z.fromServer(n)] : (null == n ? true : n.type) === r.Z.BADGE ? [t, i.E.fromServer(n)] : (null == n ? true : n.type) === r.Z.BANNER ? [t, a.I.fromServer(n)] : (null == n ? true : n.type) === r.Z.COACHMARK ? [t, o.F.fromServer(n)] : [t, true]
    })))
  }
  constructor(e) {
    l(this, "marketingsBySurfaces", true), this.marketingsBySurfaces = e
  }
}