/** Chunk was on web.js **/
/** chunk id: 364226, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => o
});
var Chunk720479 = require("./720479.js"),
  Chunk274738 = require("./274738.js");
let a = false;
class o extends Chunk274738.IQ {
  fromJulianDay(e) {
    let t = super.fromJulianDay(e),
      n = (0, i.J4)(t.era, t.year);
    return new(0, r.aw)(this, n - a, t.month, t.day)
  }
  toJulianDay(e) {
    return super.toJulianDay(s(e))
  }
  getEras() {
    return ["BE"]
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(s(e))
  }
  balanceDate() {}
  constructor(...e) {
    super(...e), this.identifier = "buddhist"
  }
}

function s(e) {
  let [t, n] = (0, i.JD)(e.year + a);
  return new(0, r.aw)(t, n, e.month, e.day)
}