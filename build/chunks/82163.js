/** Chunk was on web.js **/
/** chunk id: 82163, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => l
});
var Chunk720479 = require("./720479.js"),
  Chunk274738 = require("./274738.js");
let o = 1911;

function a(e) {
  return "minguo" === e.era ? e.year + o : 1 - e.year + o
}

function s(e) {
  let t = e - o;
  return t > 0 ? ["minguo", t] : ["before_minguo", 1 - t]
}
class l extends Chunk274738.IQ {
  fromJulianDay(e) {
    let t = super.fromJulianDay(e),
      [n, o] = s((0, i.J4)(t.era, t.year));
    return new(0, r.aw)(this, n, o, t.month, t.day)
  }
  toJulianDay(e) {
    return super.toJulianDay(c(e))
  }
  getEras() {
    return ["before_minguo", "minguo"]
  }
  balanceDate(e) {
    let [t, n] = s(a(e));
    e.era = t, e.year = n
  }
  isInverseEra(e) {
    return "before_minguo" === e.era
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(c(e))
  }
  getYearsInEra(e) {
    return "before_minguo" === e.era ? 9999 : 9999 - o
  }
  constructor(...e) {
    super(...e), this.identifier = "roc"
  }
}

function c(e) {
  let [t, n] = (0, i.JD)(a(e));
  return new(0, r.aw)(t, n, e.month, e.day)
}