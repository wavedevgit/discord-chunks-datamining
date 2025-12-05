/** Chunk was on 96888 **/
/** chunk id: 988645, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk957115 = require("./957115.js"),
  Chunk328171 = require("./328171.js"),
  Chunk13137 = require("./13137.jsx"),
  Chunk445102 = require("./445102.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk336084 = require("./336084.js");

function v(e) {
  let {
    onClose: t,
    transitionState: v,
    analyticsData: _
  } = e, {
    surveyEmojiKind: m
  } = (0, o.R)({
    location: "VoiceCallFeedback"
  }), E = f.intl.string(f.t.Ss6tlb), p = f.intl.string(f.t.tLi4cR), g = {
    impressionName: l.ImpressionNames.VOICE_FEEDBACK_MODAL,
    impressionProperties: {
      rtc_connection_id: _.rtc_connection_id,
      media_session_id: _.media_session_id
    }
  }, h = {
    value: b.tX.CONNECTION,
    label: f.intl.string(O.default.FVhMw6),
    problemsHeader: f.intl.string(f.t.FJmoxF),
    problemOptions: (0, r.Z1)(),
    freeformConfig: {
      value: b.T_.FREEFORM,
      label: f.intl.string(f.t.emlT91)
    }
  }, S = {
    value: b.tX.AUDIO,
    label: f.intl.string(O.default.PL2l6A),
    problemsHeader: f.intl.string(f.t.FJmoxF),
    problemOptions: (0, r.w9)({
      isMobile: false
    }),
    freeformConfig: {
      value: b.b9.FREEFORM,
      label: f.intl.string(f.t.emlT91)
    }
  }, j = {
    value: b.tX.VIDEO,
    label: f.intl.string(O.default["0WFzPh"]),
    problemsHeader: f.intl.string(f.t.FJmoxF),
    problemOptions: (0, r.NX)(),
    freeformConfig: {
      value: b.ct.FREEFORM,
      label: f.intl.string(f.t.emlT91)
    }
  }, y = {
    value: b.tX.PEOPLE,
    label: f.intl.string(O.default.Moa3W9),
    problemsHeader: f.intl.string(f.t.FJmoxF),
    problemOptions: (0, r.hP)(),
    freeformConfig: {
      value: b.s_.FREEFORM,
      label: f.intl.string(f.t.emlT91)
    }
  };
  return (0, a.jsx)(s.Z, {
    onMount: () => {
      d.default.track(c.rMx.OPEN_MODAL, {
        type: "voice",
        source: "Feedback Modal"
      })
    },
    onSubmit: function(e) {
      var t, l;
      let {
        dontShowAgain: o,
        rating: s,
        feedback: d,
        category: O,
        problem: v
      } = e;
      o && (0, r.Uv)({
        feedbackType: b.nw.VOICE,
        location: "VoiceCallFeedbackModal"
      }), null != s && ((0, u.Z)(c.rMx.CALL_REPORT_PROBLEM, {
        rating: s,
        category: O,
        reasonDescription: null != (t = null == v ? true : v.value) ? t : null,
        variant: null != (l = null == v ? true : v.variant) ? l : null,
        feedback: d,
        analyticsData: _
      }), null != v && (0, i.ZDy)(async () => {
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
          body: f.intl.string(f.t["d9+vQ8"])
        }, t))
      }))
    },
    onClose: t,
    ratingHeader: E,
    ratingEmojiKind: m,
    ratingBody: p,
    categoriesHeader: f.intl.string(O.default.tq8598),
    optionsTree: [h, S, j, y],
    impression: g,
    transitionState: v
  })
}