/** Chunk was on web.js **/
/** chunk id: 403428, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
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
      let o = n(s, e),
        [u, d] = (0, i.Wu)([t], () => t.getEvaluationAndAssignment(s, o, a), [o]),
        f = null == d ? true : d.variantId,
        _ = null == d ? true : d.revision,
        p = null == d ? true : d.isOverride;
      if ((0, r.useEffect)(() => {
          null != u && null != f && null != _ && false === p && t.trackExperimentExposure(u, a, e.location, s, _, f)
        }, [o, u, f, _, e.location, p]), null == f) return c;
      {
        let e = l[f];
        return null != e ? e : c
      }
    },
    getConfig: function(e) {
      let r = n(s, e),
        [i, o] = t.getEvaluationAndAssignment(s, r, a),
        u = null == o ? true : o.variantId,
        d = null == o ? true : o.revision,
        f = null == o ? true : o.isOverride;
      if (null != i && null != u && null != d && false === f && t.trackExperimentExposure(i, a, e.location, s, d, u), null == u) return c;
      {
        let e = l[u];
        return null != e ? e : c
      }
    }
  }
}