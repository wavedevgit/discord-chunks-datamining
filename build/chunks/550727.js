/** Chunk was on 69818 **/
r.d(t, {
  B: () => c
});
var n = r(913527),
  a = r.n(n),
  i = r(388032);
let c = [{
  getDueAt: () => a()().add(30, "minutes").toDate(),
  getLabel: () => i.intl.string(i.t["OV8l/P"])
}, {
  getDueAt: () => a()().add(1, "hour").toDate(),
  getLabel: () => i.intl.string(i.t["zf0R+/"])
}, {
  getDueAt: () => a()().add(4, "hour").toDate(),
  getLabel: () => i.intl.string(i.t["5gztZG"])
}, {
  getDueAt: () => a()().add(1, "day").startOf("day").add(9, "hours").toDate(),
  getLabel: () => i.intl.string(i.t["7MKr2N"])
}, {
  getDueAt: () => {
    let e, t = a()().day();
    return e = 0 === t || 1 === t && a()().startOf("day").add(9, "hours").isAfter(a()()) ? 1 : 8, a()().day(e).startOf("day").add(9, "hours").toDate()
  },
  getLabel: () => i.intl.string(i.t["q+Ls09"])
}]