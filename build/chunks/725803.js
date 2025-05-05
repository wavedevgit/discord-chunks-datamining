/** Chunk was on 73628 **/
r.d(t, {
  Z: () => i
}), r(388685);
var n = r(73800),
  A = r(442837),
  a = r(881052),
  l = r(728345),
  o = r(812206);

function i(e, t) {
  let r = (0, A.e7)([o.Z], () => o.Z.getGuildApplication(e, t)),
    [i, s] = n.useState(null == r),
    [c, d] = n.useState(),
    [u, g] = n.useState(!1),
    f = n.useCallback(async () => {
      if (null == r && null != e) {
        g(!0), s(!0);
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
    }, [r, t, e]);
  return n.useEffect(() => {
    u || f()
  }, [u, f]), {
    application: r,
    error: c,
    loading: i
  }
}