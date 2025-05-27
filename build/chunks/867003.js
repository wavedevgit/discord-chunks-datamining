/** Chunk was on 46355 **/
n.d(t, {
  L0: () => m,
  Rr: () => O,
  tp: () => p,
  wT: () => E
});
var r = n(704215),
  o = n(605236),
  i = n(699516),
  l = n(626135),
  a = n(70956),
  c = n(869031),
  s = n(711758),
  u = n(982863),
  _ = n(987562),
  b = n(981631);
let d = 3 * a.Z.Millis.DAY,
  f = a.Z.Millis.WEEK,
  g = a.Z.Millis.DAYS_30,
  m = () => {
    if (!(0, c.nZ)("block_user_feedback_utils")) return !1;
    let e = i.Z.getSinces();
    return Object.keys(e).some(t => {
      let n = Date.now() - Date.parse(e[t]);
      return i.Z.isBlocked(t) && n > f && n < g
    })
  },
  p = (e, t, n, r) => {
    l.default.track(b.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
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
      cooldownDurationMs: _.pv
    });
    if (n) return !1;
    let l = t ? d : f,
      a = s.Z.getIgnoreTimestamps();
    return Object.keys(a).some(e => {
      let t = Date.now() - Number(a[e]);
      return i.Z.isIgnored(e) && t > l && t < g
    })
  },
  E = (e, t, n, r) => {
    l.default.track(b.rMx.IGNORE_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r
    })
  }