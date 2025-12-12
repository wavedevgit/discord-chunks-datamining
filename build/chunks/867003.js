/** Chunk was on web.js **/
/** chunk id: 867003, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => O,
  L0: () => h,
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
  m = Chunk70956.Z.Millis.DAYS_30,
  h = () => {
    if (!(0, Chunk869031.nZ)("block_user_feedback_utils")) returnfalse;
    let e = Chunk699516.Z.getSinces();
    return Object.keys(module).some(t => {
      let n = t,
        r = Date.now() - Date.parse(e[n]);
      return a.Z.isBlocked(n) && r > _ && r < m
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
    } = (0, Chunk982863.C$)("ignore_user_feedback_utils");
    if (!module) returnfalse;
    let {
      isDismissed: n
    } = (0, Chunk605236.Fo)(Chunk704215.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
      cooldownDurationMs: Chunk987562.pv
    });
    if (require) returnfalse;
    let o = exports ? p : _,
      s = Chunk711758.Z.getIgnoreTimestamps();
    return Object.keys(Chunk70956).some(e => {
      let t = e,
        n = Date.now() - Number(s[t]);
      return a.Z.isIgnored(t) && n > o && n < m
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