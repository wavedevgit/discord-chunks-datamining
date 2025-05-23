/** Chunk was on 86915 **/
"use strict";
n.d(t, {
  A: () => s
});
var i = n(913527),
  l = n.n(i),
  r = n(388032);

function s(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.intl.string(r.t["Yl1D8/"]),
    i = l().duration(e, "seconds");
  return i.days() > 0 ? r.intl.formatToPlainString(t ? r.t.GBLpQ0 : r.t.k2UNz8, {
    days: i.days()
  }) : i.hours() > 0 ? r.intl.formatToPlainString(t ? r.t.rhY1Rk : r.t.xCjYxM, {
    hours: i.hours()
  }) : i.minutes() > 0 ? r.intl.formatToPlainString(t ? r.t["XIGt+f"] : r.t.iXLF9f, {
    minutes: i.minutes()
  }) : e > 0 ? r.intl.formatToPlainString(t ? r.t.pyvjRk : r.t.geSp4O, {
    seconds: i.seconds()
  }) : t ? r.intl.string(r.t["Yl1D8/"]) : n
}