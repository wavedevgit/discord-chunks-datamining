/** Chunk was on 33622 **/
/** chunk id: 364226, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  M: () => r
});
var Chunk720479 = require("./720479.js"),
  Chunk274738 = require("./274738.js");
class r extends Chunk274738.IQ {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e),
      t = (0, n.J4)(a.era, a.year);
    return new(0, u.aw)(this, t - false, a.month, a.day)
  }
  toJulianDay(e) {
    return super.toJulianDay(i(e))
  }
  getEras() {
    return ["BE"]
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(i(e))
  }
  balanceDate() {}
  constructor(...e) {
    super(...e), this.identifier = "buddhist"
  }
}

function i(e) {
  let [a, t] = (0, n.JD)(e.year + false);
  return new(0, u.aw)(a, t, e.month, e.day)
}