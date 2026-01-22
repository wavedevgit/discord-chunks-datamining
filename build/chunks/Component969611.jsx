/** Chunk was on 24921 **/
/** chunk id: 969611, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => v
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
let p = [Chunk360469.CS.OTHER, Chunk360469.CS.ADS, Chunk360469.CS.NOT_FUN];

function v(e) {
  var t;
  let {
    channel: v,
    embeddedActivityLocation: g,
    activityApplication: m,
    onClose: O,
    transitionState: y,
    analyticsData: S
  } = e;
  n.useEffect(() => {
    r.default.track(u.HAw.OPEN_MODAL, {
      type: "Activity Feedback Modal",
      application_id: m.id,
      application_name: m.name,
      game_id: m.id,
      source: "Activity End"
    })
  }, [m]);
  let A = (null == (t = m.embeddedActivityConfig) ? true : t.displays_advertisements) === true;
  return (0, i.jsx)(c.A, {
    modalType: "activity",
    header: _.intl.formatToPlainString(_.t.QXYwoD, {
      applicationName: m.name
    }),
    body: _.intl.string(_.t["9hk2KF"]),
    problemTitle: _.intl.string(_.t.g1q5fr),
    problems: (0, o.A)(true, A),
    freeformNeededProblems: p,
    onSubmit: function(e) {
      var t;
      let {
        rating: n,
        problem: c,
        dontShowAgain: o,
        feedback: b
      } = e;
      o && (r.default.track(u.HAw.ACTIVITY_REPORT_DONT_SHOW, {
        application_id: m.id,
        rating: n
      }), (0, d.n3)({
        feedbackType: s.MW.ACTIVITY,
        location: "ActivityFeedback"
      })), null == n || ((0, f.A)({
        problem: null != (t = null == c ? true : c.value) ? t : null,
        channel: v,
        embeddedActivityLocation: g,
        feedback: b,
        activityApplication: m,
        analyticsData: S,
        location: "Activity End",
        rating: n
      }), null != c && (0, l.mMO)(async () => {
        let {
          default: e
        } = await a.e("37836").then(a.bind(a, 845671));
        return t => (0, i.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(a);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
              return Object.getOwnPropertyDescriptor(a, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = a[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({
          body: _.intl.string(_.t["zuHR+y"])
        }, t))
      }))
    },
    onClose: O,
    transitionState: y,
    otherKey: b.CS.OTHER
  })
}