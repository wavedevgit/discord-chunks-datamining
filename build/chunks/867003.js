/** Chunk was on 66672 **/
/** chunk id: 867003, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  I: () => S,
  L0: () => m,
  Rr: () => E,
  nH: () => y,
  tp: () => g,
  wT: () => O
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
let d = 3 * Chunk70956.Z.Millis.DAY,
  p = Chunk70956.Z.Millis.WEEK,
  f = Chunk70956.Z.Millis.DAYS_30,
  m = () => {
    if (!(0, Chunk869031.nZ)("block_user_feedback_utils")) returnfalse;
    let e = Chunk699516.Z.getSinces();
    return Object.keys(module).some(t => {
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
    } = (0, Chunk982863.C$)("ignore_user_feedback_utils");
    if (!module) returnfalse;
    let {
      isDismissed: r
    } = (0, Chunk605236.Fo)(Chunk704215.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
      cooldownDurationMs: Chunk987562.pv
    });
    if (require) returnfalse;
    let c = exports ? d : p,
      a = Chunk711758.Z.getIgnoreTimestamps();
    return Object.keys(Chunk70956).some(e => {
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
  y = e => e === n.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? u.L$.KID_STARTED : u.L$.GET_STARTED,
  S = (e, t, r, n, o) => {
    c.default.track(b.rMx.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
      rating: e,
      feedback: t,
      reason: r,
      skipped: n,
      entrypoint: o
    })
  }