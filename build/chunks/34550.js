/** Chunk was on 15627 **/
/** chunk id: 34550, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  $b: () => g,
  Cm: () => m,
  JO: () => S,
  dN: () => y,
  h6: () => O,
  mf: () => E
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
let d = 3 * Chunk927813.A.Millis.DAY,
  f = Chunk927813.A.Millis.WEEK,
  p = Chunk927813.A.Millis.DAYS_30,
  m = () => {
    if (!(0, l.Bv)("block_user_feedback_utils")) returnfalse;
    let e = i.A.getSinces();
    return Object.keys(e).some(t => {
      let r = Date.now() - Date.parse(e[t]);
      return i.A.isBlocked(t) && r > f && r < p
    })
  },
  g = (e, t, r, n) => {
    c.default.track(b.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: r,
      skipped: n
    })
  },
  O = () => {
    let {
      enabled: e,
      shouldGetShorterIgnoreDuration: t
    } = (0, _.MA)("ignore_user_feedback_utils");
    if (!e) returnfalse;
    let {
      isDismissed: r
    } = (0, o.FZ)(n.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
      cooldownDurationMs: u.aH
    });
    if (r) returnfalse;
    let c = t ? d : f,
      a = s.A.getIgnoreTimestamps();
    return Object.keys(a).some(e => {
      let t = Date.now() - Number(a[e]);
      return i.A.isIgnored(e) && t > c && t < p
    })
  },
  E = (e, t, r, n) => {
    c.default.track(b.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: r,
      skipped: n
    })
  },
  S = e => e === n.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? u.mg.KID_STARTED : u.mg.GET_STARTED,
  y = (e, t, r, n, o) => {
    c.default.track(b.HAw.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: r,
      skipped: n,
      entrypoint: o
    })
  }