/** Chunk was on 31216 **/
/** chunk id: 450634, original params: t,e,n (module,exports,require) **/
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

function f(t) {
  var e;
  let {
    channel: f,
    embeddedActivityLocation: v,
    activityApplication: g,
    onClose: y,
    transitionState: O,
    analyticsData: h
  } = t;
  a.useEffect(() => {
    r.default.track(s.rMx.OPEN_MODAL, {
      type: "Activity Feedback Modal",
      application_id: g.id,
      application_name: g.name,
      game_id: g.id,
      source: "Activity End"
    })
  }, [g]);
  let j = (null == (e = g.embeddedActivityConfig) ? true : e.displays_advertisements) === true;
  return (0, i.jsx)(c.Z, {
    modalType: "activity",
    header: m.intl.formatToPlainString(m.t.QXYwoD, {
      applicationName: g.name
    }),
    body: m.intl.string(m.t["9hk2KF"]),
    problemTitle: m.intl.string(m.t.g1q5fr),
    problems: (0, _.Z)(true, j),
    freeformNeededProblems: p,
    onSubmit: function(t) {
      var e;
      let {
        rating: a,
        problem: c,
        dontShowAgain: _,
        feedback: u
      } = t;
      _ && (r.default.track(s.rMx.ACTIVITY_REPORT_DONT_SHOW, {
        application_id: g.id,
        rating: a
      }), (0, l.Uv)({
        feedbackType: b.nw.ACTIVITY,
        location: "ActivityFeedback"
      })), null != a && ((0, d.Z)({
        problem: null != (e = null == c ? true : c.value) ? e : null,
        channel: f,
        embeddedActivityLocation: v,
        feedback: u,
        activityApplication: g,
        analyticsData: h,
        location: "Activity End",
        rating: a
      }), null != c && (0, o.ZDy)(async () => {
        let {
          default: t
        } = await n.e("14466").then(n.bind(n, 729328));
        return e => (0, i.jsx)(t, function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), i.forEach(function(e) {
              var i;
              i = n[e], e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : t[e] = i
            })
          }
          return t
        }({
          body: m.intl.string(m.t["zuHR+y"])
        }, e))
      }))
    },
    onClose: y,
    transitionState: O,
    otherKey: u.K8.OTHER
  })
}