/** Chunk was on 87995 **/
n.d(t, {
  L0: () => f,
  Rr: () => g,
  tp: () => p,
  wT: () => h
});
var r = n(704215),
  a = n(605236),
  o = n(699516),
  l = n(626135),
  s = n(70956),
  i = n(869031),
  c = n(711758),
  u = n(982863),
  d = n(987562),
  _ = n(981631);
let b = s.Z.Millis.WEEK,
  m = s.Z.Millis.DAYS_30,
  f = () => {
    if (!(0, i.nZ)("block_user_feedback_utils")) return !1;
    let e = o.Z.getSinces();
    return Object.keys(e).some(t => {
      let n = Date.now() - Date.parse(e[t]);
      return o.Z.isBlocked(t) && n > b && n < m
    })
  },
  p = (e, t, n, r) => {
    l.default.track(_.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r
    })
  },
  g = () => {
    if (!(0, u.C$)("ignore_user_feedback_utils")) return !1;
    let {
      isDismissed: e
    } = (0, a.Fo)(r.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
      cooldownDurationMs: d.pv
    });
    if (e) return !1;
    let t = c.Z.getIgnoreTimestamps();
    return Object.keys(t).some(e => {
      let n = Date.now() - Number(t[e]);
      return o.Z.isIgnored(e) && n > b && n < m
    })
  },
  h = (e, t, n, r) => {
    l.default.track(_.rMx.IGNORE_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r
    })
  }