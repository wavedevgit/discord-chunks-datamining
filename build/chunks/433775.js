/** Chunk was on 58023 **/
n.d(t, {
  Z: () => d
}), n(388685);
var r = n(192379),
  l = n(442837),
  i = n(951539),
  a = n(592125),
  s = n(356685),
  o = n(75666),
  c = n(981631);
let u = {
  can_broadcast: !1
};

function d(e, t, n) {
  let [d, m] = r.useState(u), [h, g] = r.useState(!1), x = r.useRef(!1), p = null == e ? void 0 : e.id, f = null == e ? void 0 : e.hasFeature(c.oNc.HAS_DIRECTORY_ENTRY);
  r.useEffect(() => {
    if (!f) return void m(u);
    x.current || null == p || (async () => {
      x.current = !0;
      try {
        let e = await (0, s.X)(p, o.C2.GUILD_SCHEDULED_EVENT, t);
        m(e)
      } catch (e) {
        m(u)
      }
      x.current = !1
    })()
  }, [p, f, t]), r.useEffect(() => {
    var e;
    if (!d.can_broadcast) return void g(!1);
    g(null == (e = d.has_broadcast) || e)
  }, [d]);
  let v = (0, l.e7)([a.Z], () => (0, i.wg)(n, [a.Z]));
  return {
    broadcastInfo: d,
    broadcastToDirectoryChannels: v && h,
    setBroadcastToDirectoryChannels: g,
    canEveryoneRoleViewEvent: v
  }
}