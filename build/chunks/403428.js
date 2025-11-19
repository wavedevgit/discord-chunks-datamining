/** Chunk was on web.js **/
/** chunk id: 403428, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./35282.js"), require("./415506.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js");

function a(e, t, n) {
  let a = e,
    {
      name: o,
      kind: s,
      variations: l,
      defaultConfig: c
    } = a;
  return t.registerExperiment(a), {
    definition: a,
    useConfig: function(e) {
      var a;
      let u = n(s, e),
        [d, f] = (0, i.Wu)([t], () => t.getEvaluationAndAssignment(s, u, o), [u]),
        _ = null == f ? true : f.variantId,
        p = null != (a = null == f ? true : f.trackedVariantId) ? a : _,
        h = null == f ? true : f.revision,
        m = null == f ? true : f.isOverride,
        g = null == f ? true : f.exposureTrackingEnabled;
      if ((0, r.useEffect)(() => {
          null != d && null != p && null != h && false === m && true === g && t.trackExperimentExposure(d, o, e.location, s, h, p)
        }, [u, d, p, h, e.location, m, g]), null == _) return c;
      {
        let e = l[_];
        return null != e ? e : c
      }
    },
    getConfig: function(e) {
      var r;
      let i = n(s, e),
        [a, u] = t.getEvaluationAndAssignment(s, i, o),
        d = null == u ? true : u.variantId,
        f = null != (r = null == u ? true : u.trackedVariantId) ? r : d,
        _ = null == u ? true : u.revision,
        p = null == u ? true : u.isOverride,
        h = null == u ? true : u.exposureTrackingEnabled;
      if (null != a && null != f && null != _ && false === p && true === h && t.trackExperimentExposure(a, o, e.location, s, _, f), null == d) return c;
      {
        let e = l[d];
        return null != e ? e : c
      }
    }
  }
}