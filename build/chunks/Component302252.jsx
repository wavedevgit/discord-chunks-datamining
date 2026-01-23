/** Chunk was on 36278 **/
/** chunk id: 302252, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk397927 = require("./397927.js"),
  Chunk930932 = require("./930932.js"),
  Chunk382935 = require("./382935.jsx"),
  Chunk131935 = require("./131935.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk670455 = require("./670455.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk716829 = require("./716829.js");

function m(e) {
  let {
    onClose: t,
    transitionState: m,
    analyticsData: p
  } = e, g = d.intl.string(d.t.Ss6tlb), v = d.intl.string(d.t.tLi4cR), f = {
    impressionName: o.ImpressionNames.VOICE_FEEDBACK_MODAL,
    impressionProperties: {
      rtc_connection_id: p.rtc_connection_id,
      media_session_id: p.media_session_id
    }
  }, O = {
    value: u.Eq.CONNECTION,
    label: d.intl.string(b.default.FVhMw6),
    problemsHeader: d.intl.string(d.t.FJmoxF),
    problemOptions: (0, r.A_)(),
    freeformConfig: {
      value: u.bO.FREEFORM,
      label: d.intl.string(d.t.emlT91)
    }
  }, y = {
    value: u.Eq.AUDIO,
    label: d.intl.string(b.default.PL2l6A),
    problemsHeader: d.intl.string(d.t.FJmoxF),
    problemOptions: (0, r.Op)({
      isMobile: false
    }),
    freeformConfig: {
      value: u.X.FREEFORM,
      label: d.intl.string(d.t.emlT91)
    }
  }, E = {
    value: u.Eq.VIDEO,
    label: d.intl.string(b.default["0WFzPh"]),
    problemsHeader: d.intl.string(d.t.FJmoxF),
    problemOptions: (0, r.de)(),
    freeformConfig: {
      value: u.AO.FREEFORM,
      label: d.intl.string(d.t.emlT91)
    }
  }, A = {
    value: u.Eq.PEOPLE,
    label: d.intl.string(b.default.Moa3W9),
    problemsHeader: d.intl.string(d.t.FJmoxF),
    problemOptions: (0, r.TK)(),
    freeformConfig: {
      value: u.CW.FREEFORM,
      label: d.intl.string(d.t.emlT91)
    }
  };
  return (0, i.jsx)(l.A, {
    onMount: () => {
      c.default.track(_.HAw.OPEN_MODAL, {
        type: "voice",
        source: "Feedback Modal"
      })
    },
    onSubmit: function(e) {
      var t, o;
      let {
        dontShowAgain: l,
        rating: c,
        feedback: b,
        category: m,
        problem: g
      } = e;
      l && (0, r.n3)({
        feedbackType: u.MW.VOICE,
        location: "VoiceCallFeedbackModal"
      }), null == c || ((0, s.A)(_.HAw.CALL_REPORT_PROBLEM, {
        rating: c,
        category: m,
        reasonDescription: null != (t = null == g ? true : g.value) ? t : null,
        variant: null != (o = null == g ? true : g.variant) ? o : null,
        feedback: b,
        analyticsData: p
      }), null != g && (0, a.mMO)(async () => {
        let {
          default: e
        } = await n.e("37836").then(n.bind(n, 845671));
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
          body: d.intl.string(d.t["d9+vQ8"])
        }, t))
      }))
    },
    onClose: t,
    ratingHeader: g,
    ratingEmojiKind: "face",
    ratingBody: v,
    categoriesHeader: d.intl.string(b.default.tq8598),
    optionsTree: [O, y, E, A],
    impression: f,
    transitionState: m
  })
}