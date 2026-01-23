/** Chunk was on 47841 **/
/** chunk id: 635582, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk181658 = require("./181658.js"),
  Chunk260509 = require("./260509.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk493540 = require("./493540.js"),
  Chunk469993 = require("./469993.js");

function u(e, t) {
  let n = (0, i.bG)([a.A], () => a.A.getGuild(e)),
    [u, g] = r.useState(),
    [m, p] = r.useState(false),
    f = (0, d.ME)(n);
  return {
    canSubmitAcceptance: (0, i.bG)([o.default], () => {
      let e = o.default.getCurrentUser();
      return null != n && (0, s.bM)(n, e)
    }, [n]),
    error: u,
    loading: m,
    submitAcceptTermsRequest: r.useCallback(async () => {
      if (null != e && (f || null != t)) {
        p(true), g(true);
        try {
          null != t ? await c.DP(e, t) : await c.Bo(e)
        } catch (e) {
          g(new l.A(e))
        } finally {
          p(false)
        }
      }
    }, [e, t, f])
  }
}