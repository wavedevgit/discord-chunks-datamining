/** Chunk was on 86142 **/
/** chunk id: 466133, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk803306 = require("./803306.js"),
  Chunk396681 = require("./396681.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk49463 = require("./49463.js"),
  Chunk369053 = require("./369053.js"),
  Chunk158237 = require("./158237.js"),
  Chunk210714 = require("./210714.js"),
  Chunk961350 = require("./961350.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473169 = require("./473169.js");
Chunk311907.Ay.initialize();
let _ = e => {
  let {
    location: t
  } = e, n = (0, s.bG)([g.default], () => g.default.isAuthenticated()), _ = (0, s.bG)([d.A], () => d.A.hasLoadedExperiments), E = (0, f.Jp)("RSL - Landing Page"), [b, v] = i.useState(false), [j, y] = i.useState(A.intl.string(A.t["9exy+V"])), [S, N] = i.useState(true), O = e => {
    switch (e) {
      case m.t02.INVALID_FORM_BODY:
      case m.t02.DSA_RSL_REPORT_NOT_FOUND:
        y(A.intl.string(A.t.bzXDfc));
        break;
      case m.t02.DSA_RSL_ALREADY_REQUESTED:
        y(A.intl.string(A.t.rV00wq));
        break;
      case m.t02.DSA_RSL_LIMITED_TIME:
        y(A.intl.string(A.t["0dI29h"]));
        break;
      case m.t02.DSA_RSL_REPORT_INELIGIBLE:
        y(A.intl.string(A.t["RGa/Gb"]));
        break;
      default:
        y(A.intl.string(A.t["0QLzfv"]))
    }
  };
  return i.useEffect(() => {
    n ? (N(true), o.rQ({
      withAnalyticsToken: true
    }).then(() => N(false)).catch(() => N(false))) : N(false)
  }, [n]), i.useEffect(() => {
    _ || E || a.A.getExperiments()
  }, [_, E]), i.useEffect(() => {
    let e = async e => {
      var t, n;
      try {
        let n = null != e ? await (0, h.q)(e) : true;
        null != n ? y(A.intl.string(A.t.e6mZMt)) : O(null == (t = n.body) ? true : t.code)
      } catch (e) {
        O(null == (n = e.body) ? true : n.code)
      } finally {
        v(false)
      }
    };
    v(true), e((0, c.A)(t)), (0, p.d)("report_second_look")
  }, [t]), E && !S && (0, r.jsxs)(u.Ay, {
    children: [(0, r.jsx)(u.hE, {
      className: x.QB,
      children: j
    }), b && (0, r.jsx)(l.y$y, {})]
  })
}