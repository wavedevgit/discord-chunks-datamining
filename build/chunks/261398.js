/** Chunk was on 74327 **/
/** chunk id: 261398, original params: e,i,n (module,exports,require) **/
require.d(exports, {
  e: () => x
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk954571 = require("./954571.js"),
  Chunk207913 = require("./207913.js"),
  Chunk335891 = require("./335891.js"),
  Chunk985481 = require("./985481.js"),
  Chunk239093 = require("./239093.js"),
  Chunk652215 = require("./652215.js");
let x = () => {
  let e = (0, a.bG)([l.A], () => l.A.getAppealClassificationId()),
    i = (0, d.LJ)(null != e ? e : o.dJq),
    n = (0, r.K)(),
    x = (0, a.bG)([l.A], () => l.A.getIsDsaEligible());
  return t.useCallback(t => {
    s.default.track(o.HAw.SAFETY_HUB_ACTION, {
      action: t,
      account_standing: n.state,
      classification_ids: null != e ? [Number(e)] : null,
      source: c.XN.AppealIngestion,
      is_dsa_eligible: x,
      violation_type: i.violationType
    })
  }, [n.state, e, i, x])
}