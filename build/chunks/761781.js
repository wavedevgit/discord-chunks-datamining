/** Chunk was on 93955 **/
n.d(t, {
  Z: () => p
}), n(388685);
var a, r, i, o = n(442837),
  c = n(570140),
  s = n(890022);
let l = new Set;

function u(e) {
  let {
    userActivities: t
  } = e;
  (0, s.uw)("RecentUserActivityStore") && null != t && (l = new Set(t.map(e => e.application_id)))
}
class d extends(a = o.ZP.Store) {
  get currentUserApplicationIds() {
    return l
  }
}
i = "RecentUserActivityStore", (r = "displayName") in d ? Object.defineProperty(d, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[r] = i;
let p = new d(c.Z, {
  CONNECTION_OPEN_SUPPLEMENTAL: u,
  CONNECTION_OPEN_STATE_UPDATE: u
})