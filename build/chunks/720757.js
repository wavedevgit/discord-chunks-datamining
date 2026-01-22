/** Chunk was on web.js **/
/** chunk id: 720757, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./747238.js"), require("./65821.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js");

function a(e, t, n) {
  let a = e,
    {
      name: s,
      kind: o,
      variations: l,
      defaultConfig: c
    } = a;
  return t.registerExperiment(a), {
    definition: a,
    useConfig: function(e) {
      var a;
      let u = n(o, e),
        [d, f] = (0, i.yK)([t], () => t.getEvaluationAndAssignment(o, u, s), [u]),
        p = null == f ? true : f.variantId,
        _ = null != (a = null == f ? true : f.trackedVariantId) ? a : p,
        h = null == f ? true : f.revision,
        m = null == f ? true : f.isOverride,
        g = null == f ? true : f.exposureTrackingEnabled;
      if ((0, r.useEffect)(() => {
          null != d && null != _ && null != h && false === m && true === g && t.trackExperimentExposure(d, s, e.location, o, h, _, u)
        }, [u, d, _, h, e.location, m, g]), null == p) return c;
      {
        let e = l[p];
        return null != e ? e : c
      }
    },
    getConfig: function(e) {
      var r;
      let i = n(o, e),
        [a, u] = t.getEvaluationAndAssignment(o, i, s),
        d = null == u ? true : u.variantId,
        f = null != (r = null == u ? true : u.trackedVariantId) ? r : d,
        p = null == u ? true : u.revision,
        _ = null == u ? true : u.isOverride,
        h = null == u ? true : u.exposureTrackingEnabled;
      if (null != a && null != f && null != p && false === _ && true === h && t.trackExperimentExposure(a, s, e.location, o, p, f, i), null == d) return c;
      {
        let e = l[d];
        return null != e ? e : c
      }
    }
  }
}