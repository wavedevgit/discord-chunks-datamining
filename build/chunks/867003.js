/** Chunk was on 87995 **/
n.d(t, {
  L0: () => p,
  Rr: () => O,
  tp: () => g,
  wT: () => h
});
var r = n(704215),
  o = n(605236),
  l = n(699516),
  a = n(626135),
  i = n(70956),
  s = n(869031),
  c = n(711758),
  u = n(982863),
  b = n(987562),
  d = n(981631);
let _ = 3 * i.Z.Millis.DAY,
  f = i.Z.Millis.WEEK,
  m = i.Z.Millis.DAYS_30,
  p = () => {
    if (!(0, s.nZ)("block_user_feedback_utils")) return !1;
    let e = l.Z.getSinces();
    return Object.keys(e).some(t => {
      let n = Date.now() - Date.parse(e[t]);
      return l.Z.isBlocked(t) && n > f && n < m
    })
  },
  g = (e, t, n, r) => {
    a.default.track(d.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r
    })
  },
  O = () => {
    let {
      enabled: e,
      shouldGetShorterIgnoreDuration: t
    } = (0, u.C$)("ignore_user_feedback_utils");
    if (!e) return !1;
    let {
      isDismissed: n
    } = (0, o.Fo)(r.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
      cooldownDurationMs: b.pv
    });
    if (n) return !1;
    let a = t ? _ : f,
      i = c.Z.getIgnoreTimestamps();
    return Object.keys(i).some(e => {
      let t = Date.now() - Number(i[e]);
      return l.Z.isIgnored(e) && t > a && t < m
    })
  },
  h = (e, t, n, r) => {
    a.default.track(d.rMx.IGNORE_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r
    })
  }