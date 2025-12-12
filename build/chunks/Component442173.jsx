/** Chunk was on 86932 **/
/** chunk id: 442173, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk957115 = require("./957115.js"),
  Chunk332664 = require("./332664.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk798733 = require("./798733.js"),
  Chunk559187 = require("./559187.js"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = a[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}
let _ = [Chunk798733.f.OTHER];

function m(e) {
  var {
    reportId: t,
    reportType: m
  } = e, g = function(e, t) {
    if (null == e) return {};
    var a, n, o = function(e, t) {
      if (null == e) return {};
      var a, n, o = {},
        r = Object.keys(e);
      for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (o[a] = e[a]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (n = 0; n < r.length; n++) a = r[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (o[a] = e[a])
    }
    return o
  }(e, ["reportId", "reportType"]);
  return o.useEffect(() => {
    l.default.track(u.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
      report_id: t,
      report_type: m
    })
  }, [t, m]), (0, n.jsx)(d.Z, s({
    modalType: "in_app_report",
    header: p.intl.string(p.t.MP5lDj),
    body: p.intl.string(p.t["7Ct0Dj"]),
    problemTitle: p.intl.string(p.t.FJmoxF),
    problems: (0, i.Z)(),
    freeformNeededProblems: _,
    onSubmit: function(e) {
      var o;
      let {
        rating: d,
        problem: l,
        dontShowAgain: i,
        feedback: u
      } = e;
      i && (0, c.Uv)({
        feedbackType: f.nw.IN_APP_REPORTS,
        location: "InAppReportsFeedbackModal"
      }), (0, b.Z)({
        rating: d,
        problem: null != (o = null == l ? true : l.value) ? o : null,
        feedback: u,
        reportId: t,
        reportType: m,
        dontShowAgain: i
      }), null != d && null != l && (0, r.ZDy)(async () => {
        let {
          default: e
        } = await a.e("14466").then(a.bind(a, 729328));
        return t => (0, n.jsx)(e, s({
          body: p.intl.string(p.t["d9+vQ8"])
        }, t))
      })
    },
    otherKey: i.f.OTHER
  }, g))
}