/** Chunk was on web.js **/
/** chunk id: 403428, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./35282.js"), require("./415506.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
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
      let a = n(s, e),
        [u, d] = (0, i.Wu)([t], () => t.getEvaluationAndAssignment(s, a, o), [a]),
        f = null == d ? true : d.variantId,
        _ = null == d ? true : d.revision,
        p = null == d ? true : d.isOverride;
      if ((0, r.useEffect)(() => {
          null != u && null != f && null != _ && false === p && t.trackExperimentExposure(u, o, e.location, s, _, f)
        }, [a, u, f, _, e.location, p]), null == f) return c;
      {
        let e = l[f];
        return null != e ? e : c
      }
    },
    getConfig: function(e) {
      let r = n(s, e),
        [i, a] = t.getEvaluationAndAssignment(s, r, o),
        u = null == a ? true : a.variantId,
        d = null == a ? true : a.revision,
        f = null == a ? true : a.isOverride;
      if (null != i && null != u && null != d && false === f && t.trackExperimentExposure(i, o, e.location, s, d, u), null == u) return c;
      {
        let e = l[u];
        return null != e ? e : c
      }
    }
  }
}