/** Chunk was on 27978 **/
/** chunk id: 424044, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk232567 = require("./232567.js"),
  Chunk129293 = require("./129293.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk353926 = require("./353926.js"),
  Chunk185625 = require("./185625.js"),
  Chunk551549 = require("./551549.js"),
  Chunk108427 = require("./108427.js"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk478411 = require("./478411.js");
Chunk442837.ZP.initialize();
let E = e => {
  let {
    location: t
  } = e, n = (0, s.e7)([m.default], () => m.default.isAuthenticated()), E = (0, s.e7)([d.Z], () => d.Z.hasLoadedExperiments), v = (0, f.oK)("RSL - Landing Page"), [b, j] = i.useState(false), [I, N] = i.useState(x.intl.string(x.t["9exy+V"])), [y, S] = i.useState(true), C = e => {
    switch (e) {
      case p.evJ.INVALID_FORM_BODY:
      case p.evJ.DSA_RSL_REPORT_NOT_FOUND:
        N(x.intl.string(x.t.bzXDfc));
        break;
      case p.evJ.DSA_RSL_ALREADY_REQUESTED:
        N(x.intl.string(x.t.rV00wq));
        break;
      case p.evJ.DSA_RSL_LIMITED_TIME:
        N(x.intl.string(x.t["0dI29h"]));
        break;
      case p.evJ.DSA_RSL_REPORT_INELIGIBLE:
        N(x.intl.string(x.t["RGa/Gb"]));
        break;
      default:
        N(x.intl.string(x.t["0QLzfv"]))
    }
  };
  return i.useEffect(() => {
    n ? (S(true), o.k({
      withAnalyticsToken: true
    }).then(() => S(false)).catch(() => S(false))) : S(false)
  }, [n]), i.useEffect(() => {
    E || v || l.Z.getExperiments()
  }, [E, v]), i.useEffect(() => {
    let e = async e => {
      var t, n;
      try {
        let n = null != e ? await (0, h.hs)(e) : true;
        null != n ? N(x.intl.string(x.t.e6mZMt)) : C(null == (t = n.body) ? true : t.code)
      } catch (e) {
        C(null == (n = e.body) ? true : n.code)
      } finally {
        j(false)
      }
    };
    j(true), e((0, c.Z)(t)), (0, g.e)("report_second_look")
  }, [t]), v && !y && (0, r.jsxs)(u.ZP, {
    children: [(0, r.jsx)(u.Dx, {
      className: _.marginBottom8,
      children: I
    }), b && (0, r.jsx)(a.$jN, {})]
  })
}