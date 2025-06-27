/** Chunk was on 97870 **/
n.d(t, {
  Z: () => _
}), n(388685);
var a, r, i, o = n(442837),
  c = n(570140),
  l = n(890022);
let s = new Set;

function u(e) {
  let {
    userActivities: t
  } = e;
  (0, l.uw)("RecentUserActivityStore") && null != t && (s = new Set(t.map(e => e.application_id)))
}
class d extends(a = o.ZP.Store) {
  get currentUserApplicationIds() {
    return s
  }
}
i = "RecentUserActivityStore", (r = "displayName") in d ? Object.defineProperty(d, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[r] = i;
let _ = new d(c.Z, {
  CONNECTION_OPEN_SUPPLEMENTAL: u,
  CONNECTION_OPEN_STATE_UPDATE: u
})