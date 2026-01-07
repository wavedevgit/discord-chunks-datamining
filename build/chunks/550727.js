/** Chunk was on 69818 **/
/** chunk id: 550727, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  B: () => o
});
var Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk388032 = require("./388032.jsx");
let o = [{
  getDueAt: () => a()().add(30, "minutes").toDate(),
  getLabel: () => i.intl.string(i.t["OV8l/H"])
}, {
  getDueAt: () => a()().add(1, "hour").toDate(),
  getLabel: () => i.intl.string(i.t["zf0R+0"])
}, {
  getDueAt: () => a()().add(4, "hour").toDate(),
  getLabel: () => i.intl.string(i.t["5gztZN"])
}, {
  getDueAt: () => {
    let e = a()().startOf("day").add(9, "hours");
    return a()().hour() >= 9 ? e.add(1, "day").toDate() : e.toDate()
  },
  getLabel: () => a()().hour() >= 9 ? i.intl.string(i.t["7MKr2P"]) : i.intl.string(i.t.FnFI3m)
}, {
  getDueAt: () => {
    let e, t = a()().day();
    return e = 0 === t || 1 === t && a()().startOf("day").add(9, "hours").isAfter(a()()) ? 1 : 8, a()().day(e).startOf("day").add(9, "hours").toDate()
  },
  getLabel: () => i.intl.string(i.t["q+Ls05"])
}]