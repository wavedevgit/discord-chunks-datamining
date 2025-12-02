/** Chunk was on 74732 **/
/** chunk id: 142402, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk957115 = require("./957115.js"),
  Chunk157283 = require("./157283.js"),
  Chunk328171 = require("./328171.js"),
  Chunk332664 = require("./332664.jsx"),
  Chunk13137 = require("./13137.jsx"),
  Chunk538211 = require("./538211.js"),
  Chunk698066 = require("./698066.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk70722 = require("./70722.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk949250 = require("./949250.js");
let v = [Chunk70722.kr.OTHER];

function j(e) {
  let {
    isStreamer: t,
    stream: j,
    streamApplication: h,
    onClose: E,
    transitionState: x,
    analyticsData: S
  } = e;
  l.useEffect(() => {
    f.default.track(p.rMx.OPEN_MODAL, {
      type: "Stream Problem Report",
      other_user_id: j.ownerId,
      application_id: null != h ? h.id : null,
      application_name: null != h ? h.name : null,
      game_id: null != h ? h.id : null,
      source: "Stream End"
    })
  }, [j.ownerId, h]);
  let {
    showRefreshedStreamTaxonomy: P
  } = (0, s.u)({
    location: "StreamFeedback"
  }), {
    surveyEmojiKind: C
  } = (0, c.R)({
    location: "StreamFeedback"
  });

  function w(e) {
    var t, l, i;
    let {
      dontShowAgain: s,
      rating: c,
      feedback: u
    } = e;
    if (s && (0, a.Uv)({
        feedbackType: g.nw.STREAM,
        location: "StreamFeedback"
      }), null != c) {
      if (P) {
        let {
          category: n,
          problem: r
        } = e;
        (0, m.Z)({
          problem: null != (t = null == r ? true : r.value) ? t : null,
          category: n,
          variant: null != (l = null == r ? true : r.variant) ? l : null,
          stream: j,
          feedback: u,
          streamApplication: h,
          analyticsData: S,
          location: "Stream End",
          rating: c
        })
      } else {
        let {
          problem: t
        } = e;
        (0, m.Z)({
          problem: null != (i = null == t ? true : t.value) ? i : null,
          stream: j,
          feedback: u,
          streamApplication: h,
          analyticsData: S,
          location: "Stream End",
          rating: c
        })
      }
      null != e.problem && (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("14466").then(n.bind(n, 729328));
        return t => (0, r.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({
          body: O.intl.string(O.t.mMTVnv)
        }, t))
      })
    }
  }
  let R = O.intl.string(O.t["5smP3R"]),
    k = O.intl.string(O.t["0uxA2V"]),
    T = O.intl.string(O.t.CqjnLN),
    F = {
      impressionName: i.ImpressionNames.STREAM_FEEDBACK_MODAL,
      impressionProperties: {
        media_session_id: S.media_session_id,
        rtc_connection_id: S.rtc_connection_id,
        parent_media_session_id: S.parent_media_session_id
      }
    };
  if (P) {
    let e = {
        value: g.tX.CONNECTION,
        label: O.intl.string(y.default.FVhMw6),
        problemsHeader: O.intl.string(O.t["6Y1t5P"]),
        problemOptions: (0, a.Z1)(),
        freeformConfig: {
          value: g.T_.FREEFORM,
          label: O.intl.string(O.t.emlT91)
        }
      },
      n = {
        value: g.tX.AUDIO,
        label: O.intl.string(y.default.PL2l6A),
        problemsHeader: O.intl.string(O.t["6Y1t5P"]),
        problemOptions: (0, a.w9)({
          isMobile: false
        }),
        freeformConfig: {
          value: g.b9.FREEFORM,
          label: O.intl.string(O.t.emlT91)
        }
      },
      l = {
        value: g.tX.VIDEO,
        label: O.intl.string(y.default["0WFzPh"]),
        problemsHeader: O.intl.string(O.t["6Y1t5P"]),
        problemOptions: (0, a.NX)(),
        freeformConfig: {
          value: g.ct.FREEFORM,
          label: O.intl.string(O.t.emlT91)
        }
      },
      i = {
        value: g.tX.PEOPLE,
        label: O.intl.string(y.default.Moa3W9),
        problemsHeader: O.intl.string(O.t["6Y1t5P"]),
        problemOptions: (0, a.hP)(),
        freeformConfig: {
          value: g.s_.FREEFORM,
          label: O.intl.string(O.t.emlT91)
        }
      },
      o = {
        value: t ? g.tX.STREAMING : g.tX.STREAM_WATCHING,
        label: O.intl.string(t ? y.default["0ZBLiZ"] : y.default.TVTIT1),
        problemsHeader: O.intl.string(O.t["6Y1t5P"]),
        problemOptions: (0, a.Ez)({
          isStreamer: t
        }),
        freeformConfig: {
          value: g.MJ.FREEFORM,
          label: O.intl.string(O.t.emlT91)
        }
      };
    return (0, r.jsx)(b.Z, {
      onSubmit: w,
      onClose: E,
      ratingHeader: R,
      ratingEmojiKind: C,
      ratingBody: t ? k : T,
      categoriesHeader: O.intl.string(y.default.tq8598),
      optionsTree: [e, n, l, o, i],
      impression: F,
      transitionState: x
    })
  }
  return (0, r.jsx)(u.Z, {
    modalType: "stream",
    header: R,
    ratingEmojiKind: C,
    impression: F,
    body: t ? k : T,
    problemTitle: O.intl.string(O.t["6Y1t5P"]),
    problems: (0, d.Z)({
      isStreamer: t,
      isEndStream: true
    }),
    freeformNeededProblems: v,
    onSubmit: w,
    onClose: E,
    transitionState: x,
    otherKey: _.kr.OTHER
  })
}