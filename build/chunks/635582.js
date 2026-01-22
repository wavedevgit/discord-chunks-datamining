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
    [u, f] = r.useState(),
    [g, b] = r.useState(false),
    m = (0, d.ME)(n);
  return {
    canSubmitAcceptance: (0, i.bG)([c.default], () => {
      let e = c.default.getCurrentUser();
      return null != n && (0, s.bM)(n, e)
    }, [n]),
    error: u,
    loading: g,
    submitAcceptTermsRequest: r.useCallback(async () => {
      if (null != e && (m || null != t)) {
        b(true), f(true);
        try {
          null != t ? await o.DP(e, t) : await o.Bo(e)
        } catch (e) {
          f(new l.A(e))
        } finally {
          b(false)
        }
      }
    }, [e, t, m])
  }
}