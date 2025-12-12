/** Chunk was on web.js **/
/** chunk id: 901089, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => s
});
var Chunk720479 = require("./720479.js"),
  Chunk274738 = require("./274738.js");
let a = 78,
  o = 80;
class s extends Chunk274738.IQ {
  fromJulianDay(e) {
    let t, n, s, l = super.fromJulianDay(e),
      c = l.year - a,
      u = e - (0, i.g_)(l.era, l.year, 1, 1);
    if (u < o ? (c--, u += (t = (0, i.Eg)(l.year - 1) ? 31 : 30) + 155 + 90 + 10) : (t = (0, i.Eg)(l.year) ? 31 : 30, u -= o), u < t) n = 1, s = u + 1;
    else {
      let e = u - t;
      e < 155 ? (n = Math.floor(e / 31) + 2, s = e % 31 + 1) : (e -= 155, n = Math.floor(e / 30) + 7, s = e % 30 + 1)
    }
    return new(0, r.aw)(this, c, n, s)
  }
  toJulianDay(e) {
    let t, n, r = e.year + a,
      [o, s] = (0, i.JD)(r);
    return ((0, i.Eg)(s) ? (t = 31, n = (0, i.g_)(o, s, 3, 21)) : (t = 30, n = (0, i.g_)(o, s, 3, 22)), 1 === e.month) ? n + e.day - 1 : (n += t + 31 * Math.min(e.month - 2, 5), e.month >= 8 && (n += (e.month - 7) * 30), n += e.day - 1)
  }
  getDaysInMonth(e) {
    return 1 === e.month && (0, i.Eg)(e.year + a) || e.month >= 2 && e.month <= 6 ? 31 : 30
  }
  getYearsInEra() {
    return 9919
  }
  getEras() {
    return ["saka"]
  }
  balanceDate() {}
  constructor(...e) {
    super(...e), this.identifier = "indian"
  }
}