/** Chunk was on 66788 **/
/** chunk id: 988645, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk957115 = require("./957115.js"),
  Chunk13137 = require("./13137.jsx"),
  Chunk445102 = require("./445102.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk40207 = require("./40207.js");

function m(e) {
  let {
    onClose: t,
    transitionState: m,
    analyticsData: p
  } = e, f = b.intl.string(b.t.Ss6tlb), g = b.intl.string(b.t.tLi4cR), v = {
    impressionName: o.ImpressionNames.VOICE_FEEDBACK_MODAL,
    impressionProperties: {
      rtc_connection_id: p.rtc_connection_id,
      media_session_id: p.media_session_id
    }
  }, O = {
    value: u.tX.CONNECTION,
    label: b.intl.string(_.default.FVhMw6),
    problemsHeader: b.intl.string(b.t.FJmoxF),
    problemOptions: (0, r.Z1)(),
    freeformConfig: {
      value: u.T_.FREEFORM,
      label: b.intl.string(b.t.emlT91)
    }
  }, y = {
    value: u.tX.AUDIO,
    label: b.intl.string(_.default.PL2l6A),
    problemsHeader: b.intl.string(b.t.FJmoxF),
    problemOptions: (0, r.w9)({
      isMobile: false
    }),
    freeformConfig: {
      value: u.b9.FREEFORM,
      label: b.intl.string(b.t.emlT91)
    }
  }, F = {
    value: u.tX.VIDEO,
    label: b.intl.string(_.default["0WFzPh"]),
    problemsHeader: b.intl.string(b.t.FJmoxF),
    problemOptions: (0, r.NX)(),
    freeformConfig: {
      value: u.ct.FREEFORM,
      label: b.intl.string(b.t.emlT91)
    }
  }, h = {
    value: u.tX.PEOPLE,
    label: b.intl.string(_.default.Moa3W9),
    problemsHeader: b.intl.string(b.t.FJmoxF),
    problemOptions: (0, r.hP)(),
    freeformConfig: {
      value: u.s_.FREEFORM,
      label: b.intl.string(b.t.emlT91)
    }
  };
  return (0, a.jsx)(l.Z, {
    onMount: () => {
      d.default.track(s.rMx.OPEN_MODAL, {
        type: "voice",
        source: "Feedback Modal"
      })
    },
    onSubmit: function(e) {
      var t, o;
      let {
        dontShowAgain: l,
        rating: d,
        feedback: _,
        category: m,
        problem: f
      } = e;
      l && (0, r.Uv)({
        feedbackType: u.nw.VOICE,
        location: "VoiceCallFeedbackModal"
      }), null != d && ((0, c.Z)(s.rMx.CALL_REPORT_PROBLEM, {
        rating: d,
        category: m,
        reasonDescription: null != (t = null == f ? true : f.value) ? t : null,
        variant: null != (o = null == f ? true : f.variant) ? o : null,
        feedback: _,
        analyticsData: p
      }), null != f && (0, i.ZDy)(async () => {
        let {
          default: e
        } = await n.e("14466").then(n.bind(n, 729328));
        return t => (0, a.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), a.forEach(function(t) {
              var a;
              a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = a
            })
          }
          return e
        }({
          body: b.intl.string(b.t["d9+vQ8"])
        }, t))
      }))
    },
    onClose: t,
    ratingHeader: f,
    ratingEmojiKind: "face",
    ratingBody: g,
    categoriesHeader: b.intl.string(_.default.tq8598),
    optionsTree: [O, y, F, h],
    impression: v,
    transitionState: m
  })
}