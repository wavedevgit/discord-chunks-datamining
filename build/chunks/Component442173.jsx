/** Chunk was on 94723 **/
/** chunk id: 442173, original params: e,t,n (module,exports,require) **/
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
    var n = null != arguments[t] ? arguments[t] : {},
      o = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), o.forEach(function(t) {
      var o;
      o = n[t], t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = o
    })
  }
  return e
}
let f = [Chunk798733.f.OTHER];

function m(e) {
  var {
    reportId: t,
    reportType: m
  } = e, g = function(e, t) {
    if (null == e) return {};
    var n, o, r = function(e, t) {
      if (null == e) return {};
      var n, o, r = {},
        c = Object.keys(e);
      for (o = 0; o < c.length; o++) n = c[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(e);
      for (o = 0; o < c.length; o++) n = c[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["reportId", "reportType"]);
  return r.useEffect(() => {
    i.default.track(b.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
      report_id: t,
      report_type: m
    })
  }, [t, m]), (0, o.jsx)(l.Z, s({
    modalType: "in_app_report",
    header: p.intl.string(p.t.MP5lDj),
    body: p.intl.string(p.t["7Ct0Dj"]),
    problemTitle: p.intl.string(p.t.FJmoxF),
    problems: (0, _.Z)(),
    freeformNeededProblems: f,
    onSubmit: function(e) {
      var r;
      let {
        rating: l,
        problem: i,
        dontShowAgain: _,
        feedback: b
      } = e;
      _ && (0, a.Uv)({
        feedbackType: d.nw.IN_APP_REPORTS,
        location: "InAppReportsFeedbackModal"
      }), (0, u.Z)({
        rating: l,
        problem: null != (r = null == i ? true : i.value) ? r : null,
        feedback: b,
        reportId: t,
        reportType: m,
        dontShowAgain: _
      }), null != l && null != i && (0, c.ZDy)(async () => {
        let {
          default: e
        } = await n.e("14466").then(n.bind(n, 729328));
        return t => (0, o.jsx)(e, s({
          body: p.intl.string(p.t["d9+vQ8"])
        }, t))
      })
    },
    otherKey: _.f.OTHER
  }, g))
}