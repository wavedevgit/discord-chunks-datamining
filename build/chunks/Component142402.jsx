/** Chunk was on 74732 **/
/** chunk id: 142402, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk957115 = require("./957115.js"),
  Chunk157283 = require("./157283.js"),
  Chunk328171 = require("./328171.js"),
  Chunk891802 = require("./891802.js"),
  Chunk332664 = require("./332664.jsx"),
  Chunk13137 = require("./13137.jsx"),
  Chunk538211 = require("./538211.js"),
  Chunk698066 = require("./698066.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk70722 = require("./70722.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk805388 = require("./805388.js");
let v = [Chunk70722.kr.OTHER];

function j(e) {
  let {
    isStreamer: t,
    stream: j,
    streamApplication: S,
    onClose: w,
    transitionState: x,
    analyticsData: E
  } = e;
  i.useEffect(() => {
    p.default.track(_.rMx.OPEN_MODAL, {
      type: "Stream Problem Report",
      other_user_id: j.ownerId,
      application_id: null != S ? S.id : null,
      application_name: null != S ? S.name : null,
      game_id: null != S ? S.id : null,
      source: "Stream End"
    })
  }, [j.ownerId, S]);
  let {
    showRefreshedStreamTaxonomy: P
  } = (0, s.u)({
    location: "StreamFeedback"
  }), {
    surveyEmojiKind: C
  } = (0, c.R)({
    location: "StreamFeedback"
  });

  function k(e) {
    var t, i, l;
    let {
      dontShowAgain: s,
      rating: c,
      feedback: u
    } = e;
    if (s && (0, a.Uv)({
        feedbackType: O.nw.STREAM,
        location: "StreamFeedback"
      }), null != c) {
      if (P) {
        let {
          category: n,
          problem: r
        } = e;
        (0, f.Z)({
          problem: null != (t = null == r ? true : r.value) ? t : null,
          category: n,
          variant: null != (i = null == r ? true : r.variant) ? i : null,
          stream: j,
          feedback: u,
          streamApplication: S,
          analyticsData: E,
          location: "Stream End",
          rating: c
        })
      } else {
        let {
          problem: t
        } = e;
        (0, f.Z)({
          problem: null != (l = null == t ? true : t.value) ? l : null,
          stream: j,
          feedback: u,
          streamApplication: S,
          analyticsData: E,
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
          body: y.intl.string(y.t.mMTVnp)
        }, t))
      })
    }
  }
  let {
    showVibesHoneypot: R
  } = (0, u.X)({
    location: "StreamFeedback"
  }), T = y.intl.string(y.t["5smP3d"]), N = y.intl.string(y.t["0uxA2d"]), F = y.intl.string(y.t.CqjnLC), D = {
    impressionName: l.ImpressionNames.STREAM_FEEDBACK_MODAL,
    impressionProperties: {
      media_session_id: E.media_session_id,
      rtc_connection_id: E.rtc_connection_id,
      parent_media_session_id: E.parent_media_session_id
    }
  };
  if (P) {
    let e = {
        value: O.tX.CONNECTION,
        label: y.intl.string(h.default.FVhMw8),
        problemsHeader: y.intl.string(y.t["6Y1t5O"]),
        problemOptions: (0, a.Z1)(),
        freeformConfig: {
          value: O.T_.FREEFORM,
          label: y.intl.string(y.t["emlT9/"])
        }
      },
      n = {
        value: O.tX.AUDIO,
        label: y.intl.string(h.default.PL2l6O),
        problemsHeader: y.intl.string(y.t["6Y1t5O"]),
        problemOptions: (0, a.w9)({
          isMobile: false
        }),
        freeformConfig: {
          value: O.b9.FREEFORM,
          label: y.intl.string(y.t["emlT9/"])
        }
      },
      i = {
        value: O.tX.VIDEO,
        label: y.intl.string(h.default["0WFzPj"]),
        problemsHeader: y.intl.string(y.t["6Y1t5O"]),
        problemOptions: (0, a.NX)(),
        freeformConfig: {
          value: O.ct.FREEFORM,
          label: y.intl.string(y.t["emlT9/"])
        }
      },
      l = {
        value: O.tX.PEOPLE,
        label: y.intl.string(h.default.Moa3W1),
        problemsHeader: y.intl.string(y.t["6Y1t5O"]),
        problemOptions: (0, a.hP)(),
        freeformConfig: {
          value: O.s_.FREEFORM,
          label: y.intl.string(y.t["emlT9/"])
        }
      },
      o = {
        value: t ? O.tX.STREAMING : O.tX.STREAM_WATCHING,
        label: y.intl.string(t ? h.default["0ZBLiY"] : h.default.TVTIT0),
        problemsHeader: y.intl.string(y.t["6Y1t5O"]),
        problemOptions: (0, a.Ez)({
          isStreamer: t
        }),
        freeformConfig: {
          value: O.MJ.FREEFORM,
          label: y.intl.string(y.t["emlT9/"])
        }
      };
    return (0, r.jsx)(b.Z, {
      onSubmit: k,
      onClose: w,
      ratingHeader: T,
      ratingEmojiKind: C,
      ratingBody: t ? N : F,
      categoriesHeader: y.intl.string(h.default["tq859/"]),
      optionsTree: [e, n, i, o, l],
      impression: D,
      transitionState: x
    })
  }
  return (0, r.jsx)(m.Z, {
    modalType: "stream",
    header: T,
    ratingEmojiKind: C,
    impression: D,
    body: t ? N : F,
    problemTitle: y.intl.string(y.t["6Y1t5O"]),
    problems: (0, d.Z)({
      isStreamer: t,
      isEndStream: true,
      showVibesHoneypot: R
    }),
    freeformNeededProblems: v,
    onSubmit: k,
    onClose: w,
    transitionState: x,
    otherKey: g.kr.OTHER
  })
}