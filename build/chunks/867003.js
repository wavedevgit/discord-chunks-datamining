/** Chunk was on 46355 **/
n.d(t, {
  L0: () => f,
  Rr: () => p,
  tp: () => m,
  wT: () => O
});
var r = n(704215),
  i = n(605236),
  o = n(699516),
  a = n(626135),
  l = n(70956),
  s = n(869031),
  c = n(711758),
  b = n(982863),
  _ = n(987562),
  u = n(981631);
let d = 3 * l.Z.Millis.DAY,
  h = l.Z.Millis.WEEK,
  g = l.Z.Millis.DAYS_30,
  f = () => {
    if (!(0, s.nZ)("block_user_feedback_utils")) return !1;
    let e = o.Z.getSinces();
    return Object.keys(e).some(t => {
      let n = Date.now() - Date.parse(e[t]);
      return o.Z.isBlocked(t) && n > h && n < g
    })
  },
  m = (e, t, n, r) => {
    a.default.track(u.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r
    })
  },
  p = () => {
    let {
      enabled: e,
      shouldGetShorterIgnoreDuration: t
    } = (0, b.C$)("ignore_user_feedback_utils");
    if (!e) return !1;
    let {
      isDismissed: n
    } = (0, i.Fo)(r.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
      cooldownDurationMs: _.pv
    });
    if (n) return !1;
    let a = t ? d : h,
      l = c.Z.getIgnoreTimestamps();
    return Object.keys(l).some(e => {
      let t = Date.now() - Number(l[e]);
      return o.Z.isIgnored(e) && t > a && t < g
    })
  },
  O = (e, t, n, r) => {
    a.default.track(u.rMx.IGNORE_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r
    })
  }