/** Chunk was on 27978 **/
/** chunk id: 424044, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk10198 = require("./10198.js");
Chunk442837.ZP.initialize();
let E = e => {
  let {
    location: t
  } = e, n = (0, s.e7)([m.default], () => m.default.isAuthenticated()), E = (0, s.e7)([d.Z], () => d.Z.hasLoadedExperiments), v = (0, g.oK)("RSL - Landing Page"), [b, j] = i.useState(false), [I, y] = i.useState(_.intl.string(_.t["9exy+V"])), [O, S] = i.useState(true), N = e => {
    switch (e) {
      case f.evJ.INVALID_FORM_BODY:
      case f.evJ.DSA_RSL_REPORT_NOT_FOUND:
        y(_.intl.string(_.t.bzXDfc));
        break;
      case f.evJ.DSA_RSL_ALREADY_REQUESTED:
        y(_.intl.string(_.t.rV00wq));
        break;
      case f.evJ.DSA_RSL_LIMITED_TIME:
        y(_.intl.string(_.t["0dI29h"]));
        break;
      case f.evJ.DSA_RSL_REPORT_INELIGIBLE:
        y(_.intl.string(_.t["RGa/Gb"]));
        break;
      default:
        y(_.intl.string(_.t["0QLzfv"]))
    }
  };
  return i.useEffect(() => {
    n ? (S(true), o.k({
      withAnalyticsToken: true
    }).then(() => S(false)).catch(() => S(false))) : S(false)
  }, [n]), i.useEffect(() => {
    E || v || a.Z.getExperiments()
  }, [E, v]), i.useEffect(() => {
    let e = async e => {
      var t, n;
      try {
        let n = null != e ? await (0, h.hs)(e) : true;
        null != n ? y(_.intl.string(_.t.e6mZMt)) : N(null == (t = n.body) ? true : t.code)
      } catch (e) {
        N(null == (n = e.body) ? true : n.code)
      } finally {
        j(false)
      }
    };
    j(true), e((0, c.Z)(t)), (0, p.e)("report_second_look")
  }, [t]), v && !O && (0, r.jsxs)(u.ZP, {
    children: [(0, r.jsx)(u.Dx, {
      className: x.marginBottom8,
      children: I
    }), b && (0, r.jsx)(l.$jN, {})]
  })
}