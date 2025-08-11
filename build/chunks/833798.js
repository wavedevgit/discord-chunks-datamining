/** Chunk was on web.js **/
/** chunk id: 833798, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => u
}), require("./467055.js"), require("./388685.js"), require("./314940.js");
var Chunk278074 = require("./278074.js"),
  Chunk264181 = require("./264181.js"),
  Chunk178185 = require("./178185.js"),
  Chunk272280 = require("./272280.js"),
  Chunk751485 = require("./751485.js"),
  Chunk806185 = require("./806185.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u {
  static fromServer(e) {
    var t;
    return new u(Object.fromEntries(Object.entries(null != (t = null == e ? true : e.marketings) ? t : {}).map(e => {
      let [t, n] = e;
      return [t, (0, r.EQ)(n).with({
        type: i.Z.COACHTIP
      }, e => l.Z.fromServer(e)).with({
        type: i.Z.BADGE
      }, e => o.E.fromServer(e)).with({
        type: i.Z.BANNER
      }, e => a.I.fromServer(e)).with({
        type: i.Z.COACHMARK
      }, e => s.F.fromServer(e)).otherwise(() => true)]
    })))
  }
  constructor(e) {
    c(this, "marketingsBySurfaces", true), this.marketingsBySurfaces = e
  }
}