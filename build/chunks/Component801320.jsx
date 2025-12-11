/** Chunk was on 55114 **/
/** chunk id: 801320, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk957115 = require("./957115.js"),
  Chunk332664 = require("./332664.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      c = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (c = c.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), c.forEach(function(t) {
      var c;
      c = a[t], t in e ? Object.defineProperty(e, t, {
        value: c,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = c
    })
  }
  return e
}
let p = ["OTHER"];

function f(e) {
  let {
    analyticsData: t,
    transitionState: f,
    onClose: _
  } = e;
  return r.useEffect(() => {
    i.default.track(l.rMx.OPEN_MODAL, {
      type: "Video Background Feedback"
    })
  }, []), (0, c.jsx)(d.Z, {
    modalType: "video_background",
    header: s.intl.string(s.t.Wl8qXg),
    body: s.intl.string(s.t.vPw6j0),
    problemTitle: s.intl.string(s.t.UNFF85),
    problems: [{
      value: "BAD_OUTLINE",
      label: s.intl.string(s.t.pyhS3j)
    }, {
      value: "BACKGROUND_DETECTION_ACCURACY",
      label: s.intl.string(s.t.cymRTb)
    }, {
      value: "FLICKERING",
      label: s.intl.string(s.t.xZ60CB)
    }, {
      value: "BACKGROUND_DETECTION_LAG",
      label: s.intl.string(s.t.DweTcb)
    }, {
      value: "OTHER",
      label: s.intl.string(s.t.emlT91)
    }],
    freeformNeededProblems: p,
    onSubmit: function(e) {
      var r, d, p, f;
      let {
        rating: _,
        problem: m,
        dontShowAgain: O,
        feedback: y
      } = e;
      O && (0, o.Uv)({
        feedbackType: b.nw.VIDEO_BACKGROUND,
        location: "VideoBackgroundFeedbackModal"
      }), null != _ && (d = null != (r = null == m ? true : m.value) ? r : null, i.default.track(l.rMx.VIDEO_BACKGROUND_FEEDBACK, (p = u({}, t), f = f = {
        reason: d,
        rating: _,
        feedback: y
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(f)) : (function(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          a.push.apply(a, c)
        }
        return a
      })(Object(f)).forEach(function(e) {
        Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(f, e))
      }), p)), null != m && (0, n.ZDy)(async () => {
        let {
          default: e
        } = await a.e("14466").then(a.bind(a, 729328));
        return t => (0, c.jsx)(e, u({
          body: s.intl.string(s.t.aHB11f)
        }, t))
      }))
    },
    onClose: _,
    transitionState: f,
    otherKey: "OTHER"
  })
}