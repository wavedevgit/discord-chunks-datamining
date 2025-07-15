/** Chunk was on 73628 **/
A.d(t, {
  Z: () => o
}), A(388685);
var n = A(73800),
  r = A(442837),
  a = A(881052),
  l = A(728345),
  i = A(812206);

function o(e, t) {
  let A = (0, r.e7)([i.Z], () => i.Z.getGuildApplication(e, t)),
    [o, s] = n.useState(null == A),
    [c, d] = n.useState(),
    [u, f] = n.useState(!1),
    g = n.useCallback(async () => {
      if (null == A && null != e) {
        f(!0), s(!0);
        try {
          await l.ZP.getApplicationsForGuild(e, {
            type: t,
            includeTeam: !0
          })
        } catch (e) {
          d(new a.Hx(e))
        } finally {
          s(!1)
        }
      }
    }, [A, t, e]);
  return n.useEffect(() => {
    u || g()
  }, [u, g]), {
    application: A,
    error: c,
    loading: o
  }
}