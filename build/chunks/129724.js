/** Chunk was on 89298 **/
/** chunk id: 129724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk913527 = require("./913527.js"),
  r = require.n(Chunk913527),
  Chunk388032 = require("./388032.js");

function l(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : o.intl.string(o.t["Yl1D8/"]),
    i = r().duration(e, "seconds");
  return i.days() > 0 ? o.intl.formatToPlainString(t ? o.t.GBLpQ0 : o.t.k2UNz8, {
    days: i.days()
  }) : i.hours() > 0 ? o.intl.formatToPlainString(t ? o.t.rhY1Rk : o.t.xCjYxM, {
    hours: i.hours()
  }) : i.minutes() > 0 ? o.intl.formatToPlainString(t ? o.t["XIGt+f"] : o.t.iXLF9f, {
    minutes: i.minutes()
  }) : e > 0 ? o.intl.formatToPlainString(t ? o.t.pyvjRk : o.t.geSp4O, {
    seconds: i.seconds()
  }) : t ? o.intl.string(o.t["Yl1D8/"]) : n
}