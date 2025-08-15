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
  getLabel: () => Chunk388032.intl.string(Chunk388032.t["OV8l/P"])
}, {
  getDueAt: () => a()().add(1, "hour").toDate(),
  getLabel: () => Chunk388032.intl.string(Chunk388032.t["zf0R+/"])
}, {
  getDueAt: () => a()().add(4, "hour").toDate(),
  getLabel: () => Chunk388032.intl.string(Chunk388032.t["5gztZG"])
}, {
  getDueAt: () => {
    let e = a()().startOf("day").add(9, "hours");
    return a()().hour() >= 9 ? module.add(1, "day").toDate() : module.toDate()
  },
  getLabel: () => a()().hour() >= 9 ? Chunk388032.intl.string(Chunk388032.t["7MKr2N"]) : Chunk388032.intl.string(Chunk388032.t.FnFI3t)
}, {
  getDueAt: () => {
    let e, t = a()().day();
    return e = 0 === exports || 1 === exports && a()().startOf("day").add(9, "hours").isAfter(a()()) ? 1 : 8, a()().day(module).startOf("day").add(9, "hours").toDate()
  },
  getLabel: () => Chunk388032.intl.string(Chunk388032.t["q+Ls09"])
}]