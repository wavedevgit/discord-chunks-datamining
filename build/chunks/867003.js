/** Chunk was on 46355 **/
r.d(t, {
  I: () => S,
  L0: () => m,
  Rr: () => E,
  nH: () => y,
  tp: () => g,
  wT: () => O
});
var n = r(704215),
  o = r(605236),
  i = r(699516),
  c = r(626135),
  a = r(70956),
  l = r(869031),
  s = r(711758),
  u = r(982863),
  _ = r(987562),
  b = r(981631);
let d = 3 * a.Z.Millis.DAY,
  p = a.Z.Millis.WEEK,
  f = a.Z.Millis.DAYS_30,
  m = () => {
    if (!(0, l.nZ)("block_user_feedback_utils")) return !1;
    let e = i.Z.getSinces();
    return Object.keys(e).some(t => {
      let r = Date.now() - Date.parse(e[t]);
      return i.Z.isBlocked(t) && r > p && r < f
    })
  },
  g = (e, t, r, n) => {
    c.default.track(b.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: r,
      skipped: n
    })
  },
  E = () => {
    let {
      enabled: e,
      shouldGetShorterIgnoreDuration: t
    } = (0, u.C$)("ignore_user_feedback_utils");
    if (!e) return !1;
    let {
      isDismissed: r
    } = (0, o.Fo)(n.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
      cooldownDurationMs: _.pv
    });
    if (r) return !1;
    let c = t ? d : p,
      a = s.Z.getIgnoreTimestamps();
    return Object.keys(a).some(e => {
      let t = Date.now() - Number(a[e]);
      return i.Z.isIgnored(e) && t > c && t < f
    })
  },
  O = (e, t, r, n) => {
    c.default.track(b.rMx.IGNORE_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: r,
      skipped: n
    })
  },
  y = e => e === n.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? _.L$.KID_STARTED : _.L$.GET_STARTED,
  S = (e, t, r, n, o) => {
    c.default.track(b.rMx.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: r,
      skipped: n,
      entrypoint: o
    })
  }