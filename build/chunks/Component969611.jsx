/** Chunk was on 24921 **/
/** chunk id: 969611, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk930932 = require("./930932.js"),
  Chunk612479 = require("./612479.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk545125 = require("./545125.js"),
  Chunk86039 = require("./86039.js"),
  Chunk360469 = require("./360469.js"),
  Chunk652215 = require("./652215.js"),
  Chunk670455 = require("./670455.js"),
  Chunk985018 = require("./985018.jsx");
let m = [Chunk360469.CS.OTHER, Chunk360469.CS.ADS, Chunk360469.CS.NOT_FUN];

function f(t) {
  var e;
  let {
    channel: f,
    embeddedActivityLocation: v,
    activityApplication: g,
    onClose: y,
    transitionState: O,
    analyticsData: S
  } = t;
  l.useEffect(() => {
    r.default.track(u.HAw.OPEN_MODAL, {
      type: "Activity Feedback Modal",
      application_id: g.id,
      application_name: g.name,
      game_id: g.id,
      source: "Activity End"
    })
  }, [g]);
  let A = (null == (e = g.embeddedActivityConfig) ? true : e.displays_advertisements) === true;
  return (0, n.jsx)(c.A, {
    modalType: "activity",
    header: p.intl.formatToPlainString(p.t.QXYwoD, {
      applicationName: g.name
    }),
    body: p.intl.string(p.t["9hk2KF"]),
    problemTitle: p.intl.string(p.t.g1q5fr),
    problems: (0, _.A)(true, A),
    freeformNeededProblems: m,
    onSubmit: function(t) {
      var e;
      let {
        rating: l,
        problem: c,
        dontShowAgain: _,
        feedback: s
      } = t;
      _ && (r.default.track(u.HAw.ACTIVITY_REPORT_DONT_SHOW, {
        application_id: g.id,
        rating: l
      }), (0, o.n3)({
        feedbackType: b.MW.ACTIVITY,
        location: "ActivityFeedback"
      })), null == l || ((0, d.A)({
        problem: null != (e = null == c ? true : c.value) ? e : null,
        channel: f,
        embeddedActivityLocation: v,
        feedback: s,
        activityApplication: g,
        analyticsData: S,
        location: "Activity End",
        rating: l
      }), null != c && (0, a.mMO)(async () => {
        let {
          default: t
        } = await i.e("37836").then(i.bind(i, 845671));
        return e => (0, n.jsx)(t, function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {},
              n = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
              return Object.getOwnPropertyDescriptor(i, t).enumerable
            }))), n.forEach(function(e) {
              var n;
              n = i[e], e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : t[e] = n
            })
          }
          return t
        }({
          body: p.intl.string(p.t["zuHR+y"])
        }, e))
      }))
    },
    onClose: y,
    transitionState: O,
    otherKey: s.CS.OTHER
  })
}