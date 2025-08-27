/** Chunk was on 27978 **/
/** chunk id: 424044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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
  Chunk197571 = require("./197571.js");
Chunk442837.ZP.initialize();
let v = e => {
  let {
    location: t
  } = e, n = (0, l.e7)([g.default], () => g.default.isAuthenticated()), v = (0, l.e7)([d.Z], () => d.Z.hasLoadedExperiments), E = (0, f.oK)("RSL - Landing Page"), [j, b] = i.useState(false), [I, N] = i.useState(_.intl.string(_.t["9exy+f"])), [O, y] = i.useState(true), S = e => {
    switch (e) {
      case m.evJ.INVALID_FORM_BODY:
      case m.evJ.DSA_RSL_REPORT_NOT_FOUND:
        N(_.intl.string(_.t.bzXDfX));
        break;
      case m.evJ.DSA_RSL_ALREADY_REQUESTED:
        N(_.intl.string(_.t.rV00ws));
        break;
      case m.evJ.DSA_RSL_LIMITED_TIME:
        N(_.intl.string(_.t["0dI29v"]));
        break;
      case m.evJ.DSA_RSL_REPORT_INELIGIBLE:
        N(_.intl.string(_.t["RGa/GR"]));
        break;
      default:
        N(_.intl.string(_.t["0QLzfn"]))
    }
  };
  return i.useEffect(() => {
    n ? (y(true), a.k({
      withAnalyticsToken: true
    }).then(() => y(false)).catch(() => y(false))) : y(false)
  }, [n]), i.useEffect(() => {
    v || E || s.Z.getExperiments()
  }, [v, E]), i.useEffect(() => {
    let e = async e => {
      var t, n;
      try {
        let n = null != e ? await (0, h.hs)(e) : true;
        null != n ? N(_.intl.string(_.t.e6mZMj)) : S(null == (t = n.body) ? true : t.code)
      } catch (e) {
        S(null == (n = e.body) ? true : n.code)
      } finally {
        b(false)
      }
    };
    b(true), e((0, c.Z)(t)), (0, p.e)("report_second_look")
  }, [t]), E && !O && (0, r.jsxs)(u.ZP, {
    children: [(0, r.jsx)(u.Dx, {
      className: x.marginBottom8,
      children: I
    }), j && (0, r.jsx)(o.$jN, {})]
  })
}