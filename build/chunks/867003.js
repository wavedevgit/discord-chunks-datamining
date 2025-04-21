/** Chunk was on 87995 **/
n.d(t, {
  L0: () => p,
  Rr: () => h,
  tp: () => g,
  wT: () => x
});
var r = n(704215),
  l = n(605236),
  o = n(699516),
  a = n(626135),
  i = n(70956),
  s = n(869031),
  c = n(711758),
  u = n(982863),
  d = n(987562),
  _ = n(981631);
let b = 3 * i.Z.Millis.DAY,
  m = i.Z.Millis.WEEK,
  f = i.Z.Millis.DAYS_30,
  p = () => {
    if (!(0, s.nZ)("block_user_feedback_utils")) return !1;
    let e = o.Z.getSinces();
    return Object.keys(e).some(t => {
      let n = Date.now() - Date.parse(e[t]);
      return o.Z.isBlocked(t) && n > m && n < f
    })
  },
  g = (e, t, n, r) => {
    a.default.track(_.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r
    })
  },
  h = () => {
    let {
      enabled: e,
      shouldGetShorterIgnoreDuration: t
    } = (0, u.C$)("ignore_user_feedback_utils");
    if (!e) return !1;
    let {
      isDismissed: n
    } = (0, l.Fo)(r.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
      cooldownDurationMs: d.pv
    });
    if (n) return !1;
    let a = t ? b : m,
      i = c.Z.getIgnoreTimestamps();
    return Object.keys(i).some(e => {
      let t = Date.now() - Number(i[e]);
      return o.Z.isIgnored(e) && t > a && t < f
    })
  },
  x = (e, t, n, r) => {
    a.default.track(_.rMx.IGNORE_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r
    })
  }