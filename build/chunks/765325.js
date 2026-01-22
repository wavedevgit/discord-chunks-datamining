/** Chunk was on web.js **/
/** chunk id: 765325, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => s
});
var Chunk99478 = require("./99478.js"),
  Chunk142922 = require("./142922.js");
let a = false;
class s extends Chunk142922.FG {
  fromJulianDay(e) {
    let t = super.fromJulianDay(e),
      n = (0, i.LA)(t.era, t.year);
    return new(0, r.ng)(this, n - a, t.month, t.day)
  }
  toJulianDay(e) {
    return super.toJulianDay(o(e))
  }
  getEras() {
    return ["BE"]
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(o(e))
  }
  balanceDate() {}
  constructor(...e) {
    super(...e), this.identifier = "buddhist"
  }
}

function o(e) {
  let [t, n] = (0, i.f5)(e.year + a);
  return new(0, r.ng)(t, n, e.month, e.day)
}