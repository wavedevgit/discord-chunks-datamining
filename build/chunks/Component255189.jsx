/** Chunk was on 94759 **/
/** chunk id: 255189, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk930932 = require("./930932.js"),
  Chunk612479 = require("./612479.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk773822 = require("./773822.js"),
  Chunk507887 = require("./507887.js"),
  Chunk652215 = require("./652215.js"),
  Chunk670455 = require("./670455.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}
let d = [Chunk773822.G.OTHER];

function m(e) {
  let {
    reportId: t,
    reportType: m
  } = e, y = function(e, t) {
    if (null == e) return {};
    var r, n, o, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          l = Object.getOwnPropertyNames(e);
        for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    return l
  }(e, ["reportId", "reportType"]);
  return o.useEffect(() => {
    _.default.track(b.HAw.IAR_FEEDBACK_MODAL_VIEWED, {
      report_id: t,
      report_type: m
    })
  }, [t, m]), (0, n.jsx)(a.A, s({
    modalType: "in_app_report",
    header: f.intl.string(f.t.MP5lDj),
    body: f.intl.string(f.t["7Ct0Dj"]),
    problemTitle: f.intl.string(f.t.FJmoxF),
    problems: (0, i.A)(),
    freeformNeededProblems: d,
    onSubmit: function(e) {
      var o;
      let {
        rating: a,
        problem: _,
        dontShowAgain: i,
        feedback: b
      } = e;
      i && (0, c.n3)({
        feedbackType: p.MW.IN_APP_REPORTS,
        location: "InAppReportsFeedbackModal"
      }), (0, u.A)({
        rating: a,
        problem: null != (o = null == _ ? true : _.value) ? o : null,
        feedback: b,
        reportId: t,
        reportType: m,
        dontShowAgain: i
      }), null != a && null != _ && (0, l.mMO)(async () => {
        let {
          default: e
        } = await r.e("37836").then(r.bind(r, 845671));
        return t => (0, n.jsx)(e, s({
          body: f.intl.string(f.t["d9+vQ8"])
        }, t))
      })
    },
    otherKey: i.G.OTHER
  }, y))
}