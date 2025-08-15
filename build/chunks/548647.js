/** Chunk was on 65652 **/
/** chunk id: 548647, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  n: () => x
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk626135 = require("./626135.js"),
  Chunk236289 = require("./236289.js"),
  Chunk451284 = require("./451284.js"),
  Chunk613734 = require("./613734.js"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js");
let x = () => {
  let e = (0, Chunk442837.e7)([Chunk236289.Z], () => Chunk236289.Z.getAppealClassificationId()),
    n = (0, Chunk613734.YG)(null != module ? module : Chunk981631.lds),
    t = (0, Chunk451284.P)(),
    x = (0, Chunk442837.e7)([Chunk236289.Z], () => Chunk236289.Z.getIsDsaEligible());
  return Chunk647438.useCallback(i => {
    s.default.track(d.rMx.SAFETY_HUB_ACTION, {
      action: i,
      account_standing: t.state,
      classification_ids: null != e ? [Number(e)] : null,
      source: c.s.AppealIngestion,
      is_dsa_eligible: x,
      violation_type: n.violationType
    })
  }, [require.state, module, exports, x])
}