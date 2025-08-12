/** Chunk was on 48149 **/
/** chunk id: 450634, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
    embeddedActivityLocation: g,
    activityApplication: v,
    onClose: y,
    transitionState: h,
    analyticsData: O
  } = t;
  a.useEffect(() => {
    r.default.track(u.rMx.OPEN_MODAL, {
      type: "Activity Feedback Modal",
      application_id: v.id,
      application_name: v.name,
      game_id: v.id,
      source: "Activity End"
    })
  }, [v]);
  let T = (null == (e = v.embeddedActivityConfig) ? true : e.displays_advertisements) === true;
  return (0, i.jsx)(c.Z, {
    modalType: "activity",
    header: m.intl.formatToPlainString(m.t.QXYwoK, {
      applicationName: v.name
    }),
    body: m.intl.string(m.t["9hk2KC"]),
    problemTitle: m.intl.string(m.t.g1q5fn),
    problems: (0, _.Z)(true, T),
    freeformNeededProblems: p,
    onSubmit: function(t) {
      var e;
      let {
        rating: a,
        problem: c,
        dontShowAgain: _,
        feedback: s
      } = t;
      _ && (r.default.track(u.rMx.ACTIVITY_REPORT_DONT_SHOW, {
        application_id: v.id,
        rating: a
      }), (0, l.Uv)({
        feedbackType: b.nw.ACTIVITY,
        location: "ActivityFeedback"
      })), null != a && ((0, d.Z)({
        problem: null != (e = null == c ? true : c.value) ? e : null,
        channel: f,
        embeddedActivityLocation: g,
        feedback: s,
        activityApplication: v,
        analyticsData: O,
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
          body: m.intl.string(m.t["zuHR+/"])
        }, e))
      }))
    },
    onClose: y,
    transitionState: h,
    otherKey: s.K8.OTHER
  })
}