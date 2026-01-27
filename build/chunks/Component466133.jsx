/** Chunk was on 86142 **/
/** chunk id: 466133, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
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
let x = e => {
  let {
    location: t
  } = e, n = (0, s.bG)([f.default], () => f.default.isAuthenticated()), x = (0, s.bG)([d.A], () => d.A.hasLoadedExperiments), E = (0, p.Jp)("RSL - Landing Page"), [v, y] = i.useState(false), [b, j] = i.useState(m.intl.string(m.t["9exy+V"])), [O, I] = i.useState(true), S = e => {
    switch (e) {
      case _.t02.INVALID_FORM_BODY:
      case _.t02.DSA_RSL_REPORT_NOT_FOUND:
        j(m.intl.string(m.t.bzXDfc));
        break;
      case _.t02.DSA_RSL_ALREADY_REQUESTED:
        j(m.intl.string(m.t.rV00wq));
        break;
      case _.t02.DSA_RSL_LIMITED_TIME:
        j(m.intl.string(m.t["0dI29h"]));
        break;
      case _.t02.DSA_RSL_REPORT_INELIGIBLE:
        j(m.intl.string(m.t["RGa/Gb"]));
        break;
      default:
        j(m.intl.string(m.t["0QLzfv"]))
    }
  };
  return i.useEffect(() => {
    n ? (I(true), o.rQ({
      withAnalyticsToken: true
    }).then(() => I(false)).catch(() => I(false))) : I(false)
  }, [n]), i.useEffect(() => {
    x || E || a.A.getExperiments()
  }, [x, E]), i.useEffect(() => {
    let e = async e => {
      var t, n;
      try {
        let n = null != e ? await (0, h.q)(e) : true;
        null != n ? j(m.intl.string(m.t.e6mZMt)) : S(null == (t = n.body) ? true : t.code)
      } catch (e) {
        S(null == (n = e.body) ? true : n.code)
      } finally {
        y(false)
      }
    };
    y(true), e((0, c.A)(t)), (0, g.d)("report_second_look")
  }, [t]), E && !O && (0, r.jsxs)(u.Ay, {
    children: [(0, r.jsx)(u.hE, {
      className: A.QB,
      children: b
    }), v && (0, r.jsx)(l.y$y, {})]
  })
}