/** Chunk was on 11495 (ac2acaad31cd31d2.js) **/
n.d(t, {
  default: () => x
});
var a = n(200651),
  r = n(192379),
  l = n(481060),
  s = n(332664),
  c = n(142497),
  o = n(626135),
  i = n(981631),
  u = n(190378),
  d = n(388032);

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a
    })
  }
  return e
}
let m = ["OTHER"];

function x(e) {
  let {
    analyticsData: t,
    transitionState: x,
    onClose: _
  } = e;
  return r.useEffect(() => {
    o.default.track(i.rMx.OPEN_MODAL, {
      type: "Video Background Feedback"
    })
  }, []), (0, a.jsx)(s.Z, {
    modalType: "video_background",
    header: d.NW.string(d.t.Wl8qXl),
    body: d.NW.string(d.t.vPw6j4),
    problemTitle: d.NW.string(d.t["UNFF8/"]),
    problems: [{
      value: "BAD_OUTLINE",
      label: d.NW.string(d.t.pyhS3t)
    }, {
      value: "BACKGROUND_DETECTION_ACCURACY",
      label: d.NW.string(d.t.cymRTU)
    }, {
      value: "FLICKERING",
      label: d.NW.string(d.t.xZ60CA)
    }, {
      value: "BACKGROUND_DETECTION_LAG",
      label: d.NW.string(d.t.DweTcX)
    }, {
      value: "OTHER",
      label: d.NW.string(d.t["emlT9/"])
    }],
    freeformNeededProblems: m,
    onSubmit: function(e) {
      var r, s;
      let {
        rating: m,
        problem: x,
        dontShowAgain: _,
        feedback: f
      } = e;
      _ && (0, c.Kw)(u.v.VIDEO_BACKGROUND_FEEDBACK), null != m && (o.default.track(i.rMx.VIDEO_BACKGROUND_FEEDBACK, (r = b({}, t), s = s = {
        reason: x,
        rating: m,
        feedback: f
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n.push.apply(n, a)
        }
        return n
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e))
      }), r)), null != x && (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("14466").then(n.bind(n, 729328));
        return t => (0, a.jsx)(e, b({
          body: d.NW.string(d.t.aHB11d)
        }, t))
      }))
    },
    onClose: _,
    transitionState: x,
    otherKey: "OTHER"
  })
}