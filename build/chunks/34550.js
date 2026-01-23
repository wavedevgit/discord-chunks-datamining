/** Chunk was on web.js **/
/** chunk id: 34550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $b: () => g,
  Cm: () => m,
  JO: () => b,
  dN: () => O,
  h6: () => E,
  mf: () => y
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
let p = 3 * Chunk927813.A.Millis.DAY,
  _ = Chunk927813.A.Millis.WEEK,
  h = Chunk927813.A.Millis.DAYS_30,
  m = () => {
    if (!(0, l.Bv)("block_user_feedback_utils")) returnfalse;
    let e = a.A.getSinces();
    return Object.keys(e).some(t => {
      let n = t,
        r = Date.now() - Date.parse(e[n]);
      return a.A.isBlocked(n) && r > _ && r < h
    })
  },
  g = (e, t, n, r) => {
    s.default.track(f.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r
    })
  },
  E = () => {
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
    let s = t ? p : _,
      o = c.A.getIgnoreTimestamps();
    return Object.keys(o).some(e => {
      let t = e,
        n = Date.now() - Number(o[t]);
      return a.A.isIgnored(t) && n > s && n < h
    })
  },
  y = (e, t, n, r) => {
    s.default.track(f.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r
    })
  },
  b = e => e === r.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? d.mg.KID_STARTED : d.mg.GET_STARTED,
  O = (e, t, n, r, i) => {
    s.default.track(f.HAw.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r,
      entrypoint: i
    })
  }