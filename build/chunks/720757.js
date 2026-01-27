/** Chunk was on web.js **/
/** chunk id: 720757, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./747238.js"), require("./65821.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js");

function a(e, t, n, a) {
  let o = e,
    {
      name: s,
      kind: l,
      variations: c,
      defaultConfig: u
    } = o;
  return t.registerExperiment(o), {
    definition: o,
    useConfig: function(e) {
      var n;
      let o = a(l, e),
        [d, f] = (0, i.yK)([t], () => t.getEvaluationAndAssignment(l, o, s), [o]),
        p = null == f ? true : f.variantId,
        _ = null != (n = null == f ? true : f.trackedVariantId) ? n : p,
        h = null == f ? true : f.revision,
        m = null == f ? true : f.isOverride,
        g = null == f ? true : f.exposureTrackingEnabled;
      if ((0, r.useEffect)(() => {
          null != d && null != _ && null != h && false === m && true === g && t.trackExperimentExposure(d, s, e.location, l, h, _, o)
        }, [o, d, _, h, e.location, m, g]), null == p) return u;
      {
        let e = c[p];
        return null != e ? e : u
      }
    },
    getConfig: function(e) {
      var r;
      let i = n(l, e),
        [a, o] = t.getEvaluationAndAssignment(l, i, s),
        d = null == o ? true : o.variantId,
        f = null != (r = null == o ? true : o.trackedVariantId) ? r : d,
        p = null == o ? true : o.revision,
        _ = null == o ? true : o.isOverride,
        h = null == o ? true : o.exposureTrackingEnabled;
      if (null != a && null != f && null != p && false === _ && true === h && t.trackExperimentExposure(a, s, e.location, l, p, f, i), null == d) return u;
      {
        let e = c[d];
        return null != e ? e : u
      }
    }
  }
}