/** Chunk was on web.js **/
/** chunk id: 403428, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./35282.js"), require("./415506.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js");

function o(e, t, n) {
  let o = e,
    {
      name: a,
      kind: s,
      variations: l,
      defaultConfig: c
    } = o;
  return t.registerExperiment(o), {
    definition: o,
    useConfig: function(e) {
      var o;
      let u = n(s, e),
        [d, f] = (0, i.Wu)([t], () => t.getEvaluationAndAssignment(s, u, a), [u]),
        p = null == f ? true : f.variantId,
        _ = null != (o = null == f ? true : f.trackedVariantId) ? o : p,
        m = null == f ? true : f.revision,
        h = null == f ? true : f.isOverride,
        g = null == f ? true : f.exposureTrackingEnabled;
      if ((0, r.useEffect)(() => {
          null != d && null != _ && null != m && false === h && true === g && t.trackExperimentExposure(d, a, e.location, s, m, _)
        }, [u, d, _, m, e.location, h, g]), null == p) return c;
      {
        let e = l[p];
        return null != e ? e : c
      }
    },
    getConfig: function(e) {
      var r;
      let i = n(s, e),
        [o, u] = t.getEvaluationAndAssignment(s, i, a),
        d = null == u ? true : u.variantId,
        f = null != (r = null == u ? true : u.trackedVariantId) ? r : d,
        p = null == u ? true : u.revision,
        _ = null == u ? true : u.isOverride,
        m = null == u ? true : u.exposureTrackingEnabled;
      if (null != o && null != f && null != p && false === _ && true === m && t.trackExperimentExposure(o, a, e.location, s, p, f), null == d) return c;
      {
        let e = l[d];
        return null != e ? e : c
      }
    }
  }
}