/** Chunk was on web.js **/
/** chunk id: 867003, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => O,
  L0: () => m,
  Rr: () => E,
  nH: () => y,
  tp: () => g,
  wT: () => b
});
var Chunk704215 = require("./704215.js"),
  Chunk605236 = require("./605236.js"),
  Chunk699516 = require("./699516.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk869031 = require("./869031.js"),
  Chunk711758 = require("./711758.js"),
  Chunk982863 = require("./982863.js"),
  Chunk987562 = require("./987562.js"),
  Chunk981631 = require("./981631.js");
let p = 3 * Chunk70956.Z.Millis.DAY,
  _ = Chunk70956.Z.Millis.WEEK,
  h = Chunk70956.Z.Millis.DAYS_30,
  m = () => {
    if (!(0, l.nZ)("block_user_feedback_utils")) returnfalse;
    let e = a.Z.getSinces();
    return Object.keys(e).some(t => {
      let n = t,
        r = Date.now() - Date.parse(e[n]);
      return a.Z.isBlocked(n) && r > _ && r < h
    })
  },
  g = (e, t, n, r) => {
    o.default.track(f.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
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
    } = (0, u.C$)("ignore_user_feedback_utils");
    if (!e) returnfalse;
    let {
      isDismissed: n
    } = (0, i.Fo)(r.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
      cooldownDurationMs: d.pv
    });
    if (n) returnfalse;
    let o = t ? p : _,
      s = c.Z.getIgnoreTimestamps();
    return Object.keys(s).some(e => {
      let t = e,
        n = Date.now() - Number(s[t]);
      return a.Z.isIgnored(t) && n > o && n < h
    })
  },
  b = (e, t, n, r) => {
    o.default.track(f.rMx.IGNORE_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r
    })
  },
  y = e => e === r.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? d.L$.KID_STARTED : d.L$.GET_STARTED,
  O = (e, t, n, r, i) => {
    o.default.track(f.rMx.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r,
      entrypoint: i
    })
  }