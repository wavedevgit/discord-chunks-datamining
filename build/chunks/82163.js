/** Chunk was on web.js **/
/** chunk id: 82163, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => l
});
var Chunk720479 = require("./720479.js"),
  Chunk274738 = require("./274738.js");
let a = 1911;

function o(e) {
  return "minguo" === e.era ? e.year + a : 1 - e.year + a
}

function s(e) {
  let t = e - a;
  return t > 0 ? ["minguo", t] : ["before_minguo", 1 - t]
}
class l extends Chunk274738.IQ {
  fromJulianDay(e) {
    let t = super.fromJulianDay(e),
      [n, a] = s((0, i.J4)(t.era, t.year));
    return new(0, r.aw)(this, n, a, t.month, t.day)
  }
  toJulianDay(e) {
    return super.toJulianDay(c(e))
  }
  getEras() {
    return ["before_minguo", "minguo"]
  }
  balanceDate(e) {
    let [t, n] = s(o(e));
    e.era = t, e.year = n
  }
  isInverseEra(e) {
    return "before_minguo" === e.era
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(c(e))
  }
  getYearsInEra(e) {
    return "before_minguo" === e.era ? 9999 : 9999 - a
  }
  constructor(...e) {
    super(...e), this.identifier = "roc"
  }
}

function c(e) {
  let [t, n] = (0, i.JD)(o(e));
  return new(0, r.aw)(t, n, e.month, e.day)
}