/** Chunk was on 31216 **/
/** chunk id: 450634, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk957115 = require("./957115.js"),
  Chunk332664 = require("./332664.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk672655 = require("./672655.js"),
  Chunk768015 = require("./768015.js"),
  Chunk701488 = require("./701488.js"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx");
let p = [Chunk701488.K8.OTHER, Chunk701488.K8.ADS, Chunk701488.K8.NOT_FUN];

function f(e) {
  var t;
  let {
    channel: f,
    embeddedActivityLocation: v,
    activityApplication: g,
    onClose: y,
    transitionState: h,
    analyticsData: O
  } = e;
  a.useEffect(() => {
    r.default.track(u.rMx.OPEN_MODAL, {
      type: "Activity Feedback Modal",
      application_id: g.id,
      application_name: g.name,
      game_id: g.id,
      source: "Activity End"
    })
  }, [g]);
  let j = (null == (t = g.embeddedActivityConfig) ? true : t.displays_advertisements) === true;
  return (0, i.jsx)(c.Z, {
    modalType: "activity",
    header: m.intl.formatToPlainString(m.t.QXYwoD, {
      applicationName: g.name
    }),
    body: m.intl.string(m.t["9hk2KF"]),
    problemTitle: m.intl.string(m.t.g1q5fr),
    problems: (0, _.Z)(true, j),
    freeformNeededProblems: p,
    onSubmit: function(e) {
      var t;
      let {
        rating: a,
        problem: c,
        dontShowAgain: _,
        feedback: s
      } = e;
      _ && (r.default.track(u.rMx.ACTIVITY_REPORT_DONT_SHOW, {
        application_id: g.id,
        rating: a
      }), (0, l.Uv)({
        feedbackType: b.nw.ACTIVITY,
        location: "ActivityFeedback"
      })), null != a && ((0, d.Z)({
        problem: null != (t = null == c ? true : c.value) ? t : null,
        channel: f,
        embeddedActivityLocation: v,
        feedback: s,
        activityApplication: g,
        analyticsData: O,
        location: "Activity End",
        rating: a
      }), null != c && (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("14466").then(n.bind(n, 729328));
        return t => (0, i.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({
          body: m.intl.string(m.t["zuHR+y"])
        }, t))
      }))
    },
    onClose: y,
    transitionState: h,
    otherKey: s.K8.OTHER
  })
}