/** Chunk was on 64935 **/
/** chunk id: 34550, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $b: () => h,
  Cm: () => _,
  JO: () => y,
  dN: () => v,
  h6: () => b,
  mf: () => A
});
var Chunk554146 = require("./554146.js"),
  Chunk367727 = require("./367727.js"),
  Chunk994500 = require("./994500.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk609415 = require("./609415.js"),
  Chunk842524 = require("./842524.js"),
  Chunk235390 = require("./235390.js"),
  Chunk14594 = require("./14594.js"),
  Chunk652215 = require("./652215.js");
let m = 3 * Chunk927813.A.Millis.DAY,
  f = Chunk927813.A.Millis.WEEK,
  g = Chunk927813.A.Millis.DAYS_30,
  _ = () => {
    if (!(0, o.Bv)("block_user_feedback_utils")) returnfalse;
    let e = l.A.getSinces();
    return Object.keys(e).some(t => {
      let n = Date.now() - Date.parse(e[t]);
      return l.A.isBlocked(t) && n > f && n < g
    })
  },
  h = (e, t, n, r) => {
    a.default.track(p.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r
    })
  },
  b = () => {
    let {
      enabled: e,
      shouldGetShorterIgnoreDuration: t
    } = (0, u.MA)("ignore_user_feedback_utils");
    if (!e) returnfalse;
    let {
      isDismissed: n
    } = (0, i.FZ)(r.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
      cooldownDurationMs: d.aH
    });
    if (n) returnfalse;
    let a = t ? m : f,
      s = c.A.getIgnoreTimestamps();
    return Object.keys(s).some(e => {
      let t = Date.now() - Number(s[e]);
      return l.A.isIgnored(e) && t > a && t < g
    })
  },
  A = (e, t, n, r) => {
    a.default.track(p.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r
    })
  },
  y = e => e === r.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? d.mg.KID_STARTED : d.mg.GET_STARTED,
  v = (e, t, n, r, i) => {
    a.default.track(p.HAw.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r,
      entrypoint: i
    })
  }