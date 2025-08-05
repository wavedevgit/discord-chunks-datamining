/** Chunk was on 73628 **/
A.d(t, {
  Z: () => i
}), A(388685);
var n = A(73800),
  r = A(442837),
  l = A(881052),
  a = A(728345),
  o = A(812206);

function i(e, t) {
  let A = (0, r.e7)([o.Z], () => o.Z.getGuildApplication(e, t)),
    [i, s] = n.useState(null == A),
    [d, c] = n.useState(),
    [u, f] = n.useState(!1),
    g = n.useCallback(async () => {
      if (null == A && null != e) {
        f(!0), s(!0);
        try {
          await a.ZP.getApplicationsForGuild(e, {
            type: t,
            includeTeam: !0
          })
        } catch (e) {
          c(new l.Hx(e))
        } finally {
          s(!1)
        }
      }
    }, [A, t, e]);
  return n.useEffect(() => {
    u || g()
  }, [u, g]), {
    application: A,
    error: d,
    loading: i
  }
}