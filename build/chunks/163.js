/** Chunk was on 58121 **/
t.d(n, {
  Z: () => h
}), t(47120);
var l = t(192379),
  r = t(442837),
  a = t(570140),
  i = t(211739),
  o = t(680089),
  s = t(9156),
  c = t(152376),
  d = t(724213),
  u = t(981631);

function m(e) {
  a.Z.dispatch({
    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
    guildId: e
  })
}

function h(e) {
  let n = (0, r.e7)([s.ZP], () => s.ZP.getPendingChannelUpdates(e));
  return l.useEffect(() => (m(e), () => m(e)), [e]), l.useEffect(() => {
    null != n && (0, c.C1)(e, n)
  }, [e, n]), {
    onChannelClick: l.useCallback((e, n, t) => {
      let l = s.ZP.isChannelOptedIn(e, n),
        r = n === t;
      !l && o.Z.isCollapsed(t) && null != t && (0, i.mJ)(t), (0, d.hi)(e) ? r ? (0, d.rz)(e, {
        include: new Set([n])
      }) : (0, d.rz)(e, {
        exclude: new Set([n])
      }) : (0, c.k$)(e, n, !l, {
        section: u.jXE.CHANNEL_BROWSER
      })
    }, [])
  }
}