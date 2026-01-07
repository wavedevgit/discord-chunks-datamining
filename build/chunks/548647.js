/** Chunk was on 65652 **/
/** chunk id: 548647, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  n: () => x
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk626135 = require("./626135.js"),
  Chunk236289 = require("./236289.js"),
  Chunk451284 = require("./451284.js"),
  Chunk613734 = require("./613734.js"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js");
let x = () => {
  let n = (0, a.e7)([l.Z], () => l.Z.getAppealClassificationId()),
    t = (0, o.YG)(null != n ? n : d.lds),
    e = (0, r.P)(),
    x = (0, a.e7)([l.Z], () => l.Z.getIsDsaEligible());
  return i.useCallback(i => {
    s.default.track(d.rMx.SAFETY_HUB_ACTION, {
      action: i,
      account_standing: e.state,
      classification_ids: null != n ? [Number(n)] : null,
      source: c.s.AppealIngestion,
      is_dsa_eligible: x,
      violation_type: t.violationType
    })
  }, [e.state, n, t, x])
}