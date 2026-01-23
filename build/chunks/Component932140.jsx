/** Chunk was on 23866 **/
/** chunk id: 932140, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk930932 = require("./930932.js"),
  Chunk612479 = require("./612479.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk670455 = require("./670455.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
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
let p = ["OTHER"];

function d(e) {
  let {
    analyticsData: t,
    transitionState: d,
    onClose: O
  } = e;
  return o.useEffect(() => {
    i.default.track(_.HAw.OPEN_MODAL, {
      type: "Video Background Feedback"
    })
  }, []), (0, n.jsx)(l.A, {
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
      var o, l, p, d;
      let {
        rating: O,
        problem: f,
        dontShowAgain: m,
        feedback: g
      } = e;
      m && (0, a.n3)({
        feedbackType: b.MW.VIDEO_BACKGROUND,
        location: "VideoBackgroundFeedbackModal"
      }), null != O && (l = null != (o = null == f ? true : f.value) ? o : null, i.default.track(_.HAw.VIDEO_BACKGROUND_FEEDBACK, (p = u({}, t), d = d = {
        reason: l,
        rating: O,
        feedback: g
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(d)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(d)).forEach(function(e) {
        Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(d, e))
      }), p)), null != f && (0, c.mMO)(async () => {
        let {
          default: e
        } = await r.e("37836").then(r.bind(r, 845671));
        return t => (0, n.jsx)(e, u({
          body: s.intl.string(s.t.aHB11f)
        }, t))
      }))
    },
    onClose: O,
    transitionState: d,
    otherKey: "OTHER"
  })
}