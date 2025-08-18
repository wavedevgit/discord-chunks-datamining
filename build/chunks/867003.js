/** Chunk was on 91173 **/
/** chunk id: 867003, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => O,
  L0: () => _,
  Rr: () => b,
  nH: () => C,
  tp: () => h,
  wT: () => E
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
let m = 3 * Chunk70956.Z.Millis.DAY,
  f = Chunk70956.Z.Millis.WEEK,
  g = Chunk70956.Z.Millis.DAYS_30,
  _ = () => {
    if (!(0, Chunk869031.nZ)("block_user_feedback_utils")) returnfalse;
    let e = Chunk699516.Z.getSinces();
    return Object.keys(module).some(t => {
      let n = Date.now() - Date.parse(e[t]);
      return l.Z.isBlocked(t) && n > f && n < g
    })
  },
  h = (e, t, n, r) => {
    o.default.track(p.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
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
    } = (0, Chunk982863.C$)("ignore_user_feedback_utils");
    if (!module) returnfalse;
    let {
      isDismissed: n
    } = (0, Chunk605236.Fo)(Chunk704215.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
      cooldownDurationMs: Chunk987562.pv
    });
    if (require) returnfalse;
    let o = exports ? m : f,
      a = Chunk711758.Z.getIgnoreTimestamps();
    return Object.keys(Chunk70956).some(e => {
      let t = Date.now() - Number(a[e]);
      return l.Z.isIgnored(e) && t > o && t < g
    })
  },
  E = (e, t, n, r) => {
    o.default.track(p.rMx.IGNORE_USER_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r
    })
  },
  C = e => e === r.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? d.L$.KID_STARTED : d.L$.GET_STARTED,
  O = (e, t, n, r, i) => {
    o.default.track(p.rMx.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: n,
      skipped: r,
      entrypoint: i
    })
  }